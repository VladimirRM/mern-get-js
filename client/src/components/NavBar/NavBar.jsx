import React from 'react';
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav>
    <div className="nav-wrapper navbar blue">
      <a href="/" className="brand-logo">Mern todo App</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Войти</a></li>


      </ul>
    </div>
  </nav>
    );
};

export default NavBar;