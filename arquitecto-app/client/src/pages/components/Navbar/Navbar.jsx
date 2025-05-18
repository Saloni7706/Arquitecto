import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🏡 Arquitecto</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/chatbot">Chatbot</Link></li>
        <li><Link to="/extra">FAQ</Link></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/architect">Architect</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
