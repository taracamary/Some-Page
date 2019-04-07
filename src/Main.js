import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';

const PUBLIC_URL = process.env.PUBLIC_URL;

class Main extends Component {
  render() {
    return (
      <main className="main">
        <Route exact path="/" component={HomePage} />
        <Route path="/about/" component={AboutPage} />
        <Route path="/services/" component={ServicesPage} />
        <Route path="/contact/" component={ContactPage} />
      </main>
    );
  }
}

export default Main;