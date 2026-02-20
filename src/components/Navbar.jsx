// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiMessageCircle, FiHeart, FiBookOpen, FiZap , FiUser} from 'react-icons/fi';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const goingDown = y > lastY.current && y > 24;
      setHidden(goingDown);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const link = (to, Icon, text) => (
    <NavLink
      to={to}
      className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')}
      aria-current={({isActive}) => (isActive ? 'page' : undefined)}
    >
      <Icon size={22} />
      <span>{text}</span>
    </NavLink>
  );

  return (
    <nav
      className={`bottom-navbar glass ${hidden ? 'nav-hide' : 'nav-show'}`}
      role="navigation"
      aria-label="bottom navigation"
    >
      {link('/', FiHome, 'Главная')}
      {link('/chat', FiMessageCircle, 'Чат')}
      {link('/mood', FiHeart, 'Настроение')}
      {link('/journal', FiBookOpen, 'Дневник')}
      {link('/hub', FiZap, 'Hub')}
      {link('/profile', FiUser, 'Профиль')}
    </nav>
  );
}
