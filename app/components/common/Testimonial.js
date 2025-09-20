"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ahmad Lim Wei Ming",
    title: "Motorcycle Enthusiast",
    text: "Outstanding service and genuine parts! I've been riding for 15 years and this is the best motorcycle shop I've ever dealt with. They helped me find the perfect exhaust system for my Yamaha R1 and the installation was flawless.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMGZhY2V8ZW58MXx8fHwxNzU4Mjc1OTgxfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 2,
    name: "Siti Nurhaliza Rahman",
    title: "Daily Commuter",
    text: "My Honda CB650R needed urgent repairs and they had me back on the road the same day. The staff really knows their motorcycles and the prices are very reasonable. I wouldn't trust my bike with anyone else!",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxheSUyMHdvbWFuJTIwZmFjZXxlbnwxfHx8fDE3NTgyNzU5ODF8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 3,
    name: "Raj Kumar Selvam",
    title: "Motorcycle Enthusiast",
    text: "Incredible selection of motorcycle gear and accessories! From helmets to riding jackets, they have everything a rider needs. The quality is top-notch and their advice on safety gear is invaluable.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW4lMjBmYWNlfGVufDF8fHx8MTc1ODI3NTk4MXww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 4,
    name: "Tan Mei Ling",
    title: "Daily Commuter",
    text: "Fast shipping and excellent customer service. Ordered brake pads online and they arrived within 2 days. The online store is easy to navigate and they have detailed product descriptions that helped me choose the right parts.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwd29tYW4lMjBmYWNlfGVufDF8fHx8MTc1ODI3NTk4MXww&ixlib=rb-4.1.0&q=80&w=400",
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
