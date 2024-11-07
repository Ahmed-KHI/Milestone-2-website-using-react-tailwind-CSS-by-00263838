import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
         <img src={logo} alt="Logo" className="logo" /> 
        MyWebsite
      </div>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
