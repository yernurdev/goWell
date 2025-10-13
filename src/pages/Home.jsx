import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <div className="card">
        <h1 style={{color:'var(--primary)'}}>Привет! Это GoWell</h1>
        <p className="small">Цифровой помощник для школьников — следи за настроением, веди дневник, общайся с поддерживающим AI.</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Чат с ИИ</h3>
          <p className="small">Поговори с AI-помощником — поддержка и мягкие советы.</p>
          <Link to="/chat"><button className="btn">Открыть чат</button></Link>
        </div>

        <div className="card">
          <h3>Трекер настроения</h3>
          <p className="small">Отмечай настроение и наблюдай динамику.</p>
          <Link to="/mood"><button className="btn">Отметить настроение</button></Link>
        </div>

        <div className="card">
          <h3>Дневник</h3>
          <p className="small">Записывай мысли и чувства — полезно и спокойно.</p>
          <Link to="/journal"><button className="btn">Дневник</button></Link>
        </div>

        <div className="card">
          <h3>Wellness Hub</h3>
          <p className="small">Упражнения на дыхание, аффирмации и короткие практики.</p>
          <Link to="/wellness"><button className="btn">Перейти</button></Link>
        </div>
      </div>
    </div>
  )
}
