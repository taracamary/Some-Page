import React, { Component } from 'react';

import './Nav.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

class Nav extends Component {
  render() {
    return (
      <div
        className={
          window.location.pathname == '/'
            ? 'navigator'
            : 'navigator navigator-other'
        }
      >
        <h2>
          <a href="/">
            <img
              className="logo_header"
              src={PUBLIC_URL + '/images/logo_header2.png'}
              alt="Logotype"
            />
          </a>
        </h2>
        <nav className={window.location.pathname == '/' ? 'home' : ''}>
          <ul>
            <li className={window.location.pathname == '/' ? 'other-page' : ''}>
              <a href="/">Home</a>
            </li>
            <li
              className={
                window.location.pathname == '/about/' ? 'other-page' : ''
              }
            >
              <a href="/about/">About</a>
            </li>
            <li
              className={
                window.location.pathname == '/services/' ? 'other-page' : ''
              }
            >
              <a href="/services/">Services</a>
            </li>
            <li
              className={
                window.location.pathname == '/contact/' ? 'other-page' : ''
              }
            >
              <a href="/contact/">Contacts</a>
            </li>
          </ul>
          <div
            className="nav_toggle"
            onClick={function(event) {
              event.target
                .closest('nav')
                .querySelector('ul')
                .querySelectorAll('li')
                .forEach(e => {
                  e.classList.toggle('active');
                });
            }}
          >
            <i className="fa fa-bars" />
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
