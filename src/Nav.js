import React, { Component } from 'react';

import './Nav.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

class Nav extends Component {
  render() {
    return (
      // <section className="navigation">
      //   <img
      //     className="logo_header"
      //     src={PUBLIC_URL + "/images/logo_header2.png"} alt="Logotype"
      //   />
      //   <ul>
      //     <li>
      //       <a href="/">Home</a>
      //     </li>
      //     <li className="two">
      //       <a href="/about/">About</a>
      //     </li>
      //     <li className="three">
      //       <a href="/services/">Products</a>
      //     </li>
      //     <li className="four">
      //       <a href="/contact/">Contact</a>
      //     </li>
      //     <hr />
      //   </ul>
      // </section>

      <header>
        <h2>
          <a  href="/"><img
            className="logo_header"
            src={PUBLIC_URL + '/images/logo_header2.png'}
            alt="Logotype"
          /></a>
        </h2>
        <nav>
          <li>
            <a href="/">Home</a>
          </li>
          <li className="two">
            <a href="/about/">About</a>
          </li>
          <li className="three">
            <a href="/services/">Products</a>
          </li>
          <li className="four">
            <a href="/contact/">Contacts</a>
          </li>
        </nav>
      </header>
    );
  }
}

export default Nav;
