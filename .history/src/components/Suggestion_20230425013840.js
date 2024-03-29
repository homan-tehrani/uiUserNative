import React, { useState, useEffect } from 'react';
import Loading from './loading';
import { lecturePhoto } from '../../src/db.json';
import Link from 'next/link';

export default function Suggestion() {
  const [suggestionPhoto, setSuggestionPhoto] = useState(null);
  useEffect(() => {
    setSuggestionPhoto(lecturePhoto);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://nativecontent.sirafgroup.com/api/v1/category/contentByCategory/?categoryId=1&count=10'
      );
      const data = await response.json();
      setSuggestionPhoto(data.data);
    };
    fetchData();
  }, []);
  if (!suggestionPhoto) {
    return <Loading />;
  }

  return (
    <div className="container pb-24 pt-20 mx-auto">
      <h2 className="text-xl font-bold text-center pb-10">مطالب مناسب شما</h2>
      <div className=" flex items-center justify-between">
        {suggestionPhoto.slice(1, 4).map((item) => (
          <>
            <div className="w-1/3 px-8 relative">
              <div className=" overflow-hidden xs:h-56 h-72  sm:h-80 rounded-md">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-full h-full "
                />
              </div>
              <div className="w-full h-40  flex flex-col justify-between p-2 ">
                <div className="flex items-center gap-x-2  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 xs:w-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                  <p className="xs:text-sm truncate font-bold">
                    {item.title}
                  </p>
                </div>

                <p className="xs:text-xsm text-sm text-right text-slate-500">
                  {item?.summary?.substring(0, 150)}...
                </p>

                <div className="flex  justify-between items-center opacity-70 xs:text-xxxsm text-sm">
                  <div className="flex items-center justify-center gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="xs:w-3 w-5"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" />
                    </svg>
                    <p className="xs:text-ssm">1401/9/25</p>
                  </div>

                  <div className="flex items-center justify-center gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="xs:w-3 w-5"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z" />
                    </svg>
                    <p>{item?.portal?.name}</p>
                  </div>

                  <div className="flex items-center justify-center gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="xs:w-3 w-5"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
                    </svg>
                    <p>۱ ساعت و ۱۰ دقیقه</p>
                  </div>
                </div>
              </div>
              <Link
                href={`/units/${item.id}`}
                className="w-full h-full absolute top-0 left-0"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
