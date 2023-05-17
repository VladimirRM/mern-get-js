import React from 'react';
import './NavBar.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper navbar blue">
        <Link to="/" className="brand-logo">Mern todo App</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Войти</Link></li>


        </ul>
      </div>
    </nav>
  );
};

export default NavBar;