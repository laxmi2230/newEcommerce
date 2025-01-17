import React from "react";

import "./Footer.css";
import { footer } from "react-bootstrap";
const Footer = () => (
  <div className="phantom">
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <h2>About Us</h2>
        <p>
          Aayush Jain
          <span>
            <a href="https://github.com/Aayushjain-code">
              <i class="fab fa-github"></i>
            </a>
          </span>
        </p>
      </div>
      {/* <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span> Street name and number</span> City, Country
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+91) 0000 000 000</p>
        </div>
      </div> */}
      <div className="footer-right col-md-4 col-sm-6">
        <h2
          style={{
            color: "black",
            backgroundColor: "white",
            fontWeight: "800",
            padding: "0.5rem",
            margin: "1.5 rem",
            borderRadius: "0.5rem",
            borderColor: "black",
            borderWidth: "0.2rem"
          }}
        >
          Sheemo
        </h2>
        <p className="name"> Company Name &copy; 2020</p>
      </div>
    </footer>
  </div>
);

export default Footer;
