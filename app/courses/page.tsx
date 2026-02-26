"use client";

import { useEffect } from "react";
import Image from "next/image";
import WhyChoose from "./whyChoose";
import Contact from "../home/contact";
import Courses from "./courses";

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
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#f6f6f6] pt-[170px]">
      <main className="flex min-h-screen w-full flex-col px-0 py-[20px] md:py-[60px] sm:items-start">
        <div className="w-full grid place-items-center text-center gap-6 md:gap-10">
          <p className="text-black text-[32px] flex items-center gap-3 font-500 reveal 
            opacity-0 translate-y-20 
            transition-all duration-900 
            ease-[cubic-bezier(0.16,1,0.3,1)]">
            <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span>
            Our Courses
          </p>
          <Courses />
        </div>
        <WhyChoose />
        <Contact />

      </main>
    </div>
  );
}
