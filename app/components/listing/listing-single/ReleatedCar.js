"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import Image from "next/image";

import { useMotorcyclesPg as useMotorcycles } from "@/utils/hooks/useMotorcyclesPg";
import { toMotorcycleSlug } from "@/utils/slug";

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
              <Link
                href={`/motorcycle/${toMotorcycleSlug(motorcycle)}`}
                className="text-decoration-none"
              >
                <div className="car-listing" style={{ cursor: "pointer" }}>
                  <div
                    className="thumb"
                    style={{ aspectRatio: "284 / 183", overflow: "hidden" }}
                  >
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
                    <h6 className="card-title">{motorcycle.name}</h6>
                    <div className="spec-grid">
                      <div className="spec-item">
                        <span className="spec-label">ENGINE</span>
                        <span className="spec-value">
                          {motorcycle.engineCapacity
                            ? `${motorcycle.engineCapacity}cc${motorcycle.engine ? ` ${motorcycle.engine}` : ""}`
                            : motorcycle.engine || "-"}
                        </span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">PRICE</span>
                        <span className="spec-value">RM {motorcycle.price?.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="view-details-btn">View Details</div>
                  </div>
                </div>
              </Link>
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
