import React from "react";
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";
import BikeCard from "../../ui/bikeCard";

SwiperCore.use([Navigation]);

const Bikes = () => {
  return (
    <section className="bikes-section">
      <div className="wrapper">
        <div className="carousel">
          <Swiper
            spaceBetween={26}
            // slidesPerView={2.9}
            // slidesOffsetAfter={48}
            navigation={{
              nextEl: ".custom-next1",
              prevEl: ".custom-prev1",
            }}
            className="swiper-wrapper"
            watchSlidesVisibility={true}
            loopedSlides={7}
            breakpoints={{
              1204: {
                slidesPerView: 2.9,
                slidesOffsetAfter: 48,
              },

              1024: {
                slidesPerView: 2.3,
                slidesOffsetAfter: 48,
              },

              280: {
                slidesPerView: 1,
                slidesOffsetAfter: 0,
              },
            }}
          >
            <SwiperSlide>
              <BikeCard
                heading="Universal eBike Kit"
                alt=""
                src={require("../../../assets/bike1.png").default}
                price="750.00"
              />
            </SwiperSlide>

            <SwiperSlide>
              <BikeCard
                heading="Brampoton eBike Kit"
                alt=""
                src={require("../../../assets/bike2.png").default}
                price="750.00"
              />
            </SwiperSlide>

            <SwiperSlide>
              <BikeCard
                heading="Additinal eBike Kit"
                alt=""
                src={require("../../../assets/bike1.png").default}
                price="750.00"
              />
            </SwiperSlide>

            <SwiperSlide>
              <BikeCard
                heading="Additinal eBike Kit"
                alt=""
                src={require("../../../assets/bike1.png").default}
                price="750.00"
              />
            </SwiperSlide>
          </Swiper>

          <div className="carousel-nav">
            <div className="custom-prev1">
              <i className="far fa-arrow-left"></i>
            </div>

            <div className="custom-next1">
              <i className="far fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bikes;
