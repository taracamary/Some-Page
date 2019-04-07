import React, { Component } from "react";

import "./Nav.css";

const PUBLIC_URL = process.env.PUBLIC_URL;

class Nav extends Component {
  render() {
    return (
      <nav className="navigation">
        <img
          className="logo_header"
          src={PUBLIC_URL + "/images/logo_header.png"}
        />
        <ul>
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
            <a href="/contact/">Contact</a>
          </li>
          <hr />
        </ul>
      </nav>
    );
  }
}

export default Nav;
