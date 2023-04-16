import React, { useRef, useState, useEffect } from "react";
import { albumPhoto } from "../../src/db.json";
import Loading from "./loading";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";

const Description = () => {
  const [albumPhotos1, setAlbumPhotos1] = useState(null);
  const swiperRef = useRef();
  useEffect(() => {
    setAlbumPhotos1(albumPhoto);
  }, []);
  if (!albumPhotos1) {
    return <Loading />;
  }
  return (
    <>
      <div className="w-full h-100 md:h-110  bg-neutral-100 flex items-center justify-center ">
        <div className="w-full bg-red-100 h-96  py-14  flex flex-col xs:flex xs:items-center xs:justify-center items-center justify-center   ">
          <div className="w-full ">
            <div className="  h-20  flex items-center justify-between -translate-y-4 md:-translate-y-18">
              <div className=" w-2/5 h-1  relative  bg-gradient-to-l from-white  to-cyan-600 rounded-full ">
                <span className="w-px h-px p-1 bg-cyan-600 rounded-full absolute -left-3 -top-0.5"></span>
              </div>
              <div className=" w-2/5 h-1 relative  bg-gradient-to-r from-white  to-cyan-600 rounded-full">
                <span className="w-px h-px p-1 bg-cyan-600 rounded-full absolute -right-3 -top-0.5"></span>
              </div>
            </div>
            <div className="h-full w-full px-2">
              <Swiper
                effect={'coverflow'}
                loop
                centeredSlides
                slidesPerView={2}
                spaceBetween={50}
                coverflowEffect={{
                  rotate: 70,
                  stretch: 100,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }
                modules={[EffectCoverflow]}
              >
                <SwiperSlide
                 className="w-full">
<div class="w-100 flex  flex-col justify-between  xs:w-full xs:h-60 h-60 bg-white rounded-xl border border-neutral-400"><div class="flex  items-center gap-x-4 mt-4 gap-y-1  w-11/12 mx-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-10 w-12 "><path fill="none" d="M0 0h24v24H0z"></path><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path></svg><div class="flex  flex-col font-bold  "><p class="xs:text-sm text-lg">واحد</p><p class="xs:text-xsm opacity-60 text-md">توضیحات واحد</p></div></div><p class="xs:text-sm text-md xs:pr-2 pr-4  mb-14">این مطالب با هدف گذاری پیشرفت شما تهیه شده</p><div class="sm:w-full xs:text-xxsm text-sm sm:text-md md:text-base mb-4 opacity-70 flex items-center justify-center xs:gap-x-2 md:gap-x-4 gap-x-6  mx-auto  "><div class="flex xs:w-14 w-20 md:w-24 items-center justify-center gap-x-0.5  opacity-80"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4  md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path></svg><p class="">25 استاد</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"></path></svg><p>25 صدا</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg><p>25 ویدیو</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z"></path></svg><p>25 نوشته</p></div></div></div>
                </SwiperSlide>

                <SwiperSlide>
<div class="w-100 flex  flex-col justify-between  xs:w-full xs:h-60 h-60 bg-white rounded-xl border border-neutral-400"><div class="flex  items-center gap-x-4 mt-4 gap-y-1  w-11/12 mx-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-10 w-12 "><path fill="none" d="M0 0h24v24H0z"></path><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path></svg><div class="flex  flex-col font-bold  "><p class="xs:text-sm text-lg">واحد</p><p class="xs:text-xsm opacity-60 text-md">توضیحات واحد</p></div></div><p class="xs:text-sm text-md xs:pr-2 pr-4  mb-14">این مطالب با هدف گذاری پیشرفت شما تهیه شده</p><div class="sm:w-full xs:text-xxsm text-sm sm:text-md md:text-base mb-4 opacity-70 flex items-center justify-center xs:gap-x-2 md:gap-x-4 gap-x-6  mx-auto  "><div class="flex xs:w-14 w-20 md:w-24 items-center justify-center gap-x-0.5  opacity-80"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4  md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path></svg><p class="">25 استاد</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"></path></svg><p>25 صدا</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg><p>25 ویدیو</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z"></path></svg><p>25 نوشته</p></div></div></div>
                </SwiperSlide>

                <SwiperSlide>
<div class="w-100 flex  flex-col justify-between  xs:w-full xs:h-60 h-60 bg-white rounded-xl border border-neutral-400"><div class="flex  items-center gap-x-4 mt-4 gap-y-1  w-11/12 mx-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-10 w-12 "><path fill="none" d="M0 0h24v24H0z"></path><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path></svg><div class="flex  flex-col font-bold  "><p class="xs:text-sm text-lg">واحد</p><p class="xs:text-xsm opacity-60 text-md">توضیحات واحد</p></div></div><p class="xs:text-sm text-md xs:pr-2 pr-4  mb-14">این مطالب با هدف گذاری پیشرفت شما تهیه شده</p><div class="sm:w-full xs:text-xxsm text-sm sm:text-md md:text-base mb-4 opacity-70 flex items-center justify-center xs:gap-x-2 md:gap-x-4 gap-x-6  mx-auto  "><div class="flex xs:w-14 w-20 md:w-24 items-center justify-center gap-x-0.5  opacity-80"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4  md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path></svg><p class="">25 استاد</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"></path></svg><p>25 صدا</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg><p>25 ویدیو</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z"></path></svg><p>25 نوشته</p></div></div></div>
                </SwiperSlide>
                <SwiperSlide>
<div class="w-100 flex  flex-col justify-between  xs:w-full xs:h-60 h-60 bg-white rounded-xl border border-neutral-400"><div class="flex  items-center gap-x-4 mt-4 gap-y-1  w-11/12 mx-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-10 w-12 "><path fill="none" d="M0 0h24v24H0z"></path><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path></svg><div class="flex  flex-col font-bold  "><p class="xs:text-sm text-lg">واحد</p><p class="xs:text-xsm opacity-60 text-md">توضیحات واحد</p></div></div><p class="xs:text-sm text-md xs:pr-2 pr-4  mb-14">این مطالب با هدف گذاری پیشرفت شما تهیه شده</p><div class="sm:w-full xs:text-xxsm text-sm sm:text-md md:text-base mb-4 opacity-70 flex items-center justify-center xs:gap-x-2 md:gap-x-4 gap-x-6  mx-auto  "><div class="flex xs:w-14 w-20 md:w-24 items-center justify-center gap-x-0.5  opacity-80"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4  md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path></svg><p class="">25 استاد</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"></path></svg><p>25 صدا</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg><p>25 ویدیو</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z"></path></svg><p>25 نوشته</p></div></div></div>
                </SwiperSlide>

                <SwiperSlide>
<div class="w-100 flex  flex-col justify-between  xs:w-full xs:h-60 h-60 bg-white rounded-xl border border-neutral-400"><div class="flex  items-center gap-x-4 mt-4 gap-y-1  w-11/12 mx-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-10 w-12 "><path fill="none" d="M0 0h24v24H0z"></path><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path></svg><div class="flex  flex-col font-bold  "><p class="xs:text-sm text-lg">واحد</p><p class="xs:text-xsm opacity-60 text-md">توضیحات واحد</p></div></div><p class="xs:text-sm text-md xs:pr-2 pr-4  mb-14">این مطالب با هدف گذاری پیشرفت شما تهیه شده</p><div class="sm:w-full xs:text-xxsm text-sm sm:text-md md:text-base mb-4 opacity-70 flex items-center justify-center xs:gap-x-2 md:gap-x-4 gap-x-6  mx-auto  "><div class="flex xs:w-14 w-20 md:w-24 items-center justify-center gap-x-0.5  opacity-80"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4  md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path></svg><p class="">25 استاد</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"></path></svg><p>25 صدا</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg><p>25 ویدیو</p></div><div class="flex items-center justify-center gap-x-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="xs:w-3 w-4 md:w-5"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z"></path></svg><p>25 نوشته</p></div></div></div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
          <div className=" w-10/12  h-max mx-auto flex items-center justify-center">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
