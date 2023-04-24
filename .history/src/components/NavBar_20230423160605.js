import React from 'react'
import { useState } from "react";
import Link from 'next/link';
import MenuForUnits from './MenuForUnits';

export default function Navbar() {
  const [showMenuForUnits, setShowMenuForUnits] = useState(false)

  return (
    <>
      <div className="hidden lg:flex container  relative px-2 h-8 mx-auto  flex-row-reverse justify-between items center   ">
        <ul className="flex gap-7">
          <li>
            <Link href="#" className="text-gray-500"> 
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" /></svg>
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-500"> 
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z" /><path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z" /></svg>
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-500"> 
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 1h2v7.5h-2V10zm5.5.43c.584-.565 1.266-.93 2-.93 2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 0 0-3.5 0v4.25h-2V10h2v.43z" /></svg>
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-500"> 
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z" /></svg>
            </Link>
          </li>
        </ul>


        <ul className="flex items-center gap-5">
          <li onClick={() => setShowMenuForUnits(prev => !prev)}>
            <button className="space-x-3 space-x-reverse">
              <svg width="20" height="20" className="inline" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 11C8.319 11 8.5 12.38 8.5 15.25C8.5 16.688 8.5 17.711 7.896 18.46C7.201 19.323 5.936 19.5 4.25 19.5C2.564 19.5 1.299 19.323 0.604 18.46C0 17.711 0 16.689 0 15.275L0.75 15.25H0C0 12.38 0.181 11 4.25 11ZM15.25 11C19.319 11 19.5 12.38 19.5 15.25C19.5 16.688 19.5 17.711 18.896 18.46C18.201 19.323 16.936 19.5 15.25 19.5C13.564 19.5 12.299 19.323 11.604 18.46C11 17.711 11 16.689 11 15.275L11.75 15.25H11C11 12.38 11.181 11 15.25 11ZM4.45616 12.5004L4.25 12.5C1.64103 12.5 1.50723 12.6872 1.50037 14.8771L1.50079 15.7302C1.50553 16.6011 1.53871 17.2303 1.771 17.52C2.036 17.848 2.823 18 4.25 18C5.677 18 6.464 17.847 6.729 17.519C7 17.182 7 16.382 7 15.274C7 12.7738 7 12.5122 4.45616 12.5004ZM15.4562 12.5004L15.25 12.5C12.641 12.5 12.5072 12.6872 12.5004 14.8771L12.5008 15.7302C12.5055 16.6011 12.5387 17.2303 12.771 17.52C13.036 17.848 13.823 18 15.25 18C16.677 18 17.464 17.847 17.729 17.519C18 17.182 18 16.382 18 15.274C18 12.7738 18 12.5122 15.4562 12.5004ZM4.25 0C8.319 0 8.5 1.38 8.5 4.25C8.5 5.688 8.5 6.711 7.896 7.46C7.201 8.323 5.936 8.5 4.25 8.5C2.564 8.5 1.299 8.323 0.604 7.46C0 6.711 0 5.689 0 4.275L0.75 4.25H0C0 1.38 0.181 0 4.25 0ZM15.25 0C19.319 0 19.5 1.38 19.5 4.25C19.5 5.688 19.5 6.711 18.896 7.46C18.201 8.323 16.936 8.5 15.25 8.5C13.564 8.5 12.299 8.323 11.604 7.46C11 6.711 11 5.689 11 4.275L11.75 4.25H11C11 1.38 11.181 0 15.25 0ZM4.45616 1.50045L4.25 1.5C1.64103 1.5 1.50723 1.68721 1.50037 3.87705L1.50079 4.73018C1.50553 5.60114 1.53871 6.23029 1.771 6.52C2.036 6.848 2.823 7 4.25 7C5.677 7 6.464 6.847 6.729 6.519C7 6.182 7 5.382 7 4.274C7 1.7738 7 1.51222 4.45616 1.50045ZM15.4562 1.50045L15.25 1.5C12.641 1.5 12.5072 1.68721 12.5004 3.87705L12.5008 4.73018C12.5055 5.60114 12.5387 6.23029 12.771 6.52C13.036 6.848 13.823 7 15.25 7C16.677 7 17.464 6.847 17.729 6.519C18 6.182 18 5.382 18 4.274C18 1.7738 18 1.51222 15.4562 1.50045Z" fill="#282828" />
              </svg>
              <span className="font-bold">
              واحد ها
              </span>
              <svg width="10" height="6" className="inline" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.607633 0.649137C0.762955 0.493815 1.00601 0.479695 1.17728 0.606776L1.22635 0.649137L5.00033 4.42291L8.7743 0.649137C8.92962 0.493815 9.17268 0.479695 9.34395 0.606776L9.39302 0.649137C9.54834 0.804459 9.56246 1.04751 9.43538 1.21879L9.39302 1.26786L5.30969 5.35119C5.15436 5.50651 4.91131 5.52063 4.74004 5.39355L4.69097 5.35119L0.607633 1.26786C0.436779 1.097 0.436779 0.819991 0.607633 0.649137Z" fill="#282828"/>
              </svg>
            </button>
          </li>
          <svg width="1" height="32" viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line opacity="0.32" x1="0.5" y1="0.5" x2="0.499999" y2="31.5" stroke="#545656" stroke-linecap="round"/>
          </svg>
          <li>
            <Link href="/multimedia" className="text-sm font-normal">
              <svg width="18" height="22" className="inline ml-2" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.75 8.8009C17.164 8.8009 17.5 9.1369 17.5 9.5509C17.5 14.1431 13.9754 17.9235 9.50031 18.3069L9.5 20.75C9.5 21.164 9.164 21.5 8.75 21.5C8.336 21.5 8 21.164 8 20.75L8.00069 18.307C3.52514 17.924 0 14.1434 0 9.5509C0 9.1369 0.336 8.8009 0.75 8.8009C1.164 8.8009 1.5 9.1369 1.5 9.5509C1.5 13.5689 4.752 16.8389 8.75 16.8389C12.748 16.8389 16 13.5689 16 9.5509C16 9.1369 16.336 8.8009 16.75 8.8009ZM8.75 0C11.403 0 13.561 2.167 13.561 4.831V9.519C13.561 12.182 11.403 14.349 8.75 14.349C6.097 14.349 3.938 12.182 3.938 9.519V4.831C3.938 2.167 6.097 0 8.75 0ZM8.75 1.5C6.924 1.5 5.438 2.994 5.438 4.831V9.519C5.438 11.354 6.924 12.849 8.75 12.849C10.551 12.849 12.0203 11.3946 12.0602 9.59413L9.8205 9.5938C9.4065 9.5938 9.0705 9.2578 9.0705 8.8438C9.0705 8.4298 9.4065 8.0938 9.8205 8.0938L12.06 8.093V6.255L10.8186 6.2559C10.4046 6.2559 10.0686 5.9199 10.0686 5.5059C10.0686 5.0919 10.4046 4.7559 10.8186 4.7559L12.058 4.755L12.0557 4.64224C11.9582 2.89274 10.513 1.5 8.75 1.5Z" fill="#282828" />
              </svg>
              پنل چند رسانه ای
            </Link>
          </li>
          <li>
            <Link href="/multimedia" className="text-sm font-normal">
              <svg width="21" height="21" viewBox="0 0 21 21" className="inline ml-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 0C15.902 0 20.5 4.598 20.5 10.25C20.5 15.902 15.902 20.5 10.25 20.5C4.598 20.5 0 15.902 0 10.25C0 4.598 4.598 0 10.25 0ZM10.25 1.5C5.425 1.5 1.5 5.425 1.5 10.25C1.5 15.075 5.425 19 10.25 19C15.075 19 19 15.075 19 10.25C19 5.425 15.075 1.5 10.25 1.5ZM9.8308 6.7614C10.3508 6.9784 13.9998 8.8474 13.9998 10.2454C13.9998 11.5554 10.7158 13.3874 9.8768 13.7374C9.5498 13.8734 9.1768 14.0014 8.8278 14.0014C8.5578 14.0014 8.3018 13.9244 8.0928 13.7164C7.9318 13.5574 7.5018 13.1324 7.4998 10.3334C7.4988 7.3614 7.9458 6.9194 8.0928 6.7724C8.6158 6.2544 9.4678 6.6094 9.8308 6.7614ZM9.1338 8.0864C8.9568 9.0874 8.9538 11.4784 9.1308 12.4284C10.0088 12.1184 11.9108 10.8684 12.4228 10.2494C11.9128 9.6484 10.0348 8.4244 9.1338 8.0864Z" fill="#282828" />
              </svg>

              آرشیو کلیپ ها
            </Link>
          </li>
          <li>
            <Link href="/multimedia" className="text-sm font-normal">
              <svg width="20" height="20" viewBox="0 0 20 20" className="inline ml-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.302 0C15.91 0 17.297 0.537 18.312 1.554C19.373 2.616 19.955 4.161 19.953 5.905L19.9545 12.9014C19.9562 12.9283 19.9565 12.9553 19.9554 12.9822L19.953 14.05C19.953 17.581 17.68 19.954 14.297 19.954H5.651C2.271 19.954 0 17.581 0 14.05V5.904C0 2.373 2.271 0 5.651 0H14.302ZM14.5786 10.8323C13.9906 10.8323 13.3006 11.8053 12.6896 12.6643C11.8516 13.8443 10.9846 15.0653 9.6786 15.0653C8.7956 15.0653 7.9866 14.7253 7.2736 14.4243C6.1396 13.9463 5.6256 13.7933 5.1226 14.2073C4.1157 15.037 3.12078 16.5479 2.66363 17.2914C3.38518 18.0354 4.41016 18.454 5.651 18.454H14.297C16.822 18.454 18.453 16.726 18.453 14.05L18.453 13.251L18.4299 13.2267C17.5545 12.3248 16.0429 10.8323 14.5786 10.8323ZM14.302 1.5H5.651C3.13 1.5 1.5 3.229 1.5 5.904V14.05C1.5 14.7186 1.60175 15.328 1.79372 15.8661C2.37241 14.9923 3.24639 13.8094 4.1696 13.0493C5.4216 12.0193 6.7696 12.5853 7.8556 13.0423C8.4946 13.3113 9.0986 13.5653 9.6786 13.5653C10.2106 13.5653 10.8776 12.6253 11.4676 11.7963C12.2866 10.6403 13.2166 9.3323 14.5786 9.3323C16.0733 9.3323 17.4271 10.2509 18.4541 11.1624L18.453 5.904C18.455 4.541 18.039 3.403 17.251 2.614C16.523 1.885 15.504 1.5 14.302 1.5ZM6.857 4.1895C8.288 4.1905 9.452 5.3545 9.453 6.7845V6.7855C9.453 8.2165 8.289 9.3805 6.857 9.3805C5.425 9.3805 4.261 8.2165 4.261 6.7855C4.261 5.3535 5.425 4.1895 6.857 4.1895ZM6.856 5.6895C6.252 5.6895 5.761 6.1805 5.761 6.7855C5.761 7.3895 6.252 7.8805 6.857 7.8805C7.461 7.8805 7.953 7.3895 7.953 6.7865C7.952 6.1815 7.46 5.6905 6.856 5.6895Z" fill="#282828" />
              </svg>
              گالری تصاویر
            </Link>
          </li>
          <li>
            <Link href="/multimedia" className="text-sm font-normal">
              <svg width="20" height="19" viewBox="0 0 20 19" className="inline ml-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99984 0.996582C5.02777 0.996582 0.996094 4.35666 0.996094 8.49681C1.07125 10.9951 2.4491 13.2717 4.62761 14.497C4.41121 15.085 4.11031 15.6384 3.73437 16.1398C3.52688 16.4427 3.53201 16.8433 3.7472 17.1409C3.96238 17.4384 4.34125 17.5687 4.69393 17.4665C5.89676 17.1163 7.02892 16.558 8.03903 15.817C8.68556 15.9382 9.34205 15.9985 9.99984 15.997C14.9719 15.997 19.0036 12.6369 19.0036 8.49681C19.0036 4.35667 14.9719 0.996582 9.99984 0.996582Z" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              فضای مجازی
            </Link>
          </li>
        </ul>
        {showMenuForUnits && <MenuForUnits sesetShowMenuForUnits={setShowMenuForUnits} />}
      </div>
    </>
  )
}