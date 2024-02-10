import React from "react";
import "./Footer.css";
import logo from "../Assets/mainlogo.png";
import insta from "../Assets/instagram_icon.png";
import pinterest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
        <p>DRESSING HUB</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="social-icons">
        <div className="icon-containers">
          <img src={insta} alt="Instagram" />
        </div>
        <div className="icon-containers">
          <img src={pinterest} alt="Pinterest" />
        </div>
        <div className="icon-containers">
          <img src={whatsapp} alt="Whatsapp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright &#169; 2023 | All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
