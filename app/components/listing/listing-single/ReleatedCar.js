"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import Image from "next/image";

import { useMotorcycles } from "@/utils/hooks/useMotorcycles";

const ReleatedCar = ({ currentMotorcycle, currentMotorId }) => {
  const { brand: makeFilter } = currentMotorcycle
  const { motorcycles } = useMotorcycles(makeFilter)
  const motorcyclesWithoutCurrent = motorcycles.filter(({ id }) => id !== currentMotorId )

  return (
    <>
      <Swiper
        spaceBetween={20}
        speed={1000}
        modules={[Pagination]}
        pagination={{
          el: ".car-for-rent-pag",
          spaceBetween: 10,
          clickable: true,
        }}
        breakpoints={{
          // breakpoints for responsive design
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1068: {
            slidesPerView: 4,
          },
        }}
      >
        {motorcyclesWithoutCurrent.slice(0, 6).map(motorcycle => (
          <SwiperSlide key={motorcycle.id}>
            <div className="item">
              <div className="car-listing">
                <div className="thumb">
                  <Image
                    width={284}
                    height={183}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    priority
                    src={motorcycle.imageUrl}
                    alt={motorcycle.name}
                  />
                </div>
                <div className="details">
                  <div className="wrapper">
                    <h5 className="price">RM {motorcycle.price}</h5>
                    <h6 className="title">
                      <Link href={`/listing-single-v1/${motorcycle.id}`}>{motorcycle.name}</Link>
                    </h6>
                  </div>{" "}
                  <div className="listing_footer">
                    <ul className="mb0">
                      { motorcycle?.specifications?.Displacement ? (
                        <li className="list-inline-item">
                          <span className="flaticon-sedan-car-model me-2" />
                          {motorcycle?.specifications?.Displacement}
                        </li>
                      ): null }
                      <li className="list-inline-item">
                        <span className="flaticon-coin me-2" />
                        {motorcycle.price}
                      </li>
                      { motorcycle?.specifications?.["Maximum Power"] ? (
                        <li className="list-inline-item">
                          <span className="flaticon-gear me-2" />
                          { motorcycle?.specifications?.["Maximum Power"] }
                        </li>
                      ): null }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-3 text-center">
        <div className="car-for-rent-pag" />
      </div>
    </>
  );
};

export default ReleatedCar;
