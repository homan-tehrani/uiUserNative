import React, { useRef, useState , useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { albumPhoto2 } from "../../src/db.json";


import { Pagination } from "swiper";

export default function GalleryForInternalUnits() {
    
    const [images2 , setImages2] = useState(null)
    useEffect(()=>{
        setImages2(albumPhoto2)
    },[])

  
    
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
                slidesPerView: 2,
              },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        modules={[Pagination]}
        className="w-full h-40"
      >
        
        
        <SwiperSlide>
            <div className="w-full h-full bg-blue-200 ">
                <img className="w-full h-full" src="/assets/images/album-photo/1.jpg" alt="image"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="w-full h-full bg-blue-200 ">
                <img className="w-full h-full" src="/assets/images/album-photo/1.jpg" alt="image"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="w-full h-full bg-blue-200 ">
                <img className="w-full h-full" src="/assets/images/album-photo/1.jpg" alt="image"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="w-full h-full bg-blue-200 ">
                <img className="w-full h-full" src="/assets/images/album-photo/1.jpg" alt="image"/>
            </div>
        </SwiperSlide>
            
        <SwiperSlide>
            <div className="w-full h-full bg-blue-200 ">
                <img className="w-full h-full" src="/assets/images/album-photo/1.jpg" alt="image"/>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

