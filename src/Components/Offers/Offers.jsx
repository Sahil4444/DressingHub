import React from "react";
import "./Offers.css";
import Exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>
          Check Now
          <div class="arrow-wrapper">
            <div class="arrow"></div>
          </div>
        </button>
      </div>
      <div className="offers-right">
        <img src={Exclusive_image} alt="Exclusive_image" />
      </div>
    </div>
  );
};

export default Offers;
