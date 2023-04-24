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

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const paginationRef = useRef(null);
  // const swiperPaginationRef = useRef(null);

  if (!imagesSlider) {
    return <Loading />;
  }

  return (
    <div className="ExampleComponent container mx-auto max-h-96 h-full py-7 px-2">
      

     
      <Swiper
        wrapperClass="w-full"
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={100}
        slidesPerView={1}
        navigation={{
          nextEl: swiperNavNextRef.current,
          prevEl: swiperNavPrevRef.current,
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
          swiper.params.pagination.el = paginationRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        effect="fade"
        pagination={{
          clickable: true,
          el: ".tw-pagination",
          type: 'bullets',
        }}
        onSlideChange={() => console.log("slide change")}
        className="w-full max-h-[32rem] min-h-full"
      >
        {imagesSlider.map((item) => (
          <SwiperSlide key={item.id} className="w-full rounded-lg overflow-hidden">
            <img
              className="w-full"
              src="assets/images/image.jpg"
            />
          </SwiperSlide>
        ))}
        <div
          ref={swiperNavPrevRef}
          className="swiper-button-prev !text-white"
        ></div>
        <div
          ref={swiperNavNextRef}
          className="swiper-button-next !text-white"
        ></div>
        <div className="tw-pagination"></div>
      </Swiper>
      <Survey/>

       </div>
    
  );
}
