import React from "react";
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Others = () => {
  return (
    <section className="others-section">
      <div className="wrapper">
        <h2>Other Type Of Bikes</h2>

        <div className="carousel">
          <Swiper
            spaceBetween={16}
            // slidesPerView={3}
            // slidesOffsetAfter={48}
            className="swiper-wrapper"
            watchSlidesVisibility={true}
            loopedSlides={7}
            breakpoints={{
              1204: {
                slidesPerView: 4.9,
                slidesOffsetAfter: 48,
              },

              1024: {
                slidesPerView: 3.5,
                slidesOffsetAfter: 48,
              },

              280: {
                slidesPerView: 1,
                slidesOffsetAfter: 0,
              },
            }}
          >
            <SwiperSlide>
              <div className="others-card">
                <div className="others-card-body">
                  <img
                    loading="lazy"
                    alt=""
                    src={require("../../../assets/bike.png").default}
                  />
                </div>
                <div className="others-card-footer">
                  <p>Hybrid Bikes</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="others-card">
                <div className="others-card-body">
                  <img
                    loading="lazy"
                    alt=""
                    src={require("../../../assets/bike.png").default}
                  />
                </div>
                <div className="others-card-footer">
                  <p>Fixie Bikes</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="others-card">
                <div className="others-card-body">
                  <img
                    loading="lazy"
                    alt=""
                    src={require("../../../assets/bike.png").default}
                  />
                </div>
                <div className="others-card-footer">
                  <p>Folding Bikes</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="others-card">
                <div className="others-card-body">
                  <img
                    loading="lazy"
                    alt=""
                    src={require("../../../assets/bike.png").default}
                  />
                </div>
                <div className="others-card-footer">
                  <p>Mount Bikes</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="others-card">
                <div className="others-card-body">
                  <img
                    loading="lazy"
                    alt=""
                    src={require("../../../assets/bike.png").default}
                  />
                </div>
                <div className="others-card-footer">
                  <p>City Bikes</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Others;
