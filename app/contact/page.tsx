"use client";

import { useEffect, useState } from "react";
import Contact from "../home/contact";

export default function Home() {

  useEffect(() => {
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

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []); // 👈 IMPORTANT
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#f6f6f6] pt-[150px] md:pt-[170px]">
      <main className="flex min-h-screen w-full flex-col px-0 py-[20px] md:py-[60px] sm:items-start">
        <Contact />
      </main>
    </div>
  );

}
