// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiMessageCircle, FiHeart, FiBookOpen, FiZap } from 'react-icons/fi';

const Navbar = () => {
  const link = (to, Icon, text) => (
    <NavLink to={to} className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')}>
      <Icon size={22} />
      <span>{text}</span>
    </NavLink>
  )

  return (
    <nav className="bottom-navbar" role="navigation" aria-label="bottom navigation">
      {link('/', FiHome, 'Главная')}
      {link('/chat', FiMessageCircle, 'Чат')}
      {link('/mood', FiHeart, 'Настроение')}
      {link('/journal', FiBookOpen, 'Дневник')}
      {link('/hub', FiZap, 'Hub')}
    </nav>
  );
};

export default Navbar;
