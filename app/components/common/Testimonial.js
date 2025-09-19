"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Marvin McKinney",
    title: "Motorcycle Enthusiast",
    text: "Outstanding service and genuine parts! I've been riding for 15 years and this is the best motorcycle shop I've ever dealt with. They helped me find the perfect exhaust system for my Yamaha R1 and the installation was flawless.",
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    title: "Daily Commuter",
    text: "My Honda CB650R needed urgent repairs and they had me back on the road the same day. The staff really knows their motorcycles and the prices are very reasonable. I wouldn't trust my bike with anyone else!",
  },
  {
    id: 3,
    name: "Marvin McKinney",
    title: "Motorcycle Enthusiast",
    text: "Incredible selection of motorcycle gear and accessories! From helmets to riding jackets, they have everything a rider needs. The quality is top-notch and their advice on safety gear is invaluable.",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    title: "Daily Commuter",
    text: "Fast shipping and excellent customer service. Ordered brake pads online and they arrived within 2 days. The online store is easy to navigate and they have detailed product descriptions that helped me choose the right parts.",
  },
];

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
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial_box">
              <div className="thumb">
                <Image
                  width={70}
                  height={70}
                  className="rounded-circle"
                  src={`/images/testimonial/${testimonial.id}.png`}
                  alt={`${testimonial.id}.png`}
                />
                <h4 className="title">
                  {testimonial.name} <br />
                  <small>{testimonial.title}</small>
                </h4>
              </div>
              <div className="details">
                <div className="icon">
                  <span className="fa fa-quote-left" />
                </div>
                <p>{testimonial.text}</p>
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
