/* eslint-disable no-useless-concat */
import React from "react";
import "./styles.scss";
import LottieAnimation from "../ui/lottie";
import HeroLotti from "../../assets/Header lottie.json";
import Bikes from "./bikes";
import Others from "./others";
import Hybrid from "./hybrid";
import Reviews from "./reviews";

const Home = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="wrapper">
          <div className="hero-left">
            <h1>Your Bike Electric Update</h1>
            <p>
              Dummy text progressive, and affordable healthcare, accessible on
              mobile and online for everyone
            </p>
            <div className="search">
              <label htmlFor="search">
                <i className="far fa-search"></i>
              </label>
              <input
                type="text"
                placeholder="Search Bike or anything"
                id="search"
              />
              <button className="btn-primary btn-small">Find</button>
            </div>
          </div>

          <div className="hero-right">
            <LottieAnimation height={340} width={340} lotti={HeroLotti} />
          </div>
        </div>
      </section>

      <Bikes />

      <Others />

      <Hybrid />

      <Reviews />
    </div>
  );
};

export default Home;
