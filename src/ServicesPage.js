import React, { Component } from 'react';

import './Services.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

class ServicesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
  }

  render() {
    return (
      <section className="works">
        <div>
          <h2>How it works?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            possimus inventore velit alias facilis asperiores accusantium, fuga
            iusto repellat quia veritatis facere culpa officiis consectetur
            dolorum, molestias magni distinctio iste?
          </p>
        </div>
        <hr />

        <div className="videos__wrapper">
          <div className="videos__item">
            <div className="imgBx">
              <img src={PUBLIC_URL + '/images/8.png'} alt="thumb" />
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

          <div className="videos__item">
            <div className="imgBx">
              <img src={PUBLIC_URL + '/images/9.png'} alt="thumb" />
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

          <div className="videos__item">
            <div className="imgBx">
              <img src={PUBLIC_URL + '/images/10.png'} alt="thumb" />
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
        {this.state.showMore ? null : (
          <button
            class="more"
            onClick={() => {
              this.setState({ showMore: true });
            }}
          >
            Загрузить еще
          </button>
        )}

        {this.state.showMore ? (
          <div className="videos__wrapper">
            <div className="videos__item">
              <div className="imgBx">
                <img src={PUBLIC_URL + '/images/11.png'} alt="thumb" />
              </div>
              <div className="details">
                <h2>What is Lorem Ipsum?</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="videos__item">
              <div className="imgBx">
                <img src={PUBLIC_URL + '/images/12.png'} alt="thumb" />
              </div>
              <div className="details">
                <h2>What is Lorem Ipsum?</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="videos__item">
              <div className="imgBx">
                <img src={PUBLIC_URL + '/images/13.png'} alt="thumb" />
              </div>
              <div className="details">
                <h2>What is Lorem Ipsum?</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    );
  }
}

export default ServicesPage;
