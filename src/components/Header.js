import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">Logo</div>
        <div className="dropdown">
         <select>
            <option>CATEGORIES</option>
            <option>one</option>
            <option>one</option>
            <option>one</option>
            </select>
        </div>
      </div>
      <div className="right-section">
        <div className="tech">TECH</div>
        <button className="button">LOGIN</button>
        <button className="button">SIGNUP</button>
      </div>
    </header>
  )
}

export default Header
