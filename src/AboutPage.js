import React, { Component } from 'react';

const PUBLIC_URL = process.env.PUBLIC_URL;

class AboutPage extends Component {
  render() {
    return (
      <section className="about-page">
        <h1>О компании</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique possimus inventore velit alias facilis asperiores accusantium, fuga iusto repellat quia veritatis facere culpa officiis consectetur dolorum, molestias magni distinctio iste?</p>
      </section>
    );
  }
}

export default AboutPage;