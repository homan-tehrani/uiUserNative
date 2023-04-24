import React from 'react'

export default function Survey() {
  return (
    <>
    <div className="flex xs:flex-col mt-16  flex-col container  md:flex-row  gap-x-4  h-max  mx-auto  gap-y-4">
<div className="xs:w-full w-full md:w-1/3 py-4 sm:h-28 bg-green-50  border border-green-600 rounded-md  flex items-center  cursor-pointer p-2">
    <svg width="127" className="fill-green-600" height="128" viewBox="0 0 127 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_f_529_14415)">
    <circle cx="63.5" cy="64.2188" r="18.5" fill="#3CAB10" fill-opacity="0.6"/>
    </g>
    <defs>
    <filter id="filter0_f_529_14415" x="0" y="0.71875" width="127" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="22.5" result="effect1_foregroundBlur_529_14415"/>
    </filter>
    </defs>
    </svg>

  <div className="flex flex-col gap-y-4 justify-center items-start ">
    <p className=" xs:text-ssm md:text-sm lg:text-lg font-bold text-green-600">
      شرکت در نظرسنجی خانواده
    </p>
    <p className="text-sm text-gray-600">
      مطالب این وبلاگ با هدف روشنگری در ...
    </p>
  </div>
</div>
<div className="xs:w-full w-full md:w-1/3 py-4 sm:h-28 bg-fuchsia-700 border  rounded-md  flex items-center cursor-pointer  p-2">
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.25 37.5003C6.25 32.8982 9.98125 29.167 14.5833 29.167H22.9167C27.5187 29.167 31.25 32.8982 31.25 37.5003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M33.333 9.68994C36.2101 9.68994 38.5413 12.0212 38.5413 14.8983C38.5413 17.7754 36.2101 20.1066 33.333 20.1066" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.7606 10.4088C26.5276 13.1758 26.5276 17.662 23.7606 20.4291C20.9936 23.1961 16.5073 23.1961 13.7403 20.4291C10.9733 17.662 10.9733 13.1758 13.7403 10.4088C16.5073 7.64174 20.9936 7.64174 23.7606 10.4088" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M35.417 27.0835C40.0191 27.0835 43.7503 30.8147 43.7503 35.4168" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <div className="flex flex-col justify-center items-start gap-y-4 ">
    <p className="text-lg xs:text-ssm md:text-sm font-bold text-white lg:text-lg ">
      ثبت نام دوره مهدویت
    </p>
    <p className="xs:text-xxsm text-white md:text-ssm text-sm">
      مطالب این وبلاگ با هدف روشنگری در ...
    </p>
  </div>
</div>
<div
  dir="rtl"
  className="xs:w-full  w-full md:w-1/3 py-4 sm:h-28 bg-green-200 border-green-500 rounded-md border flex items-center cursor-pointer  p-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="fill-green-800 mb-6 ml-2"
    viewBox="0 0 24 24"
    width="40"
    height="40"
  >
    <path fill="none" d="M0 0L24 0 24 24 0 24z" />
    <path d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014c0 .548-.445.993-.993.993H3.993C3.445 22 3 21.555 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2h10zM7 6H5v14h14V6h-2v2H7V6zm2 10v2H7v-2h2zm0-3v2H7v-2h2zm0-3v2H7v-2h2zm6-6H9v2h6V4z" />
  </svg>
  <div className="flex flex-col justify-center items-start gap-y-4 ">
    <p className="xs:text-tsm text-lg md:text-sm font-bold text-green-700 lg:text-lg ">
      شرکت در نظرسنجی خانواده
    </p>
    <p className="xs:text-xxsm text-black md:text-ssm">
      مطالب این وبلاگ با هدف روشنگری در ...
    </p>
  </div>
</div>
</div>
</>
  )
}
