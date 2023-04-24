import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "./loading";
import MorSpeech from "../components/MorSpeech";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { albumPhoto } from "../../src/db.json";

import { Navigation, Pagination } from "swiper";

export default function Album1() {
  const [albumPhotos1, setAlbumPhotos1] = useState(null);
  const swiperRef = useRef();
  useEffect(() => {
    setAlbumPhotos1(albumPhoto);
  }, []);

  const prevSlideHandler = () => {
    swiperRef.current?.slidePrev();
  };

  const nextSlideHandler = () => {
    swiperRef.current?.slideNext();
  };

  if (!albumPhotos1) {
    return <Loading />;
  }

  return (
    <div className="bg-white px-2 py-10 shadow-sm">
    <div className="container mx-auto ">
      <MorSpeech
        classMore="blue-400"
        underline="true"
        colorIcon="fill-blue-400"
        colorText="text-blue-400"
        content="جدیدترین سخنرانی ها"
        nextButtonHandler={nextSlideHandler}
        prevButtonHandler={prevSlideHandler}
      />
      <div className=" mb-6">
        {/* <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button> */}
      </div>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
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
        modules={[Pagination, Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-80 max-w- "
      >
        {albumPhotos1.map((item) => (
          <SwiperSlide
            key={item.id}
            className="max-w-[300px] overflow-hidden rounded-lg flex items-center border border-stone-300 justify-center ml-1  rounded-b-md cursor-pointer"
          >
            <Link
              href="/multimedia/r"
              className="w-full h-full text-sm snap-mandatory snap-x bg-red-200 "
            >
              <div className="w-full h-36 ">
                <img
                  className="w-full h-full object-cover"
                  src={item.src}
                  alt={item.alt}
                />
              </div>
              <div
                dir="rtl"
                className="bg-neutral-100 flex flex-col w-full h-44 justify-between py-2 pr-2 opacity-70"
              >
                <div className="flex flex-col ">
                  <div className="flex gap-x-1">
                  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1058 9.68793H5.11333L20.4742 5.2381C20.5936 5.20349 20.6943 5.12274 20.7544 5.01398C20.8144 4.90503 20.8287 4.77686 20.7941 4.65747L19.9903 1.88251C19.6691 0.77417 18.6371 0 17.4806 0C17.2369 0 16.9941 0.0346069 16.7587 0.102722L2.33636 4.28064C1.6693 4.47382 1.11651 4.9173 0.779411 5.52905C0.442497 6.14081 0.363395 6.84521 0.556571 7.51208L1.34191 10.2231V21.3913C1.34191 22.8298 2.51214 24 3.95043 24H9.58312C9.84203 24 10.0519 23.7902 10.0519 23.5312C10.0519 23.2723 9.84203 23.0625 9.58312 23.0625H3.95061C3.02904 23.0625 2.27941 22.3129 2.27941 21.3913V15.0123H4.68084H4.68194H4.68285H8.35375H8.35485H8.35595H12.0268H12.0279H12.029H15.6999H15.701H15.702H20.637V21.3913C20.637 22.3129 19.8874 23.0625 18.9658 23.0625H13.3331C13.0744 23.0625 12.8644 23.2723 12.8644 23.5312C12.8644 23.7902 13.0744 24 13.3331 24H18.9658C20.4043 24 21.5745 22.8298 21.5745 21.3913V10.1567C21.5745 9.89777 21.3647 9.68793 21.1058 9.68793ZM12.8402 14.0748L14.8318 10.6254H17.4222L15.4308 14.0748H12.8402ZM9.16711 14.0748L11.1587 10.6254H13.7491L11.7577 14.0748H9.16711ZM5.49419 14.0748L7.48565 10.6254H10.0762L8.08459 14.0748H5.49419ZM7.23699 8.00647L3.90191 4.80322L6.40075 4.07941C6.41833 4.10504 6.43884 4.12921 6.46227 4.15173L9.79736 7.35498L7.29852 8.0788C7.28094 8.05316 7.26025 8.02881 7.23699 8.00647ZM13.5182 2.10773L16.8533 5.31097L14.3545 6.03479C14.3369 6.00916 14.3164 5.9848 14.293 5.96246L10.9579 2.75922L13.4567 2.0354C13.4743 2.06104 13.4948 2.08521 13.5182 2.10773ZM9.99017 3.12982L13.3252 6.33289L10.8264 7.05688C10.8088 7.03125 10.7883 7.0069 10.7649 6.98456L7.4298 3.78131L9.92864 3.0575C9.9464 3.08295 9.96691 3.1073 9.99017 3.12982ZM17.0196 1.00323C17.1701 0.959656 17.3252 0.9375 17.4806 0.9375C18.2224 0.9375 18.884 1.43335 19.0898 2.14343L19.7632 4.46796L17.8826 5.0127C17.8648 4.98706 17.8443 4.96289 17.8209 4.94037L14.486 1.7373L17.0196 1.00323ZM1.60064 5.98132C1.8167 5.58893 2.17065 5.30475 2.59728 5.18115L2.87267 5.10132C2.89043 5.12695 2.91094 5.15131 2.9342 5.17365L6.26928 8.37689L2.13055 9.57587L1.45708 7.25134C1.33349 6.82489 1.38457 6.3739 1.60064 5.98132ZM2.27941 10.6254H6.40313L4.41167 14.0748H2.27941V10.6254ZM16.5133 14.0748L18.5048 10.6254H20.637V14.0748H16.5133Z" fill="#282828"/>
                  </svg>
                    <p className="font-bold">سخنرانی استاد</p>
                  </div>
                  <p>سخنرانی استاد در تهران</p>
                </div>

                <div dir="rtl" className="flex gap-x-8">
                  <div className="flex gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" />
                    </svg>
                    <p>1401/9/25</p>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M20.005 2C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2h16.005zM8 4H6v16h2V4zm12 0H10v16h10V4z" />
                  </svg>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}
