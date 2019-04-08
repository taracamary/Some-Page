import React, { Component } from "react";

const PUBLIC_URL = process.env.PUBLIC_URL;

class HomePage extends Component {
  render() {
    return (
      <section className="home-page">
        <h2>Some Of Our Work</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          possimus inventore velit alias facilis asperiores accusantium, fuga
          iusto repellat quia veritatis facere culpa officiis consectetur
          dolorum, molestias magni distinctio iste?
        </p>
        <hr />

        <div className="sl_ctr">
          <div className="sldr">
            <img className="logo" src={PUBLIC_URL + "/images/1.png"} alt="Slider image"/>
            <img className="logo" src={PUBLIC_URL + "/images/2.png"} alt="Slider image"/>
            <img className="logo" src={PUBLIC_URL + "/images/3.png"} alt="Slider image"/>
            <img className="logo" src={PUBLIC_URL + "/images/4.png"} alt="Slider image"/>
            <img className="logo" src={PUBLIC_URL + "/images/5.png"} alt="Slider image"/>
            <img className="logo" src={PUBLIC_URL + "/images/6.png"} alt="Slider image"/>
          </div>
          <div className="prv_b"></div>
          <div className="nxt_b"></div>
        </div>

      </section>
    );
  }
}

export default HomePage;
