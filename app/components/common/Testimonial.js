"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Testimonial = () => {
  const t = useTranslations("commonTestimonials");
  const testimonials = [
    {
      id: 1,
      name: "Ahmad Fauzi",
      title: t("enthusiast"),
      text: t("text1"),
      image: "/images/testimonial/avatar-af.svg",
    },
    {
      id: 2,
      name: "Nurul Aina",
      title: t("commuter"),
      text: t("text2"),
      image: "/images/testimonial/avatar-na.svg",
    },
    {
      id: 3,
      name: "Raj Kumar Selvam",
      title: t("enthusiast"),
      text: t("text3"),
      image: "/images/testimonial/avatar-rs.svg",
    },
    {
      id: 4,
      name: "Tan Mei Ling",
      title: t("commuter"),
      text: t("text4"),
      image: "/images/testimonial/avatar-tm.svg",
    },
  ];
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
                  src={testimonial.image}
                  alt={testimonial.name}
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
