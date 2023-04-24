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
                    <div className="">
                      <svg width="22" height="24" className="inline" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1058 9.68793H5.11333L20.4742 5.2381C20.5936 5.20349 20.6943 5.12274 20.7544 5.01398C20.8144 4.90503 20.8287 4.77686 20.7941 4.65747L19.9903 1.88251C19.6691 0.77417 18.6371 0 17.4806 0C17.2369 0 16.9941 0.0346069 16.7587 0.102722L2.33636 4.28064C1.6693 4.47382 1.11651 4.9173 0.779411 5.52905C0.442497 6.14081 0.363395 6.84521 0.556571 7.51208L1.34191 10.2231V21.3913C1.34191 22.8298 2.51214 24 3.95043 24H9.58312C9.84203 24 10.0519 23.7902 10.0519 23.5312C10.0519 23.2723 9.84203 23.0625 9.58312 23.0625H3.95061C3.02904 23.0625 2.27941 22.3129 2.27941 21.3913V15.0123H4.68084H4.68194H4.68285H8.35375H8.35485H8.35595H12.0268H12.0279H12.029H15.6999H15.701H15.702H20.637V21.3913C20.637 22.3129 19.8874 23.0625 18.9658 23.0625H13.3331C13.0744 23.0625 12.8644 23.2723 12.8644 23.5312C12.8644 23.7902 13.0744 24 13.3331 24H18.9658C20.4043 24 21.5745 22.8298 21.5745 21.3913V10.1567C21.5745 9.89777 21.3647 9.68793 21.1058 9.68793ZM12.8402 14.0748L14.8318 10.6254H17.4222L15.4308 14.0748H12.8402ZM9.16711 14.0748L11.1587 10.6254H13.7491L11.7577 14.0748H9.16711ZM5.49419 14.0748L7.48565 10.6254H10.0762L8.08459 14.0748H5.49419ZM7.23699 8.00647L3.90191 4.80322L6.40075 4.07941C6.41833 4.10504 6.43884 4.12921 6.46227 4.15173L9.79736 7.35498L7.29852 8.0788C7.28094 8.05316 7.26025 8.02881 7.23699 8.00647ZM13.5182 2.10773L16.8533 5.31097L14.3545 6.03479C14.3369 6.00916 14.3164 5.9848 14.293 5.96246L10.9579 2.75922L13.4567 2.0354C13.4743 2.06104 13.4948 2.08521 13.5182 2.10773ZM9.99017 3.12982L13.3252 6.33289L10.8264 7.05688C10.8088 7.03125 10.7883 7.0069 10.7649 6.98456L7.4298 3.78131L9.92864 3.0575C9.9464 3.08295 9.96691 3.1073 9.99017 3.12982ZM17.0196 1.00323C17.1701 0.959656 17.3252 0.9375 17.4806 0.9375C18.2224 0.9375 18.884 1.43335 19.0898 2.14343L19.7632 4.46796L17.8826 5.0127C17.8648 4.98706 17.8443 4.96289 17.8209 4.94037L14.486 1.7373L17.0196 1.00323ZM1.60064 5.98132C1.8167 5.58893 2.17065 5.30475 2.59728 5.18115L2.87267 5.10132C2.89043 5.12695 2.91094 5.15131 2.9342 5.17365L6.26928 8.37689L2.13055 9.57587L1.45708 7.25134C1.33349 6.82489 1.38457 6.3739 1.60064 5.98132ZM2.27941 10.6254H6.40313L4.41167 14.0748H2.27941V10.6254ZM16.5133 14.0748L18.5048 10.6254H20.637V14.0748H16.5133Z" fill="#282828" />
                      </svg>
                      <span className="font-bold leading-[34px] text-base px-5">
                        بصیرت مهدوی از استاد رائفی پور در تهران
                      </span>
                    </div>
                    <p className="pt-3 font-normal">
                      مطالب این وب‌گاه با هدف روشنگری در ...
                    </p>
                  </div>

                  <div dir="rtl" className="flex gap-2">
                    <div >
                      <svg width="20" height="22" className="inline ml-3" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7935 0C14.2075 0 14.5435 0.336 14.5435 0.75L14.544 1.59781C16.0041 1.69792 17.2167 2.19805 18.075 3.0581C19.012 3.9991 19.505 5.3521 19.5 6.9751V16.0981C19.5 19.4301 17.384 21.5001 13.979 21.5001H5.521C2.116 21.5001 0 19.4011 0 16.0221V6.9731C0 3.83029 1.88706 1.81294 4.96469 1.59815L4.9653 0.75C4.9653 0.336 5.3013 0 5.7153 0C6.1293 0 6.4653 0.336 6.4653 0.75L6.465 1.579H13.043L13.0435 0.75C13.0435 0.336 13.3795 0 13.7935 0ZM18 8.904H1.5V16.0221C1.5 18.5881 2.928 20.0001 5.521 20.0001H13.979C16.572 20.0001 18 18.6141 18 16.0981L18 8.904ZM14.2012 15.1963C14.6152 15.1963 14.9512 15.5323 14.9512 15.9463C14.9512 16.3603 14.6152 16.6963 14.2012 16.6963C13.7872 16.6963 13.4472 16.3603 13.4472 15.9463C13.4472 15.5323 13.7782 15.1963 14.1922 15.1963H14.2012ZM9.7637 15.1963C10.1777 15.1963 10.5137 15.5323 10.5137 15.9463C10.5137 16.3603 10.1777 16.6963 9.7637 16.6963C9.3497 16.6963 9.0097 16.3603 9.0097 15.9463C9.0097 15.5323 9.3407 15.1963 9.7547 15.1963H9.7637ZM5.3169 15.1963C5.7309 15.1963 6.0669 15.5323 6.0669 15.9463C6.0669 16.3603 5.7309 16.6963 5.3169 16.6963C4.9029 16.6963 4.5619 16.3603 4.5619 15.9463C4.5619 15.5323 4.8939 15.1963 5.3079 15.1963H5.3169ZM14.2012 11.3096C14.6152 11.3096 14.9512 11.6456 14.9512 12.0596C14.9512 12.4736 14.6152 12.8096 14.2012 12.8096C13.7872 12.8096 13.4472 12.4736 13.4472 12.0596C13.4472 11.6456 13.7782 11.3096 14.1922 11.3096H14.2012ZM9.7637 11.3096C10.1777 11.3096 10.5137 11.6456 10.5137 12.0596C10.5137 12.4736 10.1777 12.8096 9.7637 12.8096C9.3497 12.8096 9.0097 12.4736 9.0097 12.0596C9.0097 11.6456 9.3407 11.3096 9.7547 11.3096H9.7637ZM5.3169 11.3096C5.7309 11.3096 6.0669 11.6456 6.0669 12.0596C6.0669 12.4736 5.7309 12.8096 5.3169 12.8096C4.9029 12.8096 4.5619 12.4736 4.5619 12.0596C4.5619 11.6456 4.8939 11.3096 5.3079 11.3096H5.3169ZM13.043 3.079H6.465L6.4653 4.041C6.4653 4.455 6.1293 4.791 5.7153 4.791C5.3013 4.791 4.9653 4.455 4.9653 4.041L4.96477 3.1017C2.72454 3.28989 1.5 4.64786 1.5 6.9731V7.404H18L18 6.9731C18.004 5.7381 17.672 4.7781 17.013 4.1181C16.4345 3.53791 15.5889 3.1914 14.5444 3.10218L14.5435 4.041C14.5435 4.455 14.2075 4.791 13.7935 4.791C13.3795 4.791 13.0435 4.455 13.0435 4.041L13.043 3.079Z" fill="#545656" />
                      </svg>

                      <span>
                        ۱۴۰۱/۰۹/۲۵
                      </span>
                    </div>
                    <div>
                      <svg width="20" height="20" className="inline ml-3" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 11C8.319 11 8.5 12.38 8.5 15.25C8.5 16.688 8.5 17.711 7.896 18.46C7.201 19.323 5.936 19.5 4.25 19.5C2.564 19.5 1.299 19.323 0.604 18.46C0 17.711 0 16.689 0 15.275L0.75 15.25H0C0 12.38 0.181 11 4.25 11ZM15.25 11C19.319 11 19.5 12.38 19.5 15.25C19.5 16.688 19.5 17.711 18.896 18.46C18.201 19.323 16.936 19.5 15.25 19.5C13.564 19.5 12.299 19.323 11.604 18.46C11 17.711 11 16.689 11 15.275L11.75 15.25H11C11 12.38 11.181 11 15.25 11ZM4.45616 12.5004L4.25 12.5C1.64103 12.5 1.50723 12.6872 1.50037 14.8771L1.50079 15.7302C1.50553 16.6011 1.53871 17.2303 1.771 17.52C2.036 17.848 2.823 18 4.25 18C5.677 18 6.464 17.847 6.729 17.519C7 17.182 7 16.382 7 15.274C7 12.7738 7 12.5122 4.45616 12.5004ZM15.4562 12.5004L15.25 12.5C12.641 12.5 12.5072 12.6872 12.5004 14.8771L12.5008 15.7302C12.5055 16.6011 12.5387 17.2303 12.771 17.52C13.036 17.848 13.823 18 15.25 18C16.677 18 17.464 17.847 17.729 17.519C18 17.182 18 16.382 18 15.274C18 12.7738 18 12.5122 15.4562 12.5004ZM4.25 0C8.319 0 8.5 1.38 8.5 4.25C8.5 5.688 8.5 6.711 7.896 7.46C7.201 8.323 5.936 8.5 4.25 8.5C2.564 8.5 1.299 8.323 0.604 7.46C0 6.711 0 5.689 0 4.275L0.75 4.25H0C0 1.38 0.181 0 4.25 0ZM15.25 0C19.319 0 19.5 1.38 19.5 4.25C19.5 5.688 19.5 6.711 18.896 7.46C18.201 8.323 16.936 8.5 15.25 8.5C13.564 8.5 12.299 8.323 11.604 7.46C11 6.711 11 5.689 11 4.275L11.75 4.25H11C11 1.38 11.181 0 15.25 0ZM4.45616 1.50045L4.25 1.5C1.64103 1.5 1.50723 1.68721 1.50037 3.87705L1.50079 4.73018C1.50553 5.60114 1.53871 6.23029 1.771 6.52C2.036 6.848 2.823 7 4.25 7C5.677 7 6.464 6.847 6.729 6.519C7 6.182 7 5.382 7 4.274C7 1.7738 7 1.51222 4.45616 1.50045ZM15.4562 1.50045L15.25 1.5C12.641 1.5 12.5072 1.68721 12.5004 3.87705L12.5008 4.73018C12.5055 5.60114 12.5387 6.23029 12.771 6.52C13.036 6.848 13.823 7 15.25 7C16.677 7 17.464 6.847 17.729 6.519C18 6.182 18 5.382 18 4.274C18 1.7738 18 1.51222 15.4562 1.50045Z" fill="#545656" />
                      </svg>

                      <span>
                        مهدویت
                      </span>
                    </div>
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
