import React, { useState, useEffect } from 'react';
import GalleryForInternalUnits from '../../components/GalleryForInternalUnits';
import PointOfView from 'components/PointOfView';
import AsideCommonInInternalUnits from 'components/AsideCommonInInternalUnits';
import Loading from 'components/loading';
import ImageForInternalUnits from 'components/ImageForInternalUnits';
import AudioForInternalUnits from 'components/AudioForInternalUnits';
import VideoForInternalUnits from 'components/VideoForInternalUnits';
import TextForInternal from 'components/TextForInternal';
import TitleForInternalUnits from 'components/TitleForInternalUnits';
import Logo from 'assets/images/Frame.png';
import moment from 'moment-jalaali';
import { useRouter } from 'next/router';

export default function internal({ datas }) {
  const [allData, setAllData] = useState(datas?.data);
  const [items, setItems] = useState([]);

  console.log(allData);

  if (!allData) {
    return <Loading />;
  }

  return (
    <div className="w-full h-max bg-neutral-100 my-2 xs:pt-6 pt-12 pb-20">
      <div className="container  mx-auto px-2 h-max ">
        <div className="w-full bg-neutral-100  h-max  flex flex-col lg:flex-row gap-x-8">
          <div className=" w-full lg:w-8/12 bg-white  lg:px-6 h-max px-2 lg:border lg:border-stone-300 lg:rounded-xl">
            <div className="w-full h-36  mt-4 gap-y-6 lg:gap-y-0 grid grid-cols-2">
              <div className=" flex items-center col-span-full lg:col-span-1 ">
                <p className="font-bold xs:text-base text-xl   truncate w-full">
                  {allData.title}
                </p>
              </div>
              <div className=" flex items-center justify-end   lg:col-span-1 ">
                <button className="xs:h-8 xs:text-[10px] xs:w-24 xs:gap-x-1 text-black bg-white w-36 lg:w-28 lg:text-[12px] xl:w-[145px] h-12 rounded-lg border flex items-center justify-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xs:w-4 w-5 md:w-5 xl:w-6 lg:w-5 fill-black"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"
                      fill="#000"
                    ></path>
                  </svg>
                  علاقه مندی ها
                </button>
              </div>
              <div className="col-start-1 row-start-2 lg:col-span-1">
                <div className="w-full  flex items-center gap-x-2">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      src="/assets/images/user/1.jpg"
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 mr-3">
                    <p className="xs:text-[14px] font-bold">
                      عادل گلدست
                    </p>
                    <p className="xs:text-[10px] text-sm opacity-70">
                      واحد مهدویت
                    </p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center col-span-full lg:col-span-1 ">
                <div className="flex gap-x-2 lg:gap-x-8  justify-between items-center w-full">
                  <div className="flex gap-x-1">
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.7935 0C14.2075 0 14.5435 0.336 14.5435 0.75L14.544 1.59781C16.0041 1.69792 17.2167 2.19805 18.075 3.0581C19.012 3.9991 19.505 5.3521 19.5 6.9751V16.0981C19.5 19.4301 17.384 21.5001 13.979 21.5001H5.521C2.116 21.5001 0 19.4011 0 16.0221V6.9731C0 3.83029 1.88706 1.81294 4.96469 1.59815L4.9653 0.75C4.9653 0.336 5.3013 0 5.7153 0C6.1293 0 6.4653 0.336 6.4653 0.75L6.465 1.579H13.043L13.0435 0.75C13.0435 0.336 13.3795 0 13.7935 0ZM18 8.904H1.5V16.0221C1.5 18.5881 2.928 20.0001 5.521 20.0001H13.979C16.572 20.0001 18 18.6141 18 16.0981L18 8.904ZM14.2012 15.1963C14.6152 15.1963 14.9512 15.5323 14.9512 15.9463C14.9512 16.3603 14.6152 16.6963 14.2012 16.6963C13.7872 16.6963 13.4472 16.3603 13.4472 15.9463C13.4472 15.5323 13.7782 15.1963 14.1922 15.1963H14.2012ZM9.7637 15.1963C10.1777 15.1963 10.5137 15.5323 10.5137 15.9463C10.5137 16.3603 10.1777 16.6963 9.7637 16.6963C9.3497 16.6963 9.0097 16.3603 9.0097 15.9463C9.0097 15.5323 9.3407 15.1963 9.7547 15.1963H9.7637ZM5.3169 15.1963C5.7309 15.1963 6.0669 15.5323 6.0669 15.9463C6.0669 16.3603 5.7309 16.6963 5.3169 16.6963C4.9029 16.6963 4.5619 16.3603 4.5619 15.9463C4.5619 15.5323 4.8939 15.1963 5.3079 15.1963H5.3169ZM14.2012 11.3096C14.6152 11.3096 14.9512 11.6456 14.9512 12.0596C14.9512 12.4736 14.6152 12.8096 14.2012 12.8096C13.7872 12.8096 13.4472 12.4736 13.4472 12.0596C13.4472 11.6456 13.7782 11.3096 14.1922 11.3096H14.2012ZM9.7637 11.3096C10.1777 11.3096 10.5137 11.6456 10.5137 12.0596C10.5137 12.4736 10.1777 12.8096 9.7637 12.8096C9.3497 12.8096 9.0097 12.4736 9.0097 12.0596C9.0097 11.6456 9.3407 11.3096 9.7547 11.3096H9.7637ZM5.3169 11.3096C5.7309 11.3096 6.0669 11.6456 6.0669 12.0596C6.0669 12.4736 5.7309 12.8096 5.3169 12.8096C4.9029 12.8096 4.5619 12.4736 4.5619 12.0596C4.5619 11.6456 4.8939 11.3096 5.3079 11.3096H5.3169ZM13.043 3.079H6.465L6.4653 4.041C6.4653 4.455 6.1293 4.791 5.7153 4.791C5.3013 4.791 4.9653 4.455 4.9653 4.041L4.96477 3.1017C2.72454 3.28989 1.5 4.64786 1.5 6.9731V7.404H18L18 6.9731C18.004 5.7381 17.672 4.7781 17.013 4.1181C16.4345 3.53791 15.5889 3.1914 14.5444 3.10218L14.5435 4.041C14.5435 4.455 14.2075 4.791 13.7935 4.791C13.3795 4.791 13.0435 4.455 13.0435 4.041L13.043 3.079Z"
                        fill="#545656"
                      />
                    </svg>

                    <p className="xs:text-[12px] pr-2">1401/12/25 </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.25 11C8.319 11 8.5 12.38 8.5 15.25C8.5 16.688 8.5 17.711 7.896 18.46C7.201 19.323 5.936 19.5 4.25 19.5C2.564 19.5 1.299 19.323 0.604 18.46C0 17.711 0 16.689 0 15.275L0.75 15.25H0C0 12.38 0.181 11 4.25 11ZM15.25 11C19.319 11 19.5 12.38 19.5 15.25C19.5 16.688 19.5 17.711 18.896 18.46C18.201 19.323 16.936 19.5 15.25 19.5C13.564 19.5 12.299 19.323 11.604 18.46C11 17.711 11 16.689 11 15.275L11.75 15.25H11C11 12.38 11.181 11 15.25 11ZM4.45616 12.5004L4.25 12.5C1.64103 12.5 1.50723 12.6872 1.50037 14.8771L1.50079 15.7302C1.50553 16.6011 1.53871 17.2303 1.771 17.52C2.036 17.848 2.823 18 4.25 18C5.677 18 6.464 17.847 6.729 17.519C7 17.182 7 16.382 7 15.274C7 12.7738 7 12.5122 4.45616 12.5004ZM15.4562 12.5004L15.25 12.5C12.641 12.5 12.5072 12.6872 12.5004 14.8771L12.5008 15.7302C12.5055 16.6011 12.5387 17.2303 12.771 17.52C13.036 17.848 13.823 18 15.25 18C16.677 18 17.464 17.847 17.729 17.519C18 17.182 18 16.382 18 15.274C18 12.7738 18 12.5122 15.4562 12.5004ZM4.25 0C8.319 0 8.5 1.38 8.5 4.25C8.5 5.688 8.5 6.711 7.896 7.46C7.201 8.323 5.936 8.5 4.25 8.5C2.564 8.5 1.299 8.323 0.604 7.46C0 6.711 0 5.689 0 4.275L0.75 4.25H0C0 1.38 0.181 0 4.25 0ZM15.25 0C19.319 0 19.5 1.38 19.5 4.25C19.5 5.688 19.5 6.711 18.896 7.46C18.201 8.323 16.936 8.5 15.25 8.5C13.564 8.5 12.299 8.323 11.604 7.46C11 6.711 11 5.689 11 4.275L11.75 4.25H11C11 1.38 11.181 0 15.25 0ZM4.45616 1.50045L4.25 1.5C1.64103 1.5 1.50723 1.68721 1.50037 3.87705L1.50079 4.73018C1.50553 5.60114 1.53871 6.23029 1.771 6.52C2.036 6.848 2.823 7 4.25 7C5.677 7 6.464 6.847 6.729 6.519C7 6.182 7 5.382 7 4.274C7 1.7738 7 1.51222 4.45616 1.50045ZM15.4562 1.50045L15.25 1.5C12.641 1.5 12.5072 1.68721 12.5004 3.87705L12.5008 4.73018C12.5055 5.60114 12.5387 6.23029 12.771 6.52C13.036 6.848 13.823 7 15.25 7C16.677 7 17.464 6.847 17.729 6.519C18 6.182 18 5.382 18 4.274C18 1.7738 18 1.51222 15.4562 1.50045Z"
                        fill="#545656"
                      />
                    </svg>

                    <p className="xs:text-[12px] pr-2">مهدویت</p>
                  </div>

                  <div className="flex items-center justify-center gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" w-5 xs:w-4"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
                    </svg>
                    <p className="xs:text-[12px]">۴امتیاز</p>
                  </div>
                </div>
              </div>
            </div>
            <>
              {allData.items.length &&
                items.map((item, index) => {
                  if (item.type === 'image') {
                    if (item.items.length === 1) {
                      return (
                        <ImageForInternalUnits
                          key={`${item.type}-${index}`}
                          src={item}
                        />
                      );
                    } else if (item.items.length > 1) {
                      return (
                        <GalleryForInternalUnits
                          key={`${item.type}-${index}`}
                          slides={item}
                        />
                      );
                    }
                  } else if (item.type === 'audio') {
                    return (
                      <AudioForInternalUnits
                        key={`${item.type}-${index}`}
                        dataForAudio={item}
                      />
                    );
                  } else if (item.type === 'video') {
                    return (
                      <VideoForInternalUnits
                        key={`${item.type}-${index}`}
                        dataForVideo={item}
                      />
                    );
                  } else if (item.type === 'text') {
                    return (
                      <TextForInternal
                        key={`${item.type}-${index}`}
                        text={item}
                      />
                    );
                  } else if (item.type === 'title') {
                    return (
                      <TitleForInternalUnits
                        key={`${item.type}-${index}`}
                        title={item}
                      />
                    );
                  }
                })}

              <PointOfView />
            </>
          </div>
          <div className="w-full lg:w-4/12 flex flex-col gap-y-8 bg-neutral-100">
            <AsideCommonInInternalUnits title="مناسب شما" />
            <AsideCommonInInternalUnits title="مطالب مناسب شما" />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const dataId = params.internal;

  const res = await fetch(
    `https://nativecontent.sirafgroup.com/api/v1/content/content/?contentId=${dataId}`
  );
  const allData = await res.json();

  return {
    props: {
      datas: allData,
    },
  };
}
