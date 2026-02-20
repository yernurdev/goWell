// src/pages/WellnessHub.jsx
import React, { useState, useEffect, useMemo } from 'react'
import { auth } from '../Firebase'
import { addPoints } from '../utils/gamification'
import { FiWind, FiSun, FiActivity, FiMoon, FiAnchor, FiHeart, FiBookOpen, FiCoffee, FiShield } from 'react-icons/fi'

// Helper to get icon by type
const getIcon = (type) => {
  switch (type) {
    case 'relax': return <FiWind />;
    case 'uplift': return <FiSun />;
    case 'active': return <FiActivity />;
    case 'sleep': return <FiMoon />;
    case 'grounding': return <FiAnchor />;
    case 'mindfulness': return <FiCoffee />;
    case 'journaling': return <FiBookOpen />;
    case 'detox': return <FiShield />;
    default: return <FiHeart />;
  }
}

const items = [
  { id: 1, title: '5-минутная дыхательная практика', type: 'relax', text: 'Сядь удобно. Вдыхай на 4, задержи на 4, выдыхай на 6. Повтори 5 раз.', link: 'https://psychcentral.com/health/box-breathing' },
  { id: 2, title: 'Аффирмация дня', type: 'uplift', text: 'Я достаточно. Я делаю всё, что могу.', link: 'https://www.healthline.com/health/mental-health/daily-affirmations' },
  { id: 3, title: 'Короткая прогулка', type: 'active', text: 'Выйди на 10 минут. Дыши глубоко.', link: 'https://www.nytimes.com/guides/well/walk-to-be-healthy' },
  { id: 4, title: 'Техника "5-4-3-2-1"', type: 'grounding', text: 'Назови 5 вещей, которые видишь, 4 которые слышишь, 3 которые чувствуешь, 2 которые ощущаешь запахом, 1 вкус.', link: 'https://www.verywellmind.com/54321-grounding-exercise-5203201' },
  { id: 5, title: 'Упражнение на благодарность', type: 'uplift', text: 'Запиши 3 вещи, за которые благодарен сегодня.', link: 'https://positivepsychology.com/gratitude-exercises/' },
  { id: 6, title: 'Практика "Сканирование тела"', type: 'relax', text: 'Закрой глаза и поочередно почувствуй каждую часть тела, отпуская напряжение.', link: 'https://www.mindful.org/beginners-body-scan-meditation/' },
  { id: 7, title: '3 минуты осознанности', type: 'mindfulness', text: 'Остановись. Сделай вдох. Заметь, что чувствуешь прямо сейчас.', link: 'https://www.headspace.com/mindfulness' },
  { id: 8, title: 'Медитация на расслабление', type: 'relax', text: 'Найди тихое место. Закрой глаза. Просто слушай дыхание.', link: 'https://www.calm.com/' },
  { id: 9, title: 'Как улучшить сон', type: 'sleep', text: 'Создай ритуал отхода ко сну. Без гаджетов, тусклый свет, спокойная музыка.', link: 'https://sleepfoundation.org/sleep-hygiene/' },
  { id: 10, title: 'Осознанное питание', type: 'mindfulness', text: 'Ешь медленно, замечай вкус, текстуру и аромат еды.', link: 'https://www.mindful.org/mindful-eating-a-guide-to-practice/' },
  { id: 11, title: 'Перерыв на растяжку', type: 'active', text: 'Поднимись, потянись вверх, разомни плечи и шею.', link: 'https://www.healthline.com/health/desk-stretches' },
  { id: 12, title: '5 минут тишины', type: 'relax', text: 'Отключи звук, убери всё раздражающее. Просто побудь в тишине.', link: 'https://www.psychologytoday.com/us/blog/the-silence/201906/why-silence-is-good-for-your-brain' },
  { id: 13, title: 'Техника расслабления плеч', type: 'active', text: 'Плечи вверх – задержи – отпусти. Повтори 3 раза.', link: 'https://www.verywellhealth.com/relieve-shoulder-tension-with-these-easy-exercises-5198244' },
  { id: 14, title: 'Дневник эмоций', type: 'journaling', text: 'Опиши, что ты чувствуешь. Без фильтра. Просто честно.', link: 'https://positivepsychology.com/emotion-wheel/' },
  { id: 15, title: 'Мини-медитация перед встречей', type: 'relax', text: 'Закрой глаза на 30 секунд. Сделай 3 глубоких вдоха. Настройся на спокойствие.', link: 'https://www.mindful.org/how-to-meditate/' },
  { id: 16, title: 'Заземление через тело', type: 'grounding', text: 'Почувствуй стопы. Почувствуй вес тела. Заметь контакт с полом.', link: 'https://www.healthline.com/health/grounding-techniques' },
  { id: 17, title: 'Детокс от новостей', type: 'detox', text: 'Отключи уведомления. Перерыв хотя бы на 2 часа.', link: 'https://www.bbc.com/future/article/20220107-how-to-take-a-break-from-the-news' },
  { id: 18, title: 'Осознанное утро', type: 'uplift', text: 'Не хватай телефон. Сделай 3 вдоха, выпей воду, улыбнись.', link: 'https://www.healthline.com/health/morning-routine-ideas' },
  { id: 19, title: 'Как вернуть фокус', type: 'focus', text: 'Сделай паузу, посмотри в окно, перезагрузи внимание.', link: 'https://www.nytimes.com/guides/smarterliving/how-to-focus-at-work' },
  { id: 20, title: 'Рефлексия дня', type: 'journaling', text: 'Перед сном вспомни одно хорошее событие. Даже маленькое.', link: 'https://positivepsychology.com/reflection-exercises/' }
]

