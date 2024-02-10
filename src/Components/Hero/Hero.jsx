import React from "react";
import "./Hero.css";
import hand from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import model from '../Assets/model2.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand} alt="hand-icon" srcset="" />
          </div>
          <p>Collections</p>
          <p>For everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt="arrow-icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={model} alt="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
