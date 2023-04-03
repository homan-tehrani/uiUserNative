import React,{useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , EffectFade , Pagination, Scrollbar, A11y  } from 'swiper';
import { useRef } from 'react'
import Loading from './loading';
import { useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {sliderPhoto} from "../../src/db.json"


export default function Slider() {
  
    const [imagesSlider , setImagesSlider]=useState(null)

    useEffect(()=>{
        setImagesSlider(sliderPhoto)
    },[])

    const swiperNavPrevRef = useRef(null)
    const swiperNavNextRef = useRef(null)
    const swiperPaginationRef = useRef(null)

    if(!imagesSlider){
        return <Loading/>
    }

  return (
    <div className='xs:my-3 xs:py-6  w-full h-max bg-neutral-100 flex flex-col items-center justify-center my-6 '>
    <div className='w-full h-max  '>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y , EffectFade]}
    spaceBetween={100}
    slidesPerView={1}
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
    
    effect='fade'
    pagination={{
        el: '.swiper-pagination',
        clickable: true,
    }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className="xs:w-11/12 xs:h-40 h-64 md:h-120 my-6  w-11/12 md:w-10/12 md:h-72 lg:h-120"
  >
    {imagesSlider.map(item=>
       <SwiperSlide key={item.id} className='w-full h-full'>
       <img className='w-full h-full object-cover' src={item.src} alt={item.alt} />
    </SwiperSlide>
      )}
    
    <div ref={swiperPaginationRef} className='swiper-pagination '>
      
    </div>
    <div ref={swiperNavPrevRef} className="swiper-button-prev !text-white"></div>
    <div ref={swiperNavNextRef} className="swiper-button-next !text-white"></div>
    
    ...
  </Swiper>
  </div>
  <div className='flex xs:flex-col xs:my-5 xs:w-11/12 md:w-10/12 flex-col w-11/12 md:flex-row  gap-x-4  h-max    gap-y-4'> 
    <div  className='xs:w-full w-full md:w-1/3  sm:h-32 bg-red-100  border border-red-500 rounded-md  flex items-center  cursor-pointer p-2'>
    <svg xmlns="http://www.w3.org/2000/svg" className='fill-red-700  ml-2 mb-6 ' viewBox="0 0 24 24" width="40" height="40"><path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014c0 .548-.445.993-.993.993H3.993C3.445 22 3 21.555 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2h10zM7 6H5v14h14V6h-2v2H7V6zm2 10v2H7v-2h2zm0-3v2H7v-2h2zm0-3v2H7v-2h2zm6-6H9v2h6V4z"/></svg>
    <div className='flex flex-col gap-y-4 justify-center items-start '>
    <p className=' xs:text-ssm md:text-sm lg:text-lg font-bold text-red-600'>شرکت در نظرسنجی خانواده</p>
    <p className='xs:text-xxsm md:text-ssm'>مطالب این وبلاگ با هدف روشنگری در ...</p>
    </div>
    </div>
    <div className='xs:w-full w-full md:w-1/3  sm:h-32 bg-fuchsia-700 border  rounded-md  flex items-center cursor-pointer  p-2'>
    <svg xmlns="http://www.w3.org/2000/svg" className='fill-white mb-6 ml-2' viewBox="0 0 24 24" width="40" height="40"><path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014c0 .548-.445.993-.993.993H3.993C3.445 22 3 21.555 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2h10zM7 6H5v14h14V6h-2v2H7V6zm2 10v2H7v-2h2zm0-3v2H7v-2h2zm0-3v2H7v-2h2zm6-6H9v2h6V4z"/></svg>
    <div className='flex flex-col justify-center items-start gap-y-4'>
    <p className='text-lg xs:text-ssm md:text-sm font-bold text-white'>ثبت نام دوره مهدویت</p>
    <p className='xs:text-xxsm text-white md:text-ssm text-sm'>مطالب این وبلاگ با هدف روشنگری در ...</p>
    </div>
    </div>
    <div dir='rtl' className='xs:w-full  w-full md:w-1/3  sm:h-32 bg-green-200 border-green-500 rounded-md border flex items-center cursor-pointer  p-2'>

    <svg xmlns="http://www.w3.org/2000/svg" className='fill-green-800 mb-6 ml-2' viewBox="0 0 24 24" width="40" height="40"><path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014c0 .548-.445.993-.993.993H3.993C3.445 22 3 21.555 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2h10zM7 6H5v14h14V6h-2v2H7V6zm2 10v2H7v-2h2zm0-3v2H7v-2h2zm0-3v2H7v-2h2zm6-6H9v2h6V4z"/></svg>
    <div className='flex flex-col justify-center items-start gap-y-4 '>
    <p className='xs:text-tsm text-lg md:text-sm font-bold text-green-700'>شرکت در نظرسنجی خانواده</p>
    <p className='xs:text-xxsm text-black md:text-ssm'>مطالب این وبلاگ با هدف روشنگری در ...</p>
    </div>
    </div>
  </div>
  </div>
  
  )
}
