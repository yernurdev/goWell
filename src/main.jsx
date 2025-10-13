import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

// register service worker for PWA (vite-plugin-pwa will generate registerSW.js)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker?.register('/sw.js').catch(()=>{})
  })
}

createRoot(document.getElementById('root')).render(<App />)
