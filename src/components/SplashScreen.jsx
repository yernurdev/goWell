// src/components/SplashScreen.jsx
import React, { useEffect } from 'react'

export default function SplashScreen({ onFinish, seconds = 1500 }) {
  useEffect(() => {
    const t = setTimeout(() => onFinish && onFinish(), seconds);
    return () => clearTimeout(t);
  }, [onFinish, seconds]);

  return (
    <div style={s.container}>
      <div style={s.card} className="splash-card">
        <img src="/icons/icon-192x192.png" alt="GoWell" style={s.logo} className="splash-logo" />
        <h1 style={s.title}>GoWell</h1>
        <p style={s.subtitle}>Цифровой помощник по ментальному здоровью</p>
      </div>
    </div>
  );
}

const s = {
  container: {
    position:'fixed', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
    background: 'radial-gradient(1200px 800px at 20% 20%, rgba(161,196,253,0.25), transparent 60%), radial-gradient(1200px 800px at 80% 80%, rgba(251,194,235,0.28), transparent 60%)',
    backdropFilter: 'blur(10px)',
    zIndex: 9999
  },
  card: {
    display:'flex', flexDirection:'column', alignItems:'center', gap:10, padding:'22px 26px', borderRadius:16,
    background:'rgba(255,255,255,0.85)', boxShadow:'0 12px 40px rgba(0,0,0,0.10)'
  },
  logo: { width:96, height:96, borderRadius:16 },
  title: { margin:0, color:'#E1027E', letterSpacing:0.4 },
  subtitle: { margin:0, fontSize:13, color:'#666' }
}
