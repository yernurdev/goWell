import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const LOCAL_FALLBACK = [
  "Прости, я не могу заменить специалиста, но могу поддержать. Расскажи подробнее, что случилось?",
  "Попробуй сделать 5 глубоких вдохов. Ощущаешь расслабление?",
  "Сосредоточься на том, что под контролем сейчас. Маленький шаг — тоже шаг.",
  "Если это серьёзно — обратись к взрослому или специалисту. Я рядом, чтобы поддержать."
]

function localReply(text) {
  const t = text.toLowerCase()
  if (t.includes('трев') || t.includes('паник')) return "Понимаю, тревога тяжёлая. Давай попробуем 3 глубоких вдоха вместе."
  if (t.includes('грусть') || t.includes('плохо') || t.includes('плач')) return "Мне жаль, что так. Попробуй написать 3 вещи, за которые ты благодарна сегодня."
  if (t.includes('учеб') || t.includes('экзам') || t.includes('задани')) return "Разбей задачу на маленькие кусочки. Что можно сделать прямо сейчас за 10 минут?"
  return LOCAL_FALLBACK[Math.floor(Math.random() * LOCAL_FALLBACK.length)]
}

export default function Chat() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState(() => {
    try { return JSON.parse(localStorage.getItem('gowell_chat') || '[]') } catch (e) { return [] }
  })
  const [loading, setLoading] = useState(false)
  const listRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('gowell_chat', JSON.stringify(messages))
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  async function send() {
    const text = message.trim()
    if (!text) return
    const usr = { sender: 'user', text, time: Date.now() }
    setMessages(m => [...m, usr])
    setMessage('')
    setLoading(true)

    try {
  const res = await axios.post(
    'https://us-central1-gowell-cc836.cloudfunctions.net/api/chat',
    { message: text } // 👈 а не text: message
  )

  const reply = res.data.reply // 👈 получаем из backend
  setMessages(m => [...m, { sender: 'ai', text: reply, time: Date.now() }])

} catch (err) {
  console.warn('AI offline, using local reply:', err.message)
  const reply = localReply(text)
  setMessages(m => [...m, { sender: 'ai', text: reply, time: Date.now() }])
} finally {
  setLoading(false)
}

  }

  return (
    <div>
      <div className="card">
        <h2 style={{ marginTop: 0 }}>Чат с GoWell</h2>

        <div ref={listRef} className="chat-window" aria-live="polite">
          {messages.map((m, i) => (
            <div key={i} className={`msg ${m.sender}`}>
              <div className="bubble">{m.text}</div>
            </div>
          ))}
          {loading && <div className="msg ai"><div className="bubble">Печатает...</div></div>}
        </div>

        <div className="row">
          <input
            className="input"
            placeholder="Напиши, как ты себя чувствуешь..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
          />
          <button className="btn" onClick={send}>Отправить</button>
        </div>

        <div style={{ marginTop: 10 }} className="small">
          Поддержка. Это не замена врачу. В случае экстренной ситуации обращайся к специалистам.
        </div>
      </div>
    </div>
  )
}