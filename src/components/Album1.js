import React, { useRef, useState , useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "./loading";
import MorSpeech from "./MorSpeech";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import {albumPhoto} from "../../src/db.json"

import { Navigation, Pagination } from "swiper";

export default function Album1() {
    
    const [albumPhotos1 , setAlbumPhotos1]=useState(null)

    useEffect(()=>{
        setAlbumPhotos1(albumPhoto)
    },[])
    const swiperNavPrevRef = useRef(null)
    const swiperNavNextRef = useRef(null)

    if(!albumPhotos1){
        return <Loading/>
    }
    const nextSlideHandler = ()=>{
      console.log("next");
    }

    const prevSlideHandler = ()=>{
      console.log("prev");
    }
  return (
    <div className="w-full xs:px-4  px-2 md:w-10/12 md:mx-auto my-10 md:mx-32">
    <div className=" mb-6">
    <MorSpeech classMore="blue-400" colorIcon="fill-blue-400" colorText="text-blue-400" content="جدیدترین سخنرانی ها" nextButtonHandler={nextSlideHandler} prevButtonHandler={prevSlideHandler} underline={true}/>
    </div>
      <Swiper
        
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400:{
            slidesPerView:2,
          },
          640: {
            slidesPerView: 3,
          },
          1000:{
            slidesPerView:4
          }
        }}
        modules={[Pagination , Navigation]}
        navigation={{
            nextEl : swiperNavNextRef.current,
            prevEl : swiperNavPrevRef.current,
        }
        }
        onInit={(swiper)=>{
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
    
        }}
       
        
        className="w-full h-80  "
      >
        {albumPhotos1.map(item=>
            <SwiperSlide key={item.id} className=" flex items-center rounded-b-md border border-stone-300 justify-center ml-1  rounded-b-md">
                <div className="w-full h-full text-sm ">
                    <div className="w-full h-36">
                    <img className="w-full h-full object-cover" src={item.src} alt={item.alt} />
                    </div>
                    <div dir="rtl" className="bg-neutral-100 flex flex-col w-full h-44 justify-between py-2 pr-2 opacity-70">
                        <div className="flex flex-col ">
                        <div className="flex gap-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 5v14h8V5H8zM4 5v2h2V5H4zm14 0v2h2V5h-2zM4 9v2h2V9H4zm14 0v2h2V9h-2zM4 13v2h2v-2H4zm14 0v2h2v-2h-2zM4 17v2h2v-2H4zm14 0v2h2v-2h-2z"/></svg>
                        <p className="font-bold">سخنرانی استاد</p>
                        </div>
                        <p>سخنرانی استاد در تهران</p>
                        </div>
                         
                         <div dir="rtl" className="flex gap-x-8">
                            <div className="flex gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"/></svg>
                            <p>1401/9/25</p>
                            </div>
                        
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M20.005 2C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2h16.005zM8 4H6v16h2V4zm12 0H10v16h10V4z"/></svg>
                         </div>
                    </div>
                </div>
                


            </SwiperSlide>
            )}
            <div className="!flex !mb-20">
            <div ref={swiperNavPrevRef} className="swiper-button-prev !text-white "></div>
         
            </div>

            <div ref={swiperNavNextRef} className="swiper-button-next !text-white"></div>

      </Swiper>
    </div>
  );
}
