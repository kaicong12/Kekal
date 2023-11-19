"use client";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const Hero = () => {
  const carSlides = [
    {
      // bright background banner
      image: "/images/shop/storefront.jpg",
      title: "YOUR ONE STOP MOTORCYCLE DEALER IN JOHOR BAHRU",
      className: styles.titleBrightBg,
      subtitleClass: styles.subtitleBright,
    },
    {
      // dark background banner
      image: "/images/home/repairWorker.jpg",
      title: "CELEBRATING 30 YEARS OF RIDING EXCELLENCE",
      className: styles.titleDarkBg,
      subtitleClass: styles.subtitleDark
    },
  ];

  return (
    <div className="main-banner-wrapper home2_main_slider mb30-md">
      <div className="banner-style-one">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          navigation={{
            nextEl: ".right-btn",
            prevEl: ".left-btn",
          }}
        >
          {carSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide slide_image"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  height: "750px",
                }}
              >
                <div className="container">
                  <div className="row home-content-home2-style">
                    <div className="col-lg-12 p0">
                      <h2 className={slide.className}>
                        {slide.title}
                        <br />
                      </h2>
                      <h3 className={slide.subtitleClass}>Ride with Confidence, Ride with Us. Serving Johor Bahru&apos;s Riders for Over 30 Years</h3>
                      <h3 className="banner_top_title text-thm d-flex align-items-baseline">
                        <span className="aminated-object1">
                          <Image
                            width={110}
                            height={14}
                            style={{
                              objectFit: "contain",
                            }}
                            priority
                            className="objects"
                            src="/images/home/title-bottom-border.svg"
                            alt="border image"
                          />
                        </span>
                        {/*<span>{slide.price}</span>{" "}*/}
                        {/*<small className="text-white d-inline-block ms-2">*/}
                        {/*  / Month*/}
                        {/*</small>*/}
                      </h3>
                      <Link
                        href="https://wa.me/60127126128?text=I'm%20interested%20in%20learning%20more%20about%20your%20services" // Replace 'yourphonenumber' with your actual phone number
                        className="btn banner-btn"
                        target="_blank"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* start navigation  */}
          <div className="carousel-btn-block banner-carousel-btn">
            <span className="carousel-btn left-btn">
              <i className="flaticon-left-arrow left" />
            </span>
            <span className="carousel-btn right-btn">
              <i className="flaticon-right-arrow right" />
            </span>
          </div>
          {/* End navigation */}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
