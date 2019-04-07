import React, { Component } from "react";

const PUBLIC_URL = process.env.PUBLIC_URL;

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Something Nothing</h1>
        <p>Enean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim iam ultricies nisi eleifend tellus.</p>
        <div class="button"><a>Let`s talk</a></div>
        <img className="arrow" src={PUBLIC_URL + "/images/arrow.png"} />
      </header>
    );
  }
}

export default Header;
