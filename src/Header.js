import React, { Component } from 'react';

const PUBLIC_URL = process.env.PUBLIC_URL;

class Header extends Component {
  render() {
    return (
      <section className="header">
        <h1>Something Nothing</h1>
        <div class="img">
          <p class="title">
            Enean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim iam ultricies nisi eleifend
            tellus.
          </p>
          <div class="overlay" />
          <div class="button">
            <a href="#"> More... </a>
          </div>
        </div>
        <img className="arrow" src={PUBLIC_URL + '/images/arrow.png'} />
      </section>
    );
  }
}

export default Header;
