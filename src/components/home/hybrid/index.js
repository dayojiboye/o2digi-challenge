import React from "react";
import "./styles.scss";
import RiderLottie from "../../../assets/Rider lottie.json";
import BikeCard from "../../ui/bikeCard";

const Hybrid = () => {
  return (
    <section className="hybrid-section">
      <div className="wrapper">
        <div className="hybrid-left">
          <BikeCard
            lottie
            lotti={RiderLottie}
            height={242}
            width={242}
            price="750.00"
          />
        </div>

        <div className="hybrid-right">
          <h2>Hybrid Bikes</h2>
          <p>
            Dummy Text progressive, and affordable healthcare, accessible on
            mobile and online for everyone. To us, it’s not just work. We take
            pride in the solutions we deliver
          </p>
          <a href="/" className="btn-transparent btn-large">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hybrid;
