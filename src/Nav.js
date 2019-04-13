import React, { Component } from 'react';

import './Nav.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

class Nav extends Component {
  render() {
    return (
      <div className={window.location.pathname == '/' ? "navigator": 'navigator navigator-other'}> 
        <h2>
          <a  href="/"><img
            className="logo_header"
            src={PUBLIC_URL + '/images/logo_header2.png'}
            alt="Logotype"
          /></a>
        </h2>
        <nav className= {window.location.pathname == '/' ? 'home' : ''}>
          <div className="nav_toggle" onClick={function(event) { event.target.closest('nav').querySelector('li').classList.toggle('active'); }}>Menu</div>
          <ul><li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about/">About</a>
          </li>
          <li>
            <a href="/services/">Services</a>
          </li>
          <li>
            <a href="/contact/">Contacts</a>
          </li></ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
