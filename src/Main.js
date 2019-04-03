import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <Route exact path="/" component={HomePage} />
        <Route path="/about/" component={AboutPage} />
        <Route path="/services/" component={ServicesPage} />
      </main>
    );
  }
}

export default Main;