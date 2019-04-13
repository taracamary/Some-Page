import React, { Component } from 'react';

import './About.css';


const PUBLIC_URL = process.env.PUBLIC_URL;

class AboutPage extends Component {
  render() {
    return (
      <section className="about-page">
        <div>
          <h2>Some Of Our Work</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Similique possimus inventore velit alias facilis asperiores
            accusantium, fuga iusto repellat quia veritatis facere culpa
            officiis consectetur dolorum, molestias magni distinctio iste?
          </p>
        </div>
        <hr />

        <div className="sl_ctr">
          <div className="sldr">
            <img
              className="logo"
              src={PUBLIC_URL + '/images/1.png'}
              alt="Slider image"
            />
            <img
              className="logo"
              src={PUBLIC_URL + '/images/2.png'}
              alt="Slider image"
            />
            <img
              className="logo"
              src={PUBLIC_URL + '/images/3.png'}
              alt="Slider image"
            />
            <img
              className="logo"
              src={PUBLIC_URL + '/images/4.png'}
              alt="Slider image"
            />
            <img
              className="logo"
              src={PUBLIC_URL + '/images/5.png'}
              alt="Slider image"
            />
            <img
              className="logo"
              src={PUBLIC_URL + '/images/6.png'}
              alt="Slider image"
            />
          </div>
          <div className="prv_b" />
          <div className="nxt_b" />
        </div>

        <div class="flex-container">
          <div class="flex-item one">Первый</div>
          <div class="flex-item two">Второй</div>
          <div class="flex-item three">Третий</div>
        </div>
      </section>
    );
  }
}

export default AboutPage;