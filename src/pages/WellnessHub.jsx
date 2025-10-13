// src/pages/WellnessHub.jsx
import React from 'react'

const items = [
  { title:'5-минутная дыхательная практика', text:'Сядь удобно. Вдыхай на 4, задержи на 4, выдыхай на 6. Повтори 5 раз.' },
  { title:'Аффирмация дня', text:'Я достаточно. Я делаю всё, что могу.' },
  { title:'Короткая прогулка', text:'Выйди на 10 минут. Дыши глубоко.' },
  { title:'Техника "5-4-3-2-1"', text:'Назови 5 вещей, которые видишь, 4 которые слышишь, 3 которые чувствуешь, 2 которые ощущаешь запахом, 1 вкус.' },
  { title:'Упражнение на благодарность', text:'Запиши 3 вещи, за которые благодарен сегодня.' },
]

export default function WellnessHub(){
  return (
    <div>
      <div className="card">
        <h2>Wellness Hub</h2>
        <p className="small">Практики и короткие упражнения для восстановления и спокойствия.</p>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:12,marginTop:12}}>
          {items.map((it,i)=>(
            <article key={i} className="card" style={{padding:12}}>
              <h4 style={{margin:'0 0 6px'}}>{it.title}</h4>
              <p className="small" style={{margin:0}}>{it.text}</p>
              <div style={{display:'flex',justifyContent:'flex-end',marginTop:10}}>
                <button className="btn ghost">Открыть</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
