"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Service from "./service";

export default function Home() {
  const aboutImages = [
    {
      src: "/about/4.jpg",
      title: "Saloon",
      description:
        "Get all saloon services including haircuts, colouring, straightening etc",
    },
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
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-20");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#f6f6f6] pt-[170px]">
      <main className="flex min-h-screen w-full flex-col px-0 py-[20px] md:py-[60px] sm:items-start">
        <div className="w-full grid place-items-center text-center gap-6 md:gap-10">
          <p className="text-black text-[32px] flex items-center gap-3 font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span>
            Our Services
          </p>

          <div className="w-full grid md:flex items-center justify-center gap-6">
            {aboutImages.map((item, index) => (
              <div
                key={index}
                className={`relative w-[309px] lg:w-[350px] h-[440px] rounded-[20px] overflow-hidden reveal opacity-0 translate-y-20 transition-all duration-2000 delay-${100 * index} ease-[cubic-bezier(0.16,1,0.3,1)]`}
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
                    <div className="w-full">
                      <p className="text-white text-start text-[41.33px] font-bold pr-4">
                        {item.title}
                      </p>
                      <p className="geist-font text-[#CFC2FF] text-start text-[18.13px] leading-[18.08px] tracking-[-0.24px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        <Service />
      </main>
    </div>
  );
}
