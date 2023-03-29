import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Loading from "./loading";
import MorSpeech from "./MorSpeech";
import {albumPhoto3} from "../../src/db.json"

export default function Album3() {
  const [albumPhotos3, setAlbumPhotos3] = useState(null);
  useEffect(() => {
    setAlbumPhotos3(albumPhoto3);
  }, []);


  const nextSlideHandler =()=>{
    console.log("next");
  }

  const prevSlideHandler =()=>{
    console.log("prev");
  }

  if (!albumPhotos3) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-800 pt-12 pb-8 mb-16  px-4 ">
        <div className="-translate-y-5">
        <MorSpeech classMore="white" colorIcon="fill-white" colorText="text-white" nextButtonHandler={nextSlideHandler} prevButtonHandler={prevSlideHandler} content="پربازدیدترین سخنرانی ها" icons={true}/>
        </div>
       

      <Swiper
        slidesPerView={4}
        spaceBetween={15}
     
        modules={[Pagination]}
        className="w-full h-80  "
      >
        {albumPhotos3.map((item) => (
          <SwiperSlide
          key={item.id}
            dir="rtl"
            className=" bg-gray-900  p-4  text-white border border-cyan-500 rounded-lg "
        
          >
            <div className="w-full h-full  flex flex-col justify-between ">

            
            <div className="flex  items-center w-full  ">
              <div className="w-24 h-20">
                <img src={item.src} alt={item.alt} className="w-full h-full" />
              </div>
              <div dir="ltr" className="flex flex-col items-center pr-2 text-lg">
                <p>استاد</p>
                <p>@leui</p>
              </div>
            </div>

            <div className=" w-full h-10 text-sm -translate-y-6">
              <p>
                مطالب این وب گاه با هدف روشنگری برای شما عزیزان تهیه و تدوین شده
                است
              </p>
            </div>

            <div className=" w-full h-10 ">
              <a className="text-cyan-500 " href="#">
                <u>
                بیشتر
                </u>
                
              </a>
            </div>

            <div className=" text-center text-sm">
              <p>pm 5:25 . sep1 2023 </p>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
