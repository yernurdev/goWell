// src/pages/Mood.jsx
import React, { useEffect, useMemo, useState } from 'react'
import { db, auth } from '../Firebase'
import { collection, addDoc, setDoc, doc, getDoc } from 'firebase/firestore'
import { FiSmile, FiFrown, FiCloudLightning, FiSun } from 'react-icons/fi'

const MOODS = [
  { id: 'joy', label: 'Радость', color: '#FFD6E8', icon: <FiSmile size={24} /> },
  { id: 'sad', label: 'Грусть', color: '#DDE8FF', icon: <FiFrown size={24} /> },
  { id: 'anx', label: 'Тревога', color: '#FFE9D6', icon: <FiCloudLightning size={24} /> },
  { id: 'calm', label: 'Спокойствие', color: '#E8FFF4', icon: <FiSun size={24} /> }
]

function todayKey() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${dd}`;
}

export default function Mood() {
  const [moods, setMoods] = useState(() => JSON.parse(localStorage.getItem('gowell_moods') || '[]'))
  const [dayNote, setDayNote] = useState('')
  const [selected, setSelected] = useState('')
  const [savingDay, setSavingDay] = useState(false)

  const tkey = useMemo(() => todayKey(), []);

  // Save history to local storage
  useEffect(() => localStorage.setItem('gowell_moods', JSON.stringify(moods)), [moods])

  // Load "Mood of the Day"
  useEffect(() => {
    try {
      const raw = localStorage.getItem('gowell_daily');
      const obj = raw ? JSON.parse(raw) : {};
      const today = obj[tkey];
      if (today) {
        setSelected(today.moodId);
        setDayNote(today.note || '');
      }
    } catch { }
  }, [tkey]);

  async function saveToday() {
    if (!selected) return;
    setSavingDay(true);
    const entry = {
      key: tkey,
      moodId: selected,
      mood: MOODS.find(m => m.id === selected)?.label || selected,
      note: dayNote,
      createdAt: new Date().toISOString(),
      uid: auth.currentUser?.uid || null
    };

    // Save locally
    try {
      const raw = localStorage.getItem('gowell_daily');
      const obj = raw ? JSON.parse(raw) : {};
      obj[tkey] = entry;
      localStorage.setItem('gowell_daily', JSON.stringify(obj));
    } catch { }

    // Add to history list as well (for the list below)
    setMoods(prev => [entry, ...prev]);

    // Firestore
    try {
      const uid = auth.currentUser?.uid || 'anon';
      await setDoc(doc(db, 'daily_moods', `${uid}_${tkey}`), entry, { merge: true });
      // Also add to general moods history if you want
      await addDoc(collection(db, 'moods'), entry);
    } catch { }

    setSavingDay(false);
    alert('Настроение сохранено!');
  }

  return (
    <div>
      <div className="card">
        <h2>Как ты себя чувствуешь?</h2>
        <p className="small">Отметь своё настроение сегодня. Это поможет отслеживать динамику и получать подходящие рекомендации.</p>

        {/* Mood Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginTop: 24 }}>
          {MOODS.map(m => {
            const isSelected = selected === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelected(m.id)}
                style={{
                  background: isSelected ? 'var(--primary-soft)' : 'rgba(255,255,255,0.5)',
                  border: isSelected ? '2px solid var(--primary)' : '1px solid transparent',
                  borderRadius: 'var(--radius)',
                  padding: 24,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{
                  color: isSelected ? 'var(--primary)' : 'var(--text-light)',
                  transition: 'color 0.2s'
                }}>
                  {m.icon}
                </div>
                <span style={{
                  fontWeight: 600,
                  color: isSelected ? 'var(--primary)' : 'var(--text-secondary)'
                }}>
                  {m.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Note Input */}
        <div style={{ marginTop: 24 }}>
          <p className="small" style={{ marginBottom: 8 }}>Заметки (необязательно)</p>
          <textarea
            className="input"
            placeholder="Что произошло сегодня? Опиши свои чувства..."
            style={{ minHeight: 100 }}
            value={dayNote}
            onChange={e => setDayNote(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
          <button className="btn" onClick={saveToday} disabled={!selected || savingDay}>
            {savingDay ? 'Сохранение...' : 'Сохранить день'}
          </button>
        </div>
      </div>

      {/* History */}
      <h3 style={{ marginTop: 32, paddingLeft: 4 }}>История записей</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {moods.slice(0, 10).map((m, i) => { // Limit to 10 for neatness
          const moodObj = MOODS.find(x => x.id === m.moodId) || MOODS.find(x => x.label === m.mood);
          return (
            <div key={i} className="card" style={{ padding: 16, marginBottom: 0, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{
                width: 40, height: 40,
                borderRadius: '50%',
                background: moodObj ? moodObj.color : '#eee',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text)'
              }}>
                {moodObj ? moodObj.icon : <FiSmile />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600 }}>{m.mood}</span>
                  <span className="small">{new Date(m.createdAt || m.date).toLocaleDateString()}</span>
                </div>
                {m.note && <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{m.note}</p>}
              </div>
            </div>
          )
        })}
        {moods.length === 0 && <p className="small" style={{ textAlign: 'center', padding: 20 }}>Пока нет записей. Начни сегодня!</p>}
      </div>
    </div>
  )
}
