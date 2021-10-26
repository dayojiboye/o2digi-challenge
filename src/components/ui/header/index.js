import React from "react";
import "./styles.scss";

const Header = ({ clicked, isOpen }) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <img alt="" src={require("../../../assets/logo.svg").default} />
        </div>

        <nav className={`nav ${isOpen ? "show" : ""}`}>
          <ul>
            <li className="active">
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Bike Type</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Testimonials</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="hamburger-wrapper">
          <button
            type="button"
            aria-label="navigation button"
            className={`hamburger hamburger--spin ${isOpen ? "is-active" : ""}`}
            onClick={clicked}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
