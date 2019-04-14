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

        <div className="sl">
          <div className="sl__slide">
          <img className="sl__img" src={PUBLIC_URL + '/images/8.png'} alt=""/>
            <div className="sl__text">
              <h3>Слайд 1</h3>
              <p>Описание слайда 1</p>
            </div>
          </div>
          <div className="sl__slide">
          <img className="sl__img" src={PUBLIC_URL + '/images/9.png'} alt=""/>
            <div className="sl__text">
              <h3>Слайд 2</h3>
              <p>Описание слайда 2</p>
            </div>
          </div>
          <div className="sl__slide">
          <img className="sl__img" src={PUBLIC_URL + '/images/10.png'} alt=""/>
            <div className="sl__text">
              <h3>Слайд 3</h3>
              <p>Описание слайда 3</p>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default AboutPage;