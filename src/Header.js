import React, { Component } from 'react';

import './Header.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

class Header extends Component {
  render() {
    return (
      <section className="header" scroll="no">
        <h1>Something Nothing</h1>
        <div className="img">
          <p className="title">
            Enean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim iam ultricies nisi eleifend
            tellus.
          </p>
          <div className="overlay" />
          <div className="button">
            <a href="about"> More... </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
