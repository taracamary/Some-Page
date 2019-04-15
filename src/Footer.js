import React, { Component } from 'react';

import './Footer.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul>
			    <li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
			    <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
			    <li><a href="#"><i class="fa fa-snapchat-square"></i></a></li>
			    <li><a href="#"><i class="fa fa-pinterest-square"></i></a></li>
			    <li><a href="#"><i class="fa fa-github-square"></i></a></li>
		    </ul>
        <p>Copyright © 2014 dotSquare. All rights reserved.</p>
      </footer>
    );
  }
}

export default Footer;