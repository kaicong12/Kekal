"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import InitialsAvatar from "./InitialsAvatar";
import StarRating from "./StarRating";
import reviewsData from "@/app/data/testimonials.json";

const testimonials = reviewsData.reviews;

const Testimonial = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        speed={1000}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          el: ".js-pagination-pag",
          spaceBetween: 10,
          clickable: true,
        }}
        breakpoints={{
          // breakpoints for responsive design
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <div className="testimonial_box">
              <div
                className="thumb"
                style={{ display: "flex", alignItems: "center", gap: 16 }}
              >
                <InitialsAvatar
                  name={testimonial.author}
                  initials={testimonial.initials}
                />
                <h4 className="title" style={{ margin: 0 }}>
                  {testimonial.author}
                  <span style={{ display: "block", marginTop: 6 }}>
                    <StarRating rating={testimonial.rating} />
                  </span>
                </h4>
              </div>
              <div className="details">
                <div className="icon">
                  <span className="fa fa-quote-left" />
                </div>
                <p lang={testimonial.languageCode}>{testimonial.text}</p>
                <a
                  href={testimonial.reviewUri || reviewsData.googleMapsUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: "#6b7280",
                  }}
                >
                  <span className="fab fa-google" /> Posted on Google
                  {testimonial.relativeTime ? ` · ${testimonial.relativeTime}` : ""}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-5 text-center">
        <div className=" js-pagination-pag" />
      </div>
    </>
  );
};

export default Testimonial;
