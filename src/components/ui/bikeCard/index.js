import React from "react";
import "./styles.scss";
import LottieAnimation from "../lottie";

const BikeCard = ({
  heading,
  alt,
  src,
  price,
  lottie,
  lotti,
  height,
  width,
}) => {
  return (
    <div className="bikes-card">
      <div className="bike-card-header">
        <h3>{heading}</h3>
      </div>
      <div className={`bike-card-body ${!lottie ? "not-lottie" : ""}`}>
        {!lottie && <img alt={alt} loading="lazy" src={src} />}

        {lottie && (
          <LottieAnimation height={height} width={width} lotti={lotti} />
        )}
      </div>
      <div className="bike-card-footer">
        <div className="bike-card-footer-price">
          <span>Price</span>
          <span>${price}</span>
        </div>
        <div className="bike-card-footer-order">
          <button className="btn-primary btn-small">Order</button>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
