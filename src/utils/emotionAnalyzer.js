import { db } from '../Firebase'
import { doc, setDoc, arrayUnion, serverTimestamp, getDoc } from 'firebase/firestore'

// Простые словари ключевых слов
const KEYWORDS = {
  anxiety: ['тревог', 'тревога', 'паник', 'паника', 'нервн', 'волну', 'беспок'],
  sadness: ['грусть', 'груст', 'плач', 'плак', 'печаль', 'депрес', 'устал', 'плохо'],
  joy: ['радост', 'радость', 'счаст', 'счастье', 'весел', 'успех', 'отлично', 'круто'],
  calm: ['спокой', 'расслаб', 'тихо', 'мирно', 'достоинств', 'нормально']
}

function scoreFromCounts(count, totalWords) {
  if (totalWords === 0) return 0
  return Math.min(100, Math.round((count / totalWords) * 2000))
}

function analyzeText(text = '') {
  const t = (text || '').toLowerCase()
  const words = t.split(/\s+/).filter(Boolean)
  const total = words.length || 1

  const counts = {
    anxiety: 0,
    sadness: 0,
    joy: 0,
    calm: 0
  }

  for (const w of words) {
    for (const k of Object.keys(KEYWORDS)) {
      for (const kw of KEYWORDS[k]) {
        if (w.includes(kw)) counts[k]++
      }
    }
  }

  const anxiety = scoreFromCounts(counts.anxiety, total)
  const sadness = scoreFromCounts(counts.sadness, total)
  const joy = scoreFromCounts(counts.joy, total)
  const calm = scoreFromCounts(counts.calm, total)

  let stress = anxiety + sadness - calm
  stress = Math.max(0, Math.min(100, Math.round(stress / 2)))

  return { anxiety, sadness, joy, calm, stress }
}

// Определяем доминирующую эмоцию
function getDominantEmotion(metrics) {
  const emotions = [
    { name: 'Тревога', value: metrics.anxiety },
    { name: 'Грусть', value: metrics.sadness },
    { name: 'Радость', value: metrics.joy },
    { name: 'Спокойствие', value: metrics.calm }
  ]
  
  const sorted = emotions.sort((a, b) => b.value - a.value)
  return sorted[0].value > 10 ? sorted[0].name : 'Нейтральное'
}

/**
 * updateEmotionalStateFromText
 * - text: текстовый фрагмент
 * - source: 'chat' | 'journal' | 'mood'
 * - userId: ID пользователя (если авторизован)
 */
export async function updateEmotionalStateFromText(text, source = 'chat', userId = 'local_user') {
  try {
    const metrics = analyzeText(text)
    const emotion = getDominantEmotion(metrics)
    
    const entry = {
      ts: new Date().toISOString(),
      source,
      summary: metrics,
      emotion,
      text: String(text).slice(0, 800)
    }

    // Сохраняем в Firestore
    const ref = doc(db, 'profiles', userId)
    await setDoc(ref, {
      emotionalState: {
        lastUpdated: serverTimestamp(),
        ...metrics
      },
      metricsHistory: arrayUnion(entry)
    }, { merge: true })

    // Локальный кеш
    try {
      const local = {
        emotionalState: { lastUpdated: new Date().toISOString(), ...metrics },
        lastEntry: entry
      }
      localStorage.setItem(`gowell_emotional_${userId}`, JSON.stringify(local))
    } catch (e) {
      console.warn('LocalStorage save failed:', e)
    }

    return emotion // Возвращаем строку с названием эмоции
  } catch (err) {
    console.error('updateEmotionalStateFromText error:', err)
    return 'Нейтральное'
  }
}

/**
 * updateEmotionalStateFromMood
 * - moodLabel: 'Радость' / 'Грусть' / ...
 * - note: заметка (опционально)
 * - userId: ID пользователя
 */
export async function updateEmotionalStateFromMood(moodLabel, note = '', userId = 'local_user') {
  try {
    const m = moodLabel.toLowerCase()
    let metrics = { anxiety: 0, sadness: 0, joy: 0, calm: 0, stress: 0 }

    if (m.includes('рад')) {
      metrics.joy = 80
      metrics.calm = 40
      metrics.stress = 10
    } else if (m.includes('гру')) {
      metrics.sadness = 75
      metrics.calm = 10
      metrics.stress = 50
    } else if (m.includes('трев')) {
      metrics.anxiety = 80
      metrics.stress = 70
      metrics.calm = 5
    } else if (m.includes('спок')) {
      metrics.calm = 85
      metrics.stress = 5
      metrics.joy = 30
    }

    const entry = {
      ts: new Date().toISOString(),
      source: 'mood',
      summary: metrics,
      mood: moodLabel,
      emotion: moodLabel,
      note: (note || '').slice(0, 500)
    }

    const ref = doc(db, 'profiles', userId)
    await setDoc(ref, {
      emotionalState: {
        lastUpdated: serverTimestamp(),
        ...metrics
      },
      metricsHistory: arrayUnion(entry)
    }, { merge: true })

    // Локальный кеш
    try {
      const local = {
        emotionalState: { lastUpdated: new Date().toISOString(), ...metrics },
        lastEntry: entry
      }
      localStorage.setItem(`gowell_emotional_${userId}`, JSON.stringify(local))
    } catch (e) {}

    return moodLabel
  } catch (err) {
    console.error('updateEmotionalStateFromMood error:', err)
    return moodLabel
  }
}

/**
 * fetchEmotionalStateLocal - получить данные из localStorage или Firestore
 */
export async function fetchEmotionalStateLocal(userId = 'local_user') {
  try {
    // Сначала пробуем localStorage
    const raw = localStorage.getItem(`gowell_emotional_${userId}`)
    if (raw) {
      const data = JSON.parse(raw)
      return data
    }
    
    // Если нет - идём в Firestore
    const ref = doc(db, 'profiles', userId)
    const snap = await getDoc(ref)
    
    if (snap.exists()) {
      const data = snap.data()
      return {
        emotionalState: data.emotionalState || null,
        metricsHistory: (data.metricsHistory || []).slice(-10)
      }
    }
    
    return null
  } catch (err) {
    console.warn('fetchEmotionalStateLocal error:', err)
    return null
  }
}