"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

import { useListingImages } from "@/utils/hooks/useListingImages";


export default function ProductGallery({ brand, modelName }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { listingImages } = useListingImages(brand, modelName)

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 sps_content single_product_grid user_profile "
          >
            {listingImages.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <Image
                    width={856}
                    height={554}
                    priority
                    style={{ objectFit: "cover" }}
                    className="w-100 h-100"
                    src={slide.imageSrc}
                    alt="motorcycle image"
                  />

                  {/* <div className="overlay_icon">
                    <button
                      className="video_popup_btn popup-img popup-youtube"
                      onClick={() => openModal(slide.videoId)}
                    >
                      <span className="flaticon-play-button" />
                      Video
                    </button>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-2 thumb-gallery-opacity"
          >
            {listingImages.map((slide, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={163}
                  height={106}
                  priority
                  style={{ objectFit: "cover" }}
                  src={slide.imageSrc}
                  alt="thum motorcycle"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      /> */}
    </>
  );
}
