import React, { Component } from "react";

import Slider from "react-slick";

import "./About.css";

const PUBLIC_URL = process.env.PUBLIC_URL;

class AboutPage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
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
        
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
        
      </section>
    );
  }
}

export default AboutPage;
