// src/pages/Journal.jsx
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase'
import { collection, addDoc } from 'firebase/firestore'

function fmt(d) {
  try {
    return new Date(d).toLocaleString()
  } catch { return d }
}

export default function Journal(){
  const [list, setList] = useState(()=> JSON.parse(localStorage.getItem('gowell_journal')||'[]'))
  const [text, setText] = useState('')
  const [editingIdx, setEditingIdx] = useState(-1)

  useEffect(()=> localStorage.setItem('gowell_journal', JSON.stringify(list)), [list])

  const add = async () => {
    if(!text.trim()) return
    const entry = { text: text.trim(), date: new Date().toISOString() }
    setList(prev=>[entry, ...prev])
    setText('')
    try { await addDoc(collection(db,'journal'), entry) } catch(e){}
  }

  const saveEdit = (idx) => {
    setList(l => l.map((it,i)=> i===idx ? {...it, text} : it))
    setEditingIdx(-1)
    setText('')
  }

  const remove = (idx) => setList(l=> l.filter((_,i)=> i!==idx))

  return (
    <div>
      <div className="card">
        <h2>Дневник</h2>
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Запиши свою мысль..." className="input" style={{minHeight:120}} />
        <div style={{display:'flex',justifyContent:'flex-end',marginTop:8}}>
          <button className="btn" onClick={add}>Сохранить запись</button>
        </div>

        <h3 style={{marginTop:16}}>Записи</h3>
        <div style={{display:'grid',gap:12}}>
          {list.map((it,i)=>(
            <div key={i} className="card">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{fontWeight:600}}>{fmt(it.date)}</div>
                <div style={{display:'flex',gap:8}}>
                  <button className="btn ghost" onClick={()=>{ setEditingIdx(i); setText(it.text) }}>Редактировать</button>
                  <button className="btn ghost" onClick={()=>remove(i)}>Удалить</button>
                </div>
              </div>
              <div style={{marginTop:8}}>{it.text}</div>
              {editingIdx===i && (
                <div style={{marginTop:8,display:'flex',gap:8}}>
                  <button className="btn" onClick={()=>saveEdit(i)}>Сохранить</button>
                  <button className="btn ghost" onClick={()=>{ setEditingIdx(-1); setText('') }}>Отмена</button>
                </div>
              )}
            </div>
          ))}
          {list.length===0 && <div className="small">Записей пока нет</div>}
        </div>
      </div>
    </div>
  )
}
