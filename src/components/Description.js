import React, { useRef, useState, useEffect } from 'react';
import { albumPhoto } from '../../src/db.json';
import Loading from './loading';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper';

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
        <div className="w-full bg-[#fab33f] bg-opacity-20 h-96  py-14  flex flex-col xs:flex xs:items-center xs:justify-center items-center justify-center   ">
          <div className="w-full ">
            <div className="  h-20  flex items-center justify-between -translate-y-4 md:-translate-y-18">
              <div className=" w-2/5 h-1  relative  bg-gradient-to-l from-white  to-cyan-600 rounded-full ">
                <span className="w-px h-px p-1 bg-cyan-600 rounded-full absolute -left-3 -top-0.5"></span>
              </div>
              <span className="text-[#3998ac] font-bold text-2xl">
                واحد های مصاف
              </span>
              <div className=" w-2/5 h-1 relative  bg-gradient-to-r from-white  to-cyan-600 rounded-full">
                <span className="w-px h-px p-1 bg-cyan-600 rounded-full absolute -right-3 -top-0.5"></span>
              </div>
            </div>
            <div className="h-full w-full px-2">
              <Swiper
                effect={'coverflow'}
                slidesPerView={5}
                centeredSlides={false}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                spaceBetween={50}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                  slideShadows: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
              >
                {[...Array(5)].map((item) => (
                  <SwiperSlide className="">
                    <div className="p-0.5 bg-gradient-to-r from-[#fcbb45] to-[#3998ac] w-100  rounded-xl ">
                      <div className="w-[29.7rem] flex  flex-col justify-between  xs:w-full xs:h-60 h-60 bg-white rounded-xl ">
                        <div className="flex  items-center gap-x-4 mt-4 gap-y-1  w-11/12 mx-auto">
                          <svg
                            width="49"
                            height="45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="m15.883 26.76 8.675 8.676 8.943-8.942a9.35 9.35 0 0 0 2.736-6.607 9.35 9.35 0 0 0-2.736-6.607l-2.536-2.536.2-.2a5.21 5.21 0 0 1 3.67-1.535 5.21 5.21 0 0 1 3.671 1.535 5.21 5.21 0 0 1 1.535 3.67 5.21 5.21 0 0 1-1.535 3.67l-.934.935c.066.868.066 1.735-.067 2.603-.067.467-.134.934-.267 1.335l3.003-3.004a7.623 7.623 0 0 0 2.27-5.472 7.623 7.623 0 0 0-2.27-5.472A7.623 7.623 0 0 0 34.77 6.54a7.623 7.623 0 0 0-5.472 2.269l-.2.2-2.737-2.736.2-.2a11.63 11.63 0 0 1 8.209-3.404c3.003 0 5.94 1.135 8.208 3.404a11.629 11.629 0 0 1 3.404 8.208c0 3.003-1.135 5.94-3.404 8.209L24.492 40.975 6.006 22.49a11.629 11.629 0 0 1-3.403-8.209c0-3.003 1.134-5.94 3.403-8.208a11.629 11.629 0 0 1 8.208-3.404c3.004 0 5.94 1.135 8.209 3.404l8.876 8.876.333.333a6.725 6.725 0 0 1 1.869 4.672c0 1.735-.667 3.47-2.002 4.805l-7.074 7.073-7.14-7.14a6.725 6.725 0 0 1-1.87-4.672 6.77 6.77 0 0 1 2.003-4.804l2.536-2.536 2.736 2.736-2.536 2.536c-.534.533-.868 1.334-.868 2.068 0 .735.267 1.469.868 2.07l4.338 4.337 4.337-4.338c.534-.534.868-1.334.868-2.069a2.88 2.88 0 0 0-.868-2.068l-9.142-9.143a7.623 7.623 0 0 0-5.473-2.269 7.623 7.623 0 0 0-5.472 2.269 7.623 7.623 0 0 0-2.269 5.472c0 2.002.734 3.938 2.27 5.472l3.002 3.004a9.457 9.457 0 0 1-.267-1.335c-.133-.868-.133-1.735-.066-2.603l-.935-.934a5.21 5.21 0 0 1-1.535-3.67 5.21 5.21 0 0 1 1.535-3.67 5.21 5.21 0 0 1 3.67-1.536 5.21 5.21 0 0 1 3.671 1.535l.2.2-2.536 2.536a9.35 9.35 0 0 0-2.736 6.607c0 2.336.868 4.738 2.67 6.54l.333.334h.134Zm6.14-7.073 2.535-2.536 2.736 2.736-2.736 2.736-2.736-2.736.2-.2Zm2.268-15.55C21.49 1.336 17.886 0 14.214 0 10.611 0 6.94 1.401 4.138 4.138 1.335 6.94 0 10.544 0 14.214c0 3.604 1.401 7.275 4.138 10.077l20.354 20.355L44.846 24.29c2.736-2.802 4.137-6.406 4.137-10.01 0-3.603-1.401-7.274-4.137-10.077C42.043 1.401 38.439.067 34.769.067c-3.604 0-7.274 1.401-10.077 4.137l-.2.2-.2-.2v-.066Z"
                              fill="#EE53BB"
                            />
                          </svg>
                          <div className="flex  flex-col   ">
                            <p className="xs:text-sm text-lg font-bold">
                              واحد
                            </p>
                            <p className="xs:text-xsm opacity-60 text-md">
                              توضیحات واحد
                            </p>
                          </div>
                        </div>
                        <p className="xs:text-sm text-md xs:pr-2 pr-4 pt-3 leading-7  text-slate-500">
                          مطالب این وب‌گاه با هدف روشنگری در فتنه‌های
                          آخرالزمانی و آشنایی مسلمانان با موضوعات و
                          معارف مهدوی تهیه و تدوین مسلمانان با موضوعات
                          و معارف مهدوی تهیه و تدوین شده است.
                        </p>

                        <div className="sm:w-full xs:text-xxsm text-sm sm:text-md md:text-base mb-4 opacity-70 flex items-center justify-start px-4 xs:gap-x-2 md:gap-x-4  mx-auto  ">
                          <div className="flex items-center justify-center gap-x-0.5">
                            <svg
                              width="18"
                              height="22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16.75 8.8a.75.75 0 0 1 .75.75c0 4.593-3.525 8.373-8 8.757v2.443a.75.75 0 0 1-1.5 0v-2.443c-4.475-.383-8-4.164-8-8.756a.75.75 0 0 1 1.5 0c0 4.018 3.252 7.288 7.25 7.288S16 13.569 16 9.55a.75.75 0 0 1 .75-.75Zm-8-8.8c2.653 0 4.811 2.167 4.811 4.831v4.688c0 2.663-2.158 4.83-4.811 4.83s-4.812-2.167-4.812-4.83V4.831C3.938 2.167 6.097 0 8.75 0Zm0 1.5c-1.826 0-3.312 1.494-3.312 3.331v4.688c0 1.835 1.486 3.33 3.312 3.33 1.801 0 3.27-1.454 3.31-3.255H9.82a.75.75 0 0 1 0-1.5l2.24-.001V6.255h-1.241a.75.75 0 0 1 0-1.5h1.239l-.002-.113C11.958 2.892 10.513 1.5 8.75 1.5Z"
                                fill="#282828"
                              />
                            </svg>
                            <p>25 صدا</p>
                          </div>
                          <div className="flex items-center justify-center gap-x-0.5">
                            <svg
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.99634 6.99634C3.99634 5.33948 5.33948 3.99634 6.99634 3.99634H19.0038C20.6607 3.99634 22.0038 5.33948 22.0038 6.99634V19.0038C22.0038 20.6607 20.6607 22.0038 19.0038 22.0038H6.99634C5.33948 22.0038 3.99634 20.6607 3.99634 19.0038V6.99634Z"
                                stroke="#545656"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <rect
                                x="7.99805"
                                y="7.99805"
                                width="3.50146"
                                height="3.50146"
                                rx="0.5"
                                stroke="#545656"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M14.5007 7.99801H18.0022"
                                stroke="#545656"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M14.5007 11.4995H18.0022"
                                stroke="#545656"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M7.99805 14.5007H18.0022"
                                stroke="#545656"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M7.99805 18.0022H18.0022"
                                stroke="#545656"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p>25 نوشته</p>
                          </div>
                          <div className="flex items-center justify-center">
                            <svg
                              width="22"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M21.106 9.688H5.113l15.361-4.45a.47.47 0 0 0 .32-.58l-.804-2.775A2.624 2.624 0 0 0 17.48 0c-.243 0-.486.035-.721.103L2.336 4.28A2.59 2.59 0 0 0 .78 5.529a2.59 2.59 0 0 0-.222 1.983l.785 2.711v11.168A2.612 2.612 0 0 0 3.95 24h5.633a.469.469 0 1 0 0-.938H3.951c-.922 0-1.672-.75-1.672-1.67v-6.38h18.358v6.38c0 .92-.75 1.67-1.671 1.67h-5.633a.469.469 0 0 0 0 .938h5.633a2.612 2.612 0 0 0 2.608-2.609V10.157a.469.469 0 0 0-.468-.47Zm-8.266 4.387 1.992-3.45h2.59l-1.991 3.45h-2.59Zm-3.673 0 1.992-3.45h2.59l-1.991 3.45h-2.59Zm-3.673 0 1.992-3.45h2.59l-1.991 3.45h-2.59Zm1.743-6.069L3.902 4.803 6.4 4.08c.017.026.038.05.061.073l3.335 3.203-2.498.724a.466.466 0 0 0-.062-.073Zm6.281-5.898 3.335 3.203-2.499.724a.46.46 0 0 0-.061-.073L10.958 2.76l2.499-.724c.017.026.038.05.061.073ZM9.99 3.13l3.335 3.203-2.499.724a.46.46 0 0 0-.061-.072L7.43 3.78l2.499-.724c.017.026.038.05.061.073Zm7.03-2.127a1.682 1.682 0 0 1 2.07 1.14l.673 2.325-1.88.545a.48.48 0 0 0-.062-.073l-3.335-3.203 2.534-.734ZM1.6 5.981c.217-.392.57-.676.997-.8l.276-.08c.017.026.038.05.061.073L6.27 8.377 2.131 9.576 1.457 7.25a1.66 1.66 0 0 1 .144-1.27Zm.68 4.644h4.123l-1.991 3.45H2.279v-3.45Zm14.233 3.45 1.992-3.45h2.132v3.45h-4.124Z"
                                fill="#282828"
                              />
                            </svg>
                            <p>25 ویدیو</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
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
