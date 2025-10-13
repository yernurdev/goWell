// src/pages/Mood.jsx
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

const MOODS = [
  { id:'joy', label:'Радость', color:'#FFD6E8' },
  { id:'sad', label:'Грусть', color:'#DDE8FF' },
  { id:'anx', label:'Тревога', color:'#FFE9D6' },
  { id:'calm', label:'Спокойствие', color:'#E8FFF4' }
]

export default function Mood(){
  const [moods, setMoods] = useState(()=> JSON.parse(localStorage.getItem('gowell_moods')||'[]'))
  const [note, setNote] = useState('')

  useEffect(()=> localStorage.setItem('gowell_moods', JSON.stringify(moods)), [moods])

  async function add(mood) {
    const item = { mood, note, date: new Date().toISOString() }
    setMoods(prev=>[item, ...prev])
    setNote('')
    // push to Firestore (best-effort)
    try {
      await addDoc(collection(db,'moods'), item)
    } catch(e) {
      // silent
    }
  }

  return (
    <div>
      <div className="card">
        <h2>Трекер настроения</h2>
        <p className="small">Нажми эмоцию и добавь заметку — полезно для осознанности.</p>

        <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:8}}>
          {MOODS.map(m=>(
            <div key={m.id} className="card" style={{minWidth:160, flex:'1 1 160px', background:m.color}}>
              <h4 style={{margin:0}}>{m.label}</h4>
              <p className="small">Добавь заметку</p>
              <textarea className="input" placeholder="Короткая заметка..." value={note} onChange={e=>setNote(e.target.value)} />
              <div style={{display:'flex',justifyContent:'flex-end',marginTop:8}}>
                <button className="btn" onClick={()=>add(m.label)}>Сохранить</button>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{marginTop:16}}>История</h3>
        <div style={{display:'grid',gap:10}}>
          {moods.map((m,i)=>(
            <div key={i} className="card" style={{display:'flex',flexDirection:'column',gap:8}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{fontWeight:600}}>{m.mood}</div>
                <div className="small">{new Date(m.date).toLocaleString()}</div>
              </div>
              {m.note && <div style={{color:'var(--muted)'}}>{m.note}</div>}
            </div>
          ))}
          {moods.length===0 && <div className="small">Нет записей</div>}
        </div>
      </div>
    </div>
  )
}
