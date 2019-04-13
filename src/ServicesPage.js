import React, { Component } from 'react';

import './Services.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

class ServicesPage extends Component {
  render() {
    return (
      <section className="works">
        <h2>How it works?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          possimus inventore velit alias facilis asperiores accusantium, fuga
          iusto repellat quia veritatis facere culpa officiis consectetur
          dolorum, molestias magni distinctio iste?
        </p>


        <div className="works-card">
          <div className="card card1">
            <div className="imgBx">
              <img
                className="works"
                src={PUBLIC_URL + '/images/7.png'}
                alt="Works"
              />
            </div>
            <div className="details">
              <h2>What is Lorem Ipsum?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="card card2">
            <div className="imgBx">
              <img
                className="works"
                src={PUBLIC_URL + '/images/8.png'}
                alt="Works"
              />
            </div>
            <div className="details">
              <h2>What is Lorem Ipsum?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          
          <div className="card card3">
            <div className="imgBx">
              <img
                className="works"
                src={PUBLIC_URL + '/images/9.png'}
                alt="Works"
              />
            </div>
            <div className="details">
              <h2>What is Lorem Ipsum?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesPage;
