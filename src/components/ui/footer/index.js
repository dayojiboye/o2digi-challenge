import React from "react";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-left">
          <div className="footer-logo">
            <span>B</span>
            <span>eBike</span>
          </div>
          <div className="footer-info">
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
          </div>
          <div className="footer-copyright">
            <p>©eBike 2021. All rights reserved</p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <h5>Company</h5>

            <ul>
              <li>
                <a href="/">Product</a>
              </li>
              <li>
                <a href="/">Bike Type</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h5>Help</h5>

            <ul>
              <li>
                <a href="/">Help center</a>
              </li>
              <li>
                <a href="/">Contact support</a>
              </li>
              <li>
                <a href="/">Instructions</a>
              </li>
              <li>
                <a href="/">How it works</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
