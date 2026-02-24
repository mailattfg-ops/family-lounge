"use client";
import Image from "next/image"; 
import AboutUs from "./aboutUs";
import { useEffect } from "react";
import Contact from "./contact";

export default function Home() {
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
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#f6f6f6]">
      <main className="flex min-h-screen w-full flex-col px-0 sm:items-start gap-6">
        <div className="relative w-full grid place-items-center text-center gap-10 pt-35 md:pt-4">
          

          <div className="relative z-10 w-full grid gap-0 pt-10 md:pt-65">
            <p className="theme-text text-[14.85px] md:text-[19px] lg:text-[24px] reveal 
              opacity-0 translate-y-20 
              transition-all duration-900  delay-100
              ease-[cubic-bezier(0.16,1,0.3,1)]">Redefining how</p>
            <p className="theme-text text-[38px] md:text-[56px] lg:text-[69px] font-350 font-Serif leading-[0.89] pb-2
              reveal 
              opacity-0 translate-y-20 
              transition-all duration-900  delay-200
              ease-[cubic-bezier(0.16,1,0.3,1)]">
              We are Elevating Family Experiences
            </p>
            <p className="theme-text text-[14.85px] md:text-[19px] lg:text-[24px] 
              reveal 
              opacity-0 translate-y-20 
              transition-all duration-900  delay-300
              ease-[cubic-bezier(0.16,1,0.3,1)]">All your needs in one single amazing place</p>
          </div>
          <div className="absolute z-9 top-0 left-0 w-ffit flex items-center justify-center overflow-hidden ">
            <Image
              src="/banner/bann-l.jpg"
              alt="banner"
              width={327}
              height={400}
              priority
              className="scale-x-[-1] leaf-left w-[110px] md:w-[250px] lg:w-[327px] h-[200px] md:h-[310px] lg:h-[400px]"
            />
          </div>
          <div className="absolute z-9 top-0 right-0 w-ffit flex items-center justify-center overflow-hidden">
            <Image
              src="/banner/bann-r.jpg"
              alt="banner"
              width={327}
              height={400}
              priority
              className="leaf-right w-[110px] md:w-[250px] lg:w-[327px] h-[200px] md:h-[310px] lg:h-[400px]"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden gap-6 md:pt-10 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <Image
            src="/banner/bann1.svg"
            alt="banner"
            width={694}
            height={572}
            priority
            className="w-[300px] md:w-[500px] lg:w-[694px] h-[258px] md:h-[358px] lg:h-[572px]"
          />
          <Image
            src="/banner/bann2.svg"
            alt="banner"
            width={694}
            height={572}
            priority
            className="w-[300px] md:w-[500px] lg:w-[694px] h-[258px] md:h-[358px] lg:h-[572px]"
          />
          <Image
            src="/banner/bann3.svg"
            alt="banner"
            width={694}
            height={572}
            priority
            className="w-[300px] md:w-[500px] lg:w-[694px] h-[258px] md:h-[358px] lg:h-[572px]"
          />
        </div>
        <AboutUs />
        <Contact />
      </main>
    </div>
  );
}
