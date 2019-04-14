import React, { Component } from "react";

import Slider from "react-slick";

import "./About.css";

const PUBLIC_URL = process.env.PUBLIC_URL;

class AboutPage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };
    return (
      <section className="about-page">
        <div>
          <h2> Some Of Our Work </h2> 
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Similique
            possimus inventore velit alias facilis asperiores accusantium, fuga
            iusto repellat quia veritatis facere culpa officiis consectetur
            dolorum, molestias magni distinctio iste ?
          </p> 
        </div> 
        <hr />

<div className="container">
        <Slider {...settings}>
          <div>
          <img src={PUBLIC_URL + '/images/1.png'} alt="thumb" />
          </div>
          <div>
          <img src={PUBLIC_URL + '/images/2.png'} alt="thumb" />            
          </div>
          <div>
            <img src={PUBLIC_URL + '/images/3.png'} alt="thumb" />  
          </div>
          <div>
            <img src={PUBLIC_URL + '/images/4.png'} alt="thumb" />  
          </div>
        </Slider>
      </div>
        
      </section>
    );
  }
}

export default AboutPage;
