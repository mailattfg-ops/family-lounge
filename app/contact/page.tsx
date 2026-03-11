"use client";

import { useEffect, useState } from "react";
import Contact from "../home/contact";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkTime = () => {
      const hours = new Date().getHours();
      setIsOpen(hours >= 9 && hours < 21);
    };
    checkTime();
    const intervalId = setInterval(checkTime, 60000);

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

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []); // 👈 IMPORTANT
  return (
    <div className="flex flex-col items-center justify-center font-sans bg-[#f6f6f6] pt-[150px] md:pt-[180px]">
      <main className="flex w-full mx-auto flex-col px-4 md:px-0 py-[20px] md:py-[40px] ">
        
        {/* Contact Page Header Section */}
        <div className="w-full text-center grid gap-6 mb-12 reveal opacity-0 translate-y-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <h1 className="theme-text font-Serif text-[40px] md:text-[60px] lg:text-[70px] leading-tight font-500">
            Get In Touch With Us
          </h1>
          <p className="w-full md:max-w-[700px] mx-auto text-[#6D6D6D] text-[18px] md:text-[22px] geist-font">
            Whether you have a question about our beauty services, tailoring courses, or want to book an appointment, our team is ready to answer all your questions.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 mt-6">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-[300px] w-full text-center md:text-left h-full">
                <h3 className="text-xl font-bold text-black mb-2">Our Location</h3>
                <p className="text-[#6D6D6D] text-sm">
                  Beauty World Family Lounge,<br />
                  Krishnathulasi Arcade,<br />
                  MC Road , Kulanada Junction,<br /> 
                  Pathanamthitta,<br />
                  Kerala – 689503, India
                </p>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-[300px] w-full text-center md:text-left h-full">
                <h3 className="text-xl font-bold text-black mb-2">Call Us</h3>
                <p className="text-[#6D6D6D] text-sm"> +91 949 5388 624 <br/> +91 628 2057 622 </p>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-[300px] w-full text-center md:text-left h-full">
                <h3 className="text-xl font-bold text-black mb-2">Business Hours</h3>
                <p className="text-[#6D6D6D] text-sm">
                  {isMounted ? (
                    <span className={`font-semibold ${isOpen ? "text-green-600" : "text-red-500"}`}>
                      {isOpen ? "Open Now" : "Currently Closed"}
                    </span>
                  ) : (
                    <span className="opacity-0">Loading...</span>
                  )}
                  <br/> Monday to Sunday <br/> 9:00 AM to 9:00 PM
                </p>
             </div>
          </div>
        </div>

        <Contact />
      </main>
    </div>
  );

}
