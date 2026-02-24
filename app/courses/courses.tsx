"use client";

import { useEffect } from "react";
import Image from "next/image";


export default function Courses() {
  const aboutImages = [
    {
      src: "/about/3.jpg",
      title: "Zumba",
      description:
        "Get all saloon services including haircuts, colouring, straightening etc",
    },
    {
      src: "/about/2.jpg",
      title: "Aari Designing",
      description:
        "Get all saloon services including haircuts, colouring, straightening etc",
    },
    {
      src: "/about/1.jpg",
      title: "Fashion Designing",
      description:
        "Get all saloon services including haircuts, colouring, straightening etc",
    },
  ];

  return (
    <div className="grid min-h-screen items-center justify-center gap-10 pb-8">
      
      <div className="w-full grid justify-center gap-6">
        <p className="theme-text CalSans-re-font text-[35px] md:text-[55px] lg:text-[64.19px] md:leading-[80%] leading-[100%]  text-center flex justify-center gap-3 font-500
              reveal 
              opacity-0 translate-y-20 
              transition-all duration-900 
              ease-[cubic-bezier(0.16,1,0.3,1)]">1 month courses</p>

        <div className="w-full grid md:flex items-center justify-center gap-6">

          {aboutImages.map((item, index) => (
            <div
              key={index}
              className={`relative w-[309px] md:w-[230px] lg:w-[380px] h-[440px] rounded-[20px] overflow-hidden reveal opacity-0 translate-y-20 transition-all duration-2000 delay-${100 * index} ease-[cubic-bezier(0.16,1,0.3,1)]`}
            >
              <Image
                src={item.src}
                alt="banner"
                width={694}
                height={572}
                priority
              />

              {item.title && (
                <div className="w-full flex items-end h-[220px] absolute bottom-0 z-10 gradient-blue-bg p-6">
                  <div className="w-full grid gap-4">
                    <p className="text-white text-start md:text-[28px] text-[35px] font-bold leading-[77%]">
                      {item.title}
                    </p>
                    <p className="geist-font text-[#CFC2FF] text-start md:text-[14px] text-[18.13px] leading-[18.08px] tracking-[-0.24px]">
                      {item.description}
                    </p>
                    <button className="CalSans-re-font font-400 w-full px-6 py-2 text-[10px] md:text-[16px] rounded-[12px] text-black bg-white">
                      Register Now
                    </button>
                  </div>
                </div>
              )}
              {/* BADGE */}
              <div className="absolute grid right-0 top-0 bg-black text-white px-6 py-4 rounded-bl-[40px]">
                <p className="text-[8px] md:text-[12px] leading-tight">Duration of Course</p>
                <p className="text-[10px] md:text-[18px] leading-tight">3 Months</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full grid justify-center gap-6">
        <p className="theme-text CalSans-re-font text-[35px] md:text-[55px] lg:text-[64.19px] md:leading-[80%] leading-[100%]  text-center flex justify-center gap-3 font-500
              reveal 
              opacity-0 translate-y-20 
              transition-all duration-900 
              ease-[cubic-bezier(0.16,1,0.3,1)]">3 month courses</p>

        <div className="w-full grid md:flex items-center justify-center gap-6">

          {aboutImages.map((item, index) => (
            <div
              key={index}
              className={`relative w-[309px] md:w-[230px] lg:w-[380px] h-[440px] rounded-[20px] overflow-hidden reveal opacity-0 translate-y-20 transition-all duration-2000 delay-${100 * index} ease-[cubic-bezier(0.16,1,0.3,1)]`}
            >
              <Image
                src={item.src}
                alt="banner"
                width={694}
                height={572}
                priority
              />

              {item.title && (
                <div className="w-full flex items-end h-[220px] absolute bottom-0 z-10 gradient-blue-bg p-6">
                  <div className="w-full grid gap-4">
                    <p className="text-white text-start md:text-[28px] text-[35px] font-bold leading-[77%]">
                      {item.title}
                    </p>
                    <p className="geist-font text-[#CFC2FF] text-start md:text-[14px] text-[18.13px] leading-[18.08px] tracking-[-0.24px]">
                      {item.description}
                    </p>
                    <button className="CalSans-re-font font-400 w-full px-6 py-2 text-[10px] md:text-[16px] rounded-[12px] text-black bg-white">
                      Register Now
                    </button>
                  </div>
                </div>
              )}
              {/* BADGE */}
              <div className="absolute grid right-0 top-0 bg-black text-white px-6 py-4 rounded-bl-[40px]">
                <p className="text-[8px] md:text-[12px] leading-tight">Duration of Course</p>
                <p className="text-[10px] md:text-[18px] leading-tight">3 Months</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full grid justify-center gap-6">
        <p className="theme-text CalSans-re-font text-[35px] md:text-[55px] lg:text-[64.19px] md:leading-[80%] leading-[100%]  text-center flex justify-center gap-3 font-500
              reveal 
              opacity-0 translate-y-20 
              transition-all duration-900 
              ease-[cubic-bezier(0.16,1,0.3,1)]">6 month courses</p>

        <div className="w-full grid md:flex items-center justify-center gap-6">

          {aboutImages.map((item, index) => (
            <div
              key={index}
              className={`relative w-[309px] md:w-[230px] lg:w-[380px] h-[440px] rounded-[20px] overflow-hidden reveal opacity-0 translate-y-20 transition-all duration-2000 delay-${100 * index} ease-[cubic-bezier(0.16,1,0.3,1)]`}
            >
              <Image
                src={item.src}
                alt="banner"
                width={694}
                height={572}
                priority
              />

              {item.title && (
                <div className="w-full flex items-end h-[220px] absolute bottom-0 z-10 gradient-blue-bg p-6">
                  <div className="w-full grid gap-4">
                    <p className="text-white text-start md:text-[28px] text-[35px] font-bold leading-[77%]">
                      {item.title}
                    </p>
                    <p className="geist-font text-[#CFC2FF] text-start md:text-[14px] text-[18.13px] leading-[18.08px] tracking-[-0.24px]">
                      {item.description}
                    </p>
                    <button className="CalSans-re-font font-400 w-full px-6 py-2 text-[10px] md:text-[16px] rounded-[12px] text-black bg-white">
                      Register Now
                    </button>
                  </div>
                </div>
              )}
              {/* BADGE */}
              <div className="absolute grid right-0 top-0 bg-black text-white px-6 py-4 rounded-bl-[40px]">
                <p className="text-[8px] md:text-[12px] leading-tight">Duration of Course</p>
                <p className="text-[10px] md:text-[18px] leading-tight">3 Months</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
