// src/components/SplashScreen.jsx
import React, { useEffect } from 'react'

export default function SplashScreen({onFinish, seconds = 1500}) {
  useEffect(() => {
    const t = setTimeout(() => onFinish && onFinish(), seconds)
    return () => clearTimeout(t)
  }, [onFinish, seconds])

  return (
    <div style={s.container}>
      <div style={s.card}>
        <img src="/icons/icon-192x192.png" alt="GoWell" style={s.logo} />
        <h1 style={s.title}>GoWell</h1>
        <p style={s.subtitle}>Цифровой помощник по ментальному здоровью</p>
      </div>
    </div>
  )
}

const s = {
  container: {
    position:'fixed', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
    background: 'linear-gradient(180deg, rgba(225,2,126,0.04), rgba(255,255,255,0.0))',
    zIndex: 9999
  },
  card: {
    display:'flex', flexDirection:'column', alignItems:'center', gap:10, padding:20, borderRadius:14,
    background:'rgba(255,255,255,0.95)', boxShadow:'0 8px 30px rgba(0,0,0,0.08)'
  },
  logo: { width:96, height:96, borderRadius:14 },
  title: { margin:0, color:'#E1027E' },
  subtitle: { margin:0, fontSize:13, color:'#666' }
}