function todayKey() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${dd}`;
}

export default function WellnessHub() {
  const handleOpen = (url) => window.open(url, '_blank', 'noopener,noreferrer')

  const [moodRisk, setMoodRisk] = useState(false); // true if sad or anx
  const [recommendations, setRecommendations] = useState([]);
  const [completedIds, setCompletedIds] = useState([]);

  useEffect(() => {
    // Check daily mood based on localStorage "gowell_daily"
    try {
      const raw = localStorage.getItem('gowell_daily');
      if (raw) {
        const data = JSON.parse(raw);
        const tkey = todayKey();
        const todayEntry = data[tkey];

        if (todayEntry && (todayEntry.moodId === 'sad' || todayEntry.moodId === 'anx')) {
          setMoodRisk(true);
          const mood = todayEntry.moodId;

          // Helper filter
          const forAnxiety = ['grounding', 'relax', 'breathing', 'detox'];
          const forSadness = ['uplift', 'journaling', 'active', 'mindfulness'];

          let recs = items.filter(i => (mood === 'anx' ? forAnxiety : forSadness).includes(i.type));

          if (recs.length === 0) recs = items.slice(0, 3);
          setRecommendations(recs.sort(() => 0.5 - Math.random()).slice(0, 3));
        } else {
          setMoodRisk(false);
          setRecommendations([]);
        }
      }
    } catch (e) { console.error(e) }
  }, []);

  const handleCompleteTask = async (task) => {
    if (completedIds.includes(task.id)) return;
    const user = auth.currentUser;
    if (user) {
      await addPoints(user.uid, 50);
      alert(`🎉 Молодец! +50 баллов!`);
    } else {
      alert('Задание выполнено! Войдите, чтобы сохранить баллы.');
    }
    setCompletedIds(prev => [...prev, task.id]);
  };

  return (
    <div>
      {/* RECOMMENDATION BLOCK */}
      {moodRisk && recommendations.length > 0 && (
        <div className="card" style={{
          background: 'linear-gradient(135deg, #fff5f8 0%, #fff 100%)',
          border: '1px solid #ffd6e8',
          marginBottom: 24
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ background: '#FFD6E8', borderRadius: '50%', padding: 8, display: 'flex' }}>
              <FiHeart color="#e94fa3" size={20} />
            </div>
            <h2 style={{ margin: 0, color: 'var(--text)' }}>Рекомендации для тебя</h2>
          </div>
          <p style={{ marginTop: -8, marginBottom: 16 }}>Сегодня сложный день? Попробуй эти практики, чтобы почувствовать себя лучше.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {recommendations.map(task => {
              const isDone = completedIds.includes(task.id);
              return (
                <div key={task.id} className="card" style={{
                  background: 'rgba(255,255,255,0.8)',
                  border: isDone ? '1px solid var(--accent-mint)' : '1px solid transparent',
                  marginBottom: 0
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <div style={{ color: 'var(--primary)' }}>{getIcon(task.type)}</div>
                      <h4 style={{ margin: 0 }}>{task.title}</h4>
                    </div>
                    {isDone && <span style={{ color: 'var(--accent-mint)' }}>✅</span>}
                  </div>
                  <p className="small" style={{ margin: '8px 0 16px' }}>{task.text}</p>

                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn ghost small" onClick={() => handleOpen(task.link)}>Читать</button>
                    {!isDone && (
                      <button className="btn small" onClick={() => handleCompleteTask(task)}>
                        Выполнить (+50)
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <div className="card">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <FiAnchor /> Wellness Hub
        </h2>
        <p className="small">Коллекция практик для восстановления ресурса и спокойствия.</p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
            gap: 16,
            marginTop: 24
          }}
        >
          {items.map((it, i) => (
            <article
              key={i}
              className="card"
              style={{
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginBottom: 0
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <div style={{
                    width: 32, height: 32,
                    borderRadius: 8,
                    background: 'var(--bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)'
                  }}>
                    {getIcon(it.type)}
                  </div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>{it.title}</h4>
                </div>
                <p className="small" style={{ margin: 0 }}>{it.text}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
                <button
                  className="btn ghost small"
                  onClick={() => handleOpen(it.link)}
                >
                  Открыть
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
