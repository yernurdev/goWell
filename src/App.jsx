// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Mood from "./pages/Mood";
import Journal from "./pages/Journal";
import Profile from "./pages/Profile";
import WellnessHub from "./pages/WellnessHub";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import "./styles.css";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("gowell_theme") || "light");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("gowell_theme", theme);
  }, [theme]);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (showSplash) return <SplashScreen onFinish={() => setShowSplash(false)} />;

  return (
    <BrowserRouter>
      <header className="app-header">
        <a className="brand" href="/">
          GoWell
        </a>
        <nav className="desktop-nav">
  <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Главная</NavLink>
  <NavLink to="/chat" className={({isActive}) => isActive ? 'active' : ''}>Чат</NavLink>
  <NavLink to="/mood" className={({isActive}) => isActive ? 'active' : ''}>Настроение</NavLink>
  <NavLink to="/journal" className={({isActive}) => isActive ? 'active' : ''}>Дневник</NavLink>
  <NavLink to="/hub" className={({isActive}) => isActive ? 'active' : ''}>Hub</NavLink>
  <NavLink to="/profile" className={({isActive}) => isActive ? 'active' : ''}>Профиль</NavLink>
</nav>


        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Спрятанный переключатель — виден в профиле */}
          <div style={{ opacity: 0, pointerEvents: "none" }}>theme</div>
        </div>
      </header>

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/profile" element={<Profile theme={theme} setTheme={setTheme} />} />
          <Route path="/hub" element={<WellnessHub />} />
        </Routes>
      </main>

      <Navbar />
    </BrowserRouter>
  );
}
