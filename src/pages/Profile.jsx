import React, { useState, useEffect } from 'react'
import { auth, db, storage } from '../Firebase'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { updateEmotionalStateFromText } from '../utils/emotionAnalyzer'

export default function Profile({ theme, setTheme }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState({ name: '', age: '', about: '', avatar: '' })
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [emotions, setEmotions] = useState([])
  const [loadingStats, setLoadingStats] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registerMode, setRegisterMode] = useState(false)

  // Отслеживаем авторизацию
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u)
      setLoading(false)

      if (u) {
        // Загружаем профиль из Firestore
        try {
          const docRef = doc(db, 'profiles', u.uid)
          const snap = await getDoc(docRef)

          if (snap.exists()) {
            setProfile(snap.data())
          } else {
            // Создаём базовый профиль
            const base = { name: 'Пользователь', about: '', age: '', avatar: '' }
            await setDoc(docRef, base)
            setProfile(base)
          }
        } catch (e) {
          console.error('Ошибка загрузки профиля:', e)
        }
      }
    })

    return () => unsub()
  }, [])

  // Регистрация/Вход
  async function handleAuth(e) {
    e.preventDefault()
    try {
      if (registerMode) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
    } catch (err) {
      alert(err.message)
    }
  }

  // Выход
  async function handleLogout() {
    await signOut(auth)
    setUser(null)
    setProfile({ name: '', age: '', about: '', avatar: '' })
    setEmotions([])
  }

  // Загрузка аватара
  function onFile(e) {
    const f = e.target.files[0]
    if (!f) return
    setFile(f)
    const url = URL.createObjectURL(f)
    setProfile((p) => ({ ...p, avatar: url }))
  }

  async function uploadAvatar() {
    if (!file || !user) return
    setUploading(true)

    try {
      const storageRef = ref(storage, `avatars/${user.uid}/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        null,
        (err) => {
          console.error(err)
          setUploading(false)
          alert('Ошибка загрузки аватара')
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref)
          setProfile((p) => ({ ...p, avatar: url }))
          await setDoc(doc(db, 'profiles', user.uid), { ...profile, avatar: url }, { merge: true })
          setUploading(false)
          setFile(null)
          alert('Аватар загружен!')
        }
      )
    } catch (e) {
      console.error(e)
      setUploading(false)
      alert('Ошибка загрузки')
    }
  }

  // Сохранение профиля
  async function saveProfile() {
    if (!user) return
    try {
      await setDoc(doc(db, 'profiles', user.uid), profile, { merge: true })
      alert('Профиль обновлён ✅')
    } catch (e) {
      console.error(e)
      alert('Ошибка сохранения')
    }
  }

  // Загрузка эмоциональной статистики
  useEffect(() => {
    if (!user) return

    async function gatherEmotions() {
      try {
        setLoadingStats(true)

        // Проверяем соединение
        if (!navigator.onLine) {
          console.warn('Оффлайн режим - используем локальные данные')
          loadLocalEmotions()
          return
        }

        // Загружаем данные из коллекций
        const [chatsSnap, moodsSnap, journalsSnap] = await Promise.all([
          getDocs(collection(db, 'chat')).catch(() => ({ docs: [] })),
          getDocs(collection(db, 'moods')).catch(() => ({ docs: [] })),
          getDocs(collection(db, 'journal')).catch(() => ({ docs: [] }))
        ])

        const allTexts = [
          ...chatsSnap.docs.map((d) => d.data().text || ''),
          ...moodsSnap.docs.map((d) => d.data().note || ''),
          ...journalsSnap.docs.map((d) => d.data().text || ''),
        ].filter(Boolean)

        if (allTexts.length === 0) {
          setEmotions([])
          setLoadingStats(false)
          return
        }

        // Подсчитываем эмоции
        const counts = {}
        for (const text of allTexts) {
          const emotion = updateEmotionalStateFromText(text, 'analysis', user.uid)
          counts[emotion] = (counts[emotion] || 0) + 1
        }

        const formatted = Object.entries(counts)
          .map(([name, value]) => ({ name, value }))
          .sort((a, b) => b.value - a.value)

        setEmotions(formatted)

        // Сохраняем в localStorage
        localStorage.setItem('gowell_emotions_cache', JSON.stringify(formatted))
      } catch (e) {
        console.error('Ошибка при загрузке статистики:', e)
        loadLocalEmotions()
      } finally {
        setLoadingStats(false)
      }
    }

    function loadLocalEmotions() {
      try {
        const cache = localStorage.getItem('gowell_emotions_cache')
        if (cache) {
          setEmotions(JSON.parse(cache))
        }
      } catch (e) {
        console.error('Ошибка загрузки из кеша:', e)
      }
      setLoadingStats(false)
    }

    gatherEmotions()
  }, [user])

  const COLORS = ['#FF9A9E', '#A1C4FD', '#FFD6E8', '#C2FFD8', '#FBC2EB', '#A8E6CF']

  // Состояние загрузки
  if (loading) {
    return (
      <div className="card">
        <h2>Загрузка...</h2>
      </div>
    )
  }

  // Форма входа/регистрации
  if (!user) {
    return (
      <div className="card" style={{ maxWidth: 400, margin: '40px auto' }}>
        <h2>{registerMode ? 'Регистрация' : 'Вход'}</h2>
        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Пароль (мин. 6 символов)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          <button className="btn" type="submit">
            {registerMode ? 'Создать аккаунт' : 'Войти'}
          </button>
        </form>

        <div className="small" style={{ marginTop: 12, textAlign: 'center' }}>
          {registerMode ? (
            <span>
              Уже есть аккаунт?{' '}
              <a onClick={() => setRegisterMode(false)} style={{ cursor: 'pointer', color: 'var(--primary)' }}>
                Войти
              </a>
            </span>
          ) : (
            <span>
              Нет аккаунта?{' '}
              <a onClick={() => setRegisterMode(true)} style={{ cursor: 'pointer', color: 'var(--primary)' }}>
                Зарегистрироваться
              </a>
            </span>
          )}
        </div>
      </div>
    )
  }

  // Основной интерфейс профиля
  return (
    <div>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h2 style={{ margin: 0 }}>Профиль</h2>
          <button className="btn ghost" onClick={handleLogout}>
            Выйти
          </button>
        </div>

        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Аватар */}
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 16,
              overflow: 'hidden',
              background: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt="avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div style={{ fontWeight: 700, fontSize: 32, color: 'var(--primary)' }}>
                {profile.name?.[0]?.toUpperCase() || 'U'}
              </div>
            )}
          </div>

          {/* Поля профиля */}
          <div style={{ flex: 1, minWidth: 250 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <input
                className="input"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                placeholder="Имя"
              />
              <input
                className="input"
                value={profile.age}
                onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                style={{ width: 100 }}
                placeholder="Возраст"
              />
            </div>

            <textarea
              className="input"
              style={{ minHeight: 60, marginBottom: 8 }}
              value={profile.about}
              onChange={(e) => setProfile({ ...profile, about: e.target.value })}
              placeholder="О себе"
            />

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <label className="btn ghost" style={{ cursor: 'pointer' }}>
                Выбрать аватар
                <input type="file" accept="image/*" onChange={onFile} style={{ display: 'none' }} />
              </label>

              {file && (
                <button className="btn" onClick={uploadAvatar} disabled={uploading}>
                  {uploading ? 'Загрузка...' : 'Загрузить'}
                </button>
              )}

              <button className="btn" onClick={saveProfile}>
                Сохранить профиль
              </button>
            </div>

            <div className="small" style={{ marginTop: 8 }}>
              Email: {user.email}
            </div>
          </div>
        </div>

        {/* Points Display */}
        <div className="card" style={{ marginTop: 24, padding: 24, background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent-violet) 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: 'none' }}>
          <div>
            <h3 style={{ margin: 0, color: 'white' }}>Баллы GoWell</h3>
            <p style={{ margin: '4px 0 0 0', opacity: 0.9, fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)' }}>Выполняй задания и получай награды!</p>
          </div>
          <div style={{ fontSize: 36, fontWeight: 800 }}>
            {profile.points || 0}
          </div>
        </div>

        {/* Переключатель темы */}
        <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <label className="small" style={{ display: 'block', marginBottom: 8 }}>
            Тема оформления
          </label>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              className={theme === 'light' ? 'btn' : 'btn ghost'}
              onClick={() => setTheme('light')}
            >
              Светлая
            </button>
            <button
              className={theme === 'dark' ? 'btn' : 'btn ghost'}
              onClick={() => setTheme('dark')}
            >
              Тёмная
            </button>
          </div>
        </div>
      </div>

      {/* Эмоциональная статистика */}
      <div className="card" style={{ marginTop: 24 }}>
        <h3>Эмоциональная статистика</h3>
        <p className="small" style={{ marginTop: -8, marginBottom: 16 }}>
          На основе анализа ваших записей в дневнике, чате и трекере настроения
        </p>

        {loadingStats ? (
          <div className="small">Загрузка статистики...</div>
        ) : emotions.length === 0 ? (
          <div className="small">
            Пока недостаточно данных для анализа. Начните писать в дневнике или отмечайте настроение!
          </div>
        ) : (
          <>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={emotions}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={(entry) => `${entry.name}: ${entry.value}`}
                >
                  {emotions.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>

            <div style={{ marginTop: 16, display: 'grid', gap: 8 }}>
              {emotions.map((e, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: 8,
                    background: 'rgba(0,0,0,0.02)',
                    borderRadius: 8
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      background: COLORS[i % COLORS.length]
                    }}
                  />
                  <div style={{ flex: 1 }}>{e.name}</div>
                  <div style={{ fontWeight: 600 }}>{e.value}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}