import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
        	<li>
        		<a href="/">Главная</a>
        	</li>
        	<li>
        		<a href="/about/">О нас</a>
        	</li>
          <li>
            <a href="/services/">Услуги</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;