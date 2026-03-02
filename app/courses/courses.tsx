"use client";

import React from "react";
import Image from "next/image";

export default function Courses() {
  const handleRegister = (courseName: string) => {
    const phoneNumber = "919495388624";
    const message = encodeURIComponent(`Hi, I'm interested in registering for the ${courseName}.`);
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = url;
  };

  return (
    <div className="w-full max-w-[1250px] mx-auto grid gap-12 px-4 md:px-10 mt-6 mb-16">
      
      {/* 1. Diploma in Beauty Care */}
      <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col lg:flex-row overflow-hidden reveal opacity-0 translate-y-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {/* Image Side */}
        <div className="w-full lg:w-2/5 h-[300px] lg:h-auto relative">
          <Image
            src="/Courses/5.jpg"
            alt="Beauty Care Course"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Content Side */}
        <div className="w-full lg:w-3/5 p-8 md:p-10 flex flex-col justify-center text-left">
          <h2 className="text-[28px] md:text-[38px] font-bold text-black leading-tight mb-4">
            Diploma in Beauty Care
          </h2>
          <p className="text-gray-600 text-[16px] md:text-[18px] mb-8 leading-relaxed max-w-[90%]">
            Beauty World Family Lounge, Kulanada offers Government Approved Beautician Courses with practical, job-oriented training. Ideal for beginners and those aiming to build a career or start their own beauty salon.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-[18px] font-semibold text-black mb-4">Course Duration</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full theme-bg"></span> 1 Month – Basic Level</li>
                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full theme-bg"></span> 3 Months – Advanced Level</li>
                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full theme-bg"></span> 6 Months – Professional Level</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[18px] font-semibold text-black mb-4">Highlights</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3 items-center"><span className="text-[#00B41E] font-bold">✔</span> Government Certification</li>
                <li className="flex gap-3 items-center"><span className="text-[#00B41E] font-bold">✔</span> Practical Training</li>
                <li className="flex gap-3 items-center"><span className="text-[#00B41E] font-bold">✔</span> Experienced Trainers</li>
                <li className="flex gap-3 items-center"><span className="text-[#00B41E] font-bold">✔</span> Career & Self-Employment Support</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-end">
            <button 
              onClick={() => handleRegister("Diploma in Beauty Care")}
              className="px-10 py-4 bg-black text-white text-[16px] font-medium rounded-xl hover:bg-gray-800 transition-colors cursor-pointer w-full sm:w-auto"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* 2. Diploma in Fashion Designing & Tailoring */}
      <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col lg:flex-row-reverse overflow-hidden reveal opacity-0 translate-y-20 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {/* Image Side */}
        <div className="w-full lg:w-2/5 h-[300px] lg:h-auto relative">
          <Image
            src="/about/1.jpg"
            alt="Fashion Designing & Tailoring"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Content Side */}
        <div className="w-full lg:w-3/5 p-8 md:p-10 flex flex-col justify-center text-left">
          <h2 className="text-[28px] md:text-[38px] font-bold text-black leading-tight mb-4">
            Diploma in Fashion Designing & Tailoring
          </h2>
          <p className="text-gray-600 text-[16px] md:text-[18px] mb-8 leading-relaxed max-w-[90%]">
            Beauty World Family Lounge, Kulanada offers Government Approved Fashion Designing & Tailoring Courses with hands-on, job-oriented training. Ideal for beginners and aspiring designers aiming to build a career or start their own boutique or tailoring unit.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-[18px] font-semibold text-black mb-4">Course Duration</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-black"></span> 1 Month – Basic Level</li>
                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-black"></span> 3 Months – Advanced Level</li>
                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-black"></span> 6 Months – Professional Level</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[18px] font-semibold text-black mb-4">Highlights</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3 items-center"><span className="text-[#00B41E] font-bold">✔</span> Government Certification</li>
                <li className="flex gap-3 items-center"><span className="text-[#00B41E] font-bold">✔</span> Practical Designing & Tailoring</li>
                <li className="flex gap-3 items-center"><span className="text-[#00B41E] font-bold">✔</span> Experienced Trainers</li>
                <li className="flex gap-3 items-center"><span className="text-[#00B41E] font-bold">✔</span> Career & Boutique Setup Support</li>
              </ul>
            </div>
          </div>

          <div>
            <button 
              onClick={() => handleRegister("Diploma in Fashion Designing & Tailoring")}
              className="px-10 py-4 bg-black text-white text-[16px] font-medium rounded-xl hover:bg-gray-800 transition-colors cursor-pointer w-full sm:w-auto"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
