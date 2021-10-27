/* eslint-disable no-useless-concat */
import React from "react";
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="wrapper">
        <div className="carousel">
          <Swiper
            spaceBetween={26}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next2",
              prevEl: ".custom-prev2",
            }}
            pagination={{
              el: ".custom-pag2",
              clickable: true,
              renderBullet: (index, className) => {
                return '<span class="' + className + '">' + "</span>";
              },
            }}
            className="swiper-wrapper"
          >
            <SwiperSlide>
              <div className="review">
                <h2>What our customer are saying</h2>

                <div className="review-content">
                  <div className="rc-left">
                    <div className="rc-image">
                      <img
                        alt=""
                        loading="lazy"
                        src={require("../../../assets/image1.png").default}
                      />
                    </div>
                    <div className="rc-name">
                      <p>Edward Newgate</p>
                      <span>Pro-Cycler</span>
                    </div>
                  </div>

                  <div className="rc-right">
                    <p>
                      Dummy Text patient engagement app and web portal allow you
                      to access information instantaneously (no tedeous form,
                      long calls, or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="review">
                <h2>What our customer are saying</h2>

                <div className="review-content">
                  <div className="rc-left">
                    <div className="rc-image">
                      <img
                        alt=""
                        loading="lazy"
                        src={require("../../../assets/image1.png").default}
                      />
                    </div>
                    <div className="rc-name">
                      <p>Edward Newgate</p>
                      <span>Pro-Cycler</span>
                    </div>
                  </div>

                  <div className="rc-right">
                    <p>
                      Dummy Text patient engagement app and web portal allow you
                      to access information instantaneously (no tedeous form,
                      long calls, or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="review">
                <h2>What our customer are saying</h2>

                <div className="review-content">
                  <div className="rc-left">
                    <div className="rc-image">
                      <img
                        alt=""
                        loading="lazy"
                        src={require("../../../assets/image1.png").default}
                      />
                    </div>
                    <div className="rc-name">
                      <p>Edward Newgate</p>
                      <span>Pro-Cycler</span>
                    </div>
                  </div>

                  <div className="rc-right">
                    <p>
                      Dummy Text patient engagement app and web portal allow you
                      to access information instantaneously (no tedeous form,
                      long calls, or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="review">
                <h2>What our customer are saying</h2>

                <div className="review-content">
                  <div className="rc-left">
                    <div className="rc-image">
                      <img
                        alt=""
                        loading="lazy"
                        src={require("../../../assets/image1.png").default}
                      />
                    </div>
                    <div className="rc-name">
                      <p>Edward Newgate</p>
                      <span>Pro-Cycler</span>
                    </div>
                  </div>

                  <div className="rc-right">
                    <p>
                      Dummy Text patient engagement app and web portal allow you
                      to access information instantaneously (no tedeous form,
                      long calls, or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="pag-nav">
            <div className="custom-prev2">
              <i className="fas fa-arrow-left"></i>
            </div>

            <div className="custom-pag2"></div>

            <div className="custom-next2">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
