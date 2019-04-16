import React, { Component } from 'react';

import './Footer.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-twitter-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-snapchat-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-pinterest-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-github-square" />
            </a>
          </li>
        </ul>
        <p>Copyright © 2019 dotSquare. All rights reserved.</p>
      </footer>
    );
  }
}

export default Footer;
