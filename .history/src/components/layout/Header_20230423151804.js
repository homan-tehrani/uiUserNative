import React, { useState, useEffect } from "react";
import Loading from "../loading";
import Navbar from "../NavBar";
import { imgeProfile } from "../../db.json";
import Link from "next/link";
import MenuResponsive from "../MenuResponsive";


export default function Header() {
  const [imageProfile, setImageProfile] = useState(null);
  const [showMenu, setShowMenue] = useState(false);
  useEffect(() => {
    setImageProfile(imgeProfile);
  }, []);

  const showMenuHandler = () => {
    setShowMenue((prev) => !prev);
  };

  if (!imageProfile) {
    return <Loading />;
  }
  return (
    <header >
      <div className="bg-cyan-800  text-md w-full h-12 flex   items-center justify-center">
        <p className="text-white text-sm font-extralight">
          <svg class="inline ml-2" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 0C15.902 0 20.5 4.598 20.5 10.25C20.5 15.902 15.902 20.5 10.25 20.5C4.598 20.5 0 15.902 0 10.25C0 4.598 4.598 0 10.25 0ZM10.25 1.5C5.425 1.5 1.5 5.425 1.5 10.25C1.5 15.075 5.425 19 10.25 19C15.075 19 19 15.075 19 10.25C19 5.425 15.075 1.5 10.25 1.5ZM9.8308 6.7614C10.3508 6.9784 13.9998 8.8474 13.9998 10.2454C13.9998 11.5554 10.7158 13.3874 9.8768 13.7374C9.5498 13.8734 9.1768 14.0014 8.8278 14.0014C8.5578 14.0014 8.3018 13.9244 8.0928 13.7164C7.9318 13.5574 7.5018 13.1324 7.4998 10.3334C7.4988 7.3614 7.9458 6.9194 8.0928 6.7724C8.6158 6.2544 9.4678 6.6094 9.8308 6.7614ZM9.1338 8.0864C8.9568 9.0874 8.9538 11.4784 9.1308 12.4284C10.0088 12.1184 11.9108 10.8684 12.4228 10.2494C11.9128 9.6484 10.0348 8.4244 9.1338 8.0864Z" fill="white"/>
          </svg>
          1:26:45 
          مانده تا پخش زنده استاد رائفی پور
        </p>
      </div>

      <div className="hidden lg:flex h-16 px-2 items-center justify-between   container mx-auto my-4 ">
        <div className="w-3/4 h-full flex items-center justify-satrt ">
          <Link href="/">
          <svg width="110" height="50" viewBox="0 0 110 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_1)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M81.2404 32.4353L85.0005 28.8307L87.3293 26.598L88.7605 25.226L85.0005 21.6213L77.4804 28.8307C75.4127 30.8129 75.4127 34.0578 77.4804 36.04L88.7568 46.8505L85.9386 49.5522C85.4236 50.046 84.5774 50.046 84.0586 49.5522L73.7203 39.6411C69.585 35.6767 69.585 29.1904 73.7203 25.226L84.9968 14.4155L88.7568 18.0202L92.5169 21.6249L96.2769 25.2295C100.412 29.194 100.412 35.6802 96.2769 39.6447L92.5169 43.2493L81.2404 32.4389V32.4353ZM69.0221 49.5557L66.2039 46.854C57.9333 38.9252 57.9333 25.9526 66.2039 18.0237L81.2404 3.60857L85.0005 0.00390625L103.797 18.0237C112.068 25.9526 112.068 38.9252 103.797 46.854L100.979 49.5557C100.464 50.0495 99.6175 50.0495 99.0988 49.5557L96.2806 46.854L100.041 43.2493C106.244 37.3027 106.244 27.5715 100.041 21.6249L85.0042 7.20972L69.9677 21.6249C63.7647 27.5715 63.7647 37.3027 69.9677 43.2493L73.7277 46.854L70.9095 49.5557C70.3944 50.0495 69.5482 50.0495 69.0295 49.5557H69.0221ZM88.7605 32.4353L92.5206 36.04C94.5882 34.0578 94.5882 30.8129 92.5206 28.8307L91.0894 30.2027L88.7605 32.4353Z" fill="#3998AC"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M48.4585 16.6963H45.383V13.6207H46.1519C47.4211 13.6207 48.4585 14.6582 48.4585 15.9274V16.6963ZM46.1519 24.3889C48.2672 24.3889 49.9963 26.1179 49.9963 28.2333V29.0022V30.54H29.9978C29.0781 30.54 28.254 30.1353 27.6911 29.4989C27.1282 30.139 26.3042 30.54 25.3844 30.54C23.6848 30.54 22.3089 29.1641 22.3089 27.4644V22.0785V21.3096H23.0778C23.5008 21.3096 23.8467 21.6554 23.8467 22.0785V27.4644C23.8467 28.3143 24.5346 29.0022 25.3844 29.0022C26.2343 29.0022 26.9222 28.3143 26.9222 27.4644C26.9222 27.0414 27.268 26.6955 27.6911 26.6955H28.46V27.4644C28.46 28.3143 29.148 29.0022 29.9978 29.0022V28.2333C29.9978 26.1179 31.7269 24.3889 33.8423 24.3889H39.2282H39.9971C40.4201 24.3889 40.7659 24.7347 40.7659 25.1578V29.0022H43.8415V25.1578C43.8415 24.7347 44.1873 24.3889 44.6104 24.3889H45.3793H46.1482H46.1519ZM14.6163 21.3133H16.1541V22.8511H14.6163V21.3133ZM19.2296 24.3889H16.1541H15.7273H15.3852C14.9621 24.3889 14.6163 24.7347 14.6163 25.1578V29.0022H0V30.54H17.6919C19.3842 30.54 20.7564 29.1751 20.7674 27.4865V27.4608V24.3852H19.2296V24.3889ZM16.1541 25.9266H19.2296V27.4681C19.226 28.3179 18.538 29.0022 17.6919 29.0022H16.1541V25.9266ZM31.5356 29.0022H39.2282V25.9266H33.8423C32.573 25.9266 31.5356 26.9641 31.5356 28.2333V29.0022ZM48.4585 28.2333C48.4585 26.9641 47.4211 25.9266 46.1519 25.9266H45.383V29.0022H48.4585V28.2333ZM38.4593 10.5415C37.9258 10.5415 37.4071 10.6224 36.9215 10.7659V11.1706C37.4071 11.0124 37.9222 10.9277 38.4593 10.9277H38.7536H39.6108H40.7696V10.5415H38.9486C38.8824 10.4274 38.8456 10.2987 38.8456 10.1552C38.8456 9.7321 39.1914 9.38629 39.6145 9.38629H40.3833V9H39.6145C38.978 9 38.4593 9.51505 38.4593 10.1552C38.4593 10.2913 38.4813 10.4201 38.5255 10.5415H38.4593ZM17.6919 12.8481V12.0792H18.4607C18.8838 12.0792 19.2296 12.4251 19.2296 12.8481V15.1548C19.2296 16.8545 17.8537 18.2304 16.1541 18.2304C15.2343 18.2304 14.4103 17.8257 13.8474 17.1892C13.2845 17.8294 12.4605 18.2304 11.5407 18.2304C10.621 18.2304 9.79693 17.8257 9.23405 17.1892C8.67118 17.8294 7.84711 18.2304 6.92738 18.2304C5.22772 18.2304 3.85181 16.8545 3.85181 15.1548V13.617C2.58259 13.617 1.54514 14.6545 1.54514 15.9237V17.4615V18.2304H0.776249C0.353175 18.2304 0.00735781 17.8846 0.00735781 17.4615V15.9237C0.00735781 13.8083 1.73644 12.0792 3.85181 12.0792H5.3896V15.1548C5.3896 16.0046 6.07755 16.6926 6.92738 16.6926C7.77721 16.6926 8.46516 16.0046 8.46516 15.1548V12.8481V12.0792H9.23405C9.65713 12.0792 10.0029 12.4251 10.0029 12.8481V15.1548C10.0029 16.0046 10.6909 16.6926 11.5407 16.6926C12.3906 16.6926 13.0785 16.0046 13.0785 15.1548V12.8481V12.0792H13.8474C14.2705 12.0792 14.6163 12.4251 14.6163 12.8481V15.1548C14.6163 16.0046 15.3042 16.6926 16.1541 16.6926C17.0039 16.6926 17.6919 16.0046 17.6919 15.1548V12.8481ZM33.0734 15.1548C33.0734 16.8545 31.6974 18.2304 29.9978 18.2304C29.0781 18.2304 28.254 17.8257 27.6911 17.1892C27.1282 17.8294 26.3042 18.2304 25.3844 18.2304C24.4647 18.2304 23.6406 17.8257 23.0778 17.1892C22.5149 17.8294 21.6908 18.2304 20.7711 18.2304H19.2333V16.6926H20.7711C21.6209 16.6926 22.3089 16.0046 22.3089 15.1548V12.8481V12.0792H23.0778C23.5008 12.0792 23.8467 12.4251 23.8467 12.8481V15.1548C23.8467 16.0046 24.5346 16.6926 25.3844 16.6926C26.2343 16.6926 26.9222 16.0046 26.9222 15.1548V12.8481V12.0792H27.6911C28.1142 12.0792 28.46 12.4251 28.46 12.8481V15.1548C28.46 16.0046 29.148 16.6926 29.9978 16.6926C30.8476 16.6926 31.5356 16.0046 31.5356 15.1548V12.8481V12.0792H32.3045C32.7275 12.0792 33.0734 12.4251 33.0734 12.8481V15.1548ZM39.2282 12.0792H39.9971C40.4201 12.0792 40.7659 12.4251 40.7659 12.8481V16.6926H43.8415V12.0792H45.3793H46.1482C48.2636 12.0792 49.9926 13.8083 49.9926 15.9237V16.6926V17.3658V18.2341H40.7071C40.3355 20.8424 38.0914 22.8474 35.3764 22.8474H34.6075V22.0785C34.6075 21.6554 34.9533 21.3096 35.3764 21.3096C37.2379 21.3096 38.7904 19.9889 39.1436 18.2341H34.6038V16.6963V15.9274C34.6038 13.812 36.3329 12.0829 38.4482 12.0829H39.2171L39.2282 12.0792ZM39.2282 16.6926V13.617H38.4593C37.1901 13.617 36.1526 14.6545 36.1526 15.9237V16.6926H39.2282Z" fill="#282828"/>
            <defs>
              <clipPath id="clip0_0_1">
                <rect width="50" height="50" fill="white" transform="translate(60)"/>
              </clipPath>
            </defs>
          </svg>

          </Link>
          <div className="bg-neutral-100 w-120 h-12 flex justify-between items-center border border-zinc-300 rounded-lg mr-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-translate-x-4 fill-zinc-400"
              viewBox="0 0 24 24"
              width="28"
              height="28"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
            </svg>
            <input
              placeholder="جستجو بین ۱۲۰۰ ویدیو"
              type="text"
              className="h-full w-11/12 placeholder:font-medium placeholder:text-sm placeholder:text-gray-900  outline-0 bg-inherit rounded-lg  pr-2"
            />
          </div>
        </div>

        <div className="w-1/4  h-16 flex items-center justify-end gap-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-cyan-400"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" />
          </svg>
          <Link href="/register" className="w-12 h-12 rounded-full">
            <img
              src={imageProfile[0].src}
              alt={imageProfile[0].alt}
              className="rounded-full w-full h-full"
            />
          </Link>
          <div className="flex items-center justify-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-cyan-400"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
            </svg>
            <p>4 امتیاز</p>
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full h-20 relative flex items-center justify-between px-4 my-6 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          onClick={showMenuHandler}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
        </svg>
        <Link href="/">
          {showMenu && <MenuResponsive />}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="50"
            height="50"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z" />
          </svg>
        </Link>
        <div className="w-20 h-20 ">
          <img
            src={imageProfile[0].src}
            alt={imageProfile[0].alt}
            className="w-full h-full rounded-full "
          />
        </div>
      </div>
      <div className="block lg:hidden w-11/12 mx-auto h-px bg-zinc-300 "></div>

      <div className=" lg:hidden flex items-center justify-start h-14 bg-gray-100 gap-x-2  border border-zinc-300 rounded-md w-11/12 mx-auto my-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-slate-400 mr-2 opacity-80 "
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
        </svg>
        <input
          placeholder="جستجو بین ۱۲۰۰ ویدیو"
          type="text"
          className="  outline-0 h-full bg-inherit rounded-md"
        />
      </div>

      <Navbar />
      
    </header>
  );
}
