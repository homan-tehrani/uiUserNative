import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper';
import Loading from './loading';
import MorSpeech from './MorSpeech';
import { albumPhoto3 } from '../../src/db.json';
import Link from 'next/link';

export default function Album3() {
  const [albumPhotos3, setAlbumPhotos3] = useState(null);

  const swiperRef = useRef();
  useEffect(() => {
    setAlbumPhotos3(albumPhoto3);
  }, []);

  const nextSlideHandler = () => {
    swiperRef.current?.slideNext();
  };

  const prevSlideHandler = () => {
    swiperRef.current?.slidePrev();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://nativecontent.sirafgroup.com/api/v1/category/contentByCategory/?categoryId=1&count=10'
      );
      const data = await response.json();
      setAlbumPhotos3(data.data);
    };
    fetchData();
  }, []);

  if (!albumPhotos3) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-800 pt-16 md:pt-12 pb-8 mb-16  px-2 ">
      <div className="-translate-y-8 container mx-auto ">
        <div className="flex -translate-y-3 sm:translate-y-8 lg:translate-x-40 w-full items-center justify-center  gap-x-1 h-8   text-xsm text-white  px-1 rounded-sm">
          <div className="bg-gray-900  p-2 rounded-md flex items-center ">
            <Link
              href="http://www.youtube.com"
              className="text-sm opacity-70 bg-gray-900 ml-2"
            >
              youtube
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white inline mr-1 p-2"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M19.606 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.5 6 12 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592C4.285 7.419 4 9.196 4 12s.285 4.58.394 5.006c.076.297.292.522.538.59C5.372 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592C19.715 16.581 20 14.8 20 12s-.285-4.58-.394-5.005zm1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5v-7l6 3.5-6 3.5z" />
              </svg>
            </Link>
            <Link
              href="http://www.twitter.com"
              className="text-sm bg-slate-700 p-1 rounded-md"
            >
              twitter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-cyan-500 inline ml-2"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
              </svg>
            </Link>
          </div>
        </div>
        <MorSpeech
          classMore="white"
          colorIcon="fill-white"
          colorText="text-white"
          nextButtonHandler={nextSlideHandler}
          prevButtonHandler={prevSlideHandler}
          content="پربازدیدترین سخنرانی ها"
        />
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        modules={[Pagination, Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="container h-80  "
      >
        {albumPhotos3.map((item) => (
          <SwiperSlide
            key={item.id}
            dir="rtl"
            className=" bg-gray-900  p-4  text-white border border-cyan-500 rounded-lg cursor-pointer"
          >
            <Link
              href={`/units/${item.id}`}
              className="w-full h-full  flex flex-col justify-between "
            >
              <div className="flex  items-center w-full  ">
                <div className="w-24 h-20 rounded-full overflow-hidden">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full"
                  />
                </div>
                <div
                  dir="rtl"
                  className="flex flex-col items-start pr-4 text-lg"
                >
                  <p className="font-bold mb-2">
                    استاد رائفی پور
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      className="inline mr-2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.34778 1.71013C5.85112 0.72607 6.84948 0.0551758 8 0.0551758C9.15052 0.0551758 10.1489 0.726069 10.6522 1.71012C11.6796 1.38313 12.8433 1.6403 13.6569 2.48339C14.4704 3.32646 14.7186 4.53243 14.403 5.5971C15.3526 6.11871 16 7.15331 16 8.3456C16 9.5379 15.3526 10.5725 14.403 11.0941C14.7186 12.1588 14.4704 13.3647 13.6569 14.2078C12.8433 15.0509 11.6796 15.3081 10.6522 14.9811C10.1489 15.9651 9.15052 16.636 8 16.636C6.84947 16.636 5.85112 15.9651 5.34778 14.9811C4.32041 15.3081 3.15669 15.0509 2.34314 14.2078C1.52961 13.3647 1.28144 12.1588 1.59698 11.0941C0.647392 10.5725 0 9.5379 0 8.3456C0 7.15331 0.647391 6.11871 1.59697 5.5971C1.28143 4.53243 1.5296 3.32646 2.34314 2.48339C3.15669 1.64031 4.32041 1.38313 5.34778 1.71013ZM11.81 6.26519C11.8686 6.32589 11.8686 6.42431 11.81 6.48502L7.07236 11.3946C7.01378 11.4553 6.91881 11.4553 6.86023 11.3946L4.24393 8.68335C4.18536 8.62265 4.18536 8.52422 4.24393 8.46352L5.09246 7.58419C5.15104 7.52348 5.24602 7.52348 5.30459 7.58419L6.86023 9.1963C6.91881 9.257 7.01378 9.257 7.07236 9.1963L10.7493 5.38585C10.8079 5.32515 10.9029 5.32515 10.9614 5.38585L11.81 6.26519Z"
                        fill="#1EA1F2"
                      />
                      <path
                        d="M11.81 6.48502C11.8686 6.42431 11.8686 6.32589 11.81 6.26519L10.9614 5.38585C10.9029 5.32515 10.8079 5.32515 10.7493 5.38585L7.07236 9.1963C7.01378 9.257 6.91881 9.257 6.86023 9.1963L5.30459 7.58419C5.24602 7.52348 5.15104 7.52348 5.09246 7.58419L4.24393 8.46352C4.18536 8.52422 4.18536 8.62265 4.24393 8.68335L6.86023 11.3946C6.91881 11.4553 7.01378 11.4553 7.07236 11.3946L11.81 6.48502Z"
                        fill="white"
                      />
                    </svg>
                  </p>

                  <p className="truncate w-60 font-bold">
                    {item.title}
                  </p>
                </div>
              </div>

              <div className=" w-full h-10 text-sm -translate-y-6">
                <p className="text-slate-300 mt-2">
                  {item?.summary?.substring(0, 150)}...
                </p>
              </div>

              <div className=" w-full h-10 ">
                <Link
                  className="text-cyan-500 "
                  href={`/units/${item.id}`}
                >
                  <u>بیشتر</u>
                </Link>
              </div>

              <div className=" text-center text-sm">
                <p>1401/9/25</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
