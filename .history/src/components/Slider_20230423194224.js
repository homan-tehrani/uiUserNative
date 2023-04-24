import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Scrollbar, A11y } from "swiper";
import { useRef } from "react";
import Loading from "./loading";
import ImageProfile from "assets/images/image.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { sliderPhoto } from "../../src/db.json";
import Survey from "./Survey";

export default function Slider() {
  const [imagesSlider, setImagesSlider] = useState(null);

  useEffect(() => {
    setImagesSlider(sliderPhoto);
  }, []);

  if (!imagesSlider) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto w-full h-full  py-7 px-2">
      <Swiper
        wrapperClass="w-full"
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween="auto"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        slidesPerView={1}
        effect="fade"
        pagination={{ clickable: true }}
        className="max-h-[32rem] min-h-full rounded-3xl overflow-hidden"
      >
        {imagesSlider.map((item) => (
          <SwiperSlide key={item.id} className="w-full h-full">
            <img
              className="w-full h-[32rem] object-cover"
              src="assets/images/image.jpg"
            />
          </SwiperSlide>
        ))}
        <div
          className="swiper-button-prev !text-white px-8 after:text-3xl"
        ></div>
        <div
          className="swiper-button-next !text-white px-8 after:text-3xl"
        ></div>
      </Swiper>
      <Survey/>

       </div>
    
  );
}
