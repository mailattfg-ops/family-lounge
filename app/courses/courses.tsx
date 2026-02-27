"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CourseItem {
  src: string;
  title: string;
  description: string;
  syllabus?: string[];
}

const CourseCard = ({ item, duration, index }: { item: CourseItem; duration: string; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`relative w-[309px] md:w-[230px] lg:w-[380px] h-[440px] reveal opacity-0 translate-y-20 transition-all duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)]`}
      style={{ 
        perspective: "1000px",
        transitionDelay: `${100 * index}ms`
      }}
    >
      <div 
        className="w-full h-full transition-transform duration-700 relative"
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* FRONT SIDE */}
        <div 
          className={`absolute w-full h-full rounded-[20px] overflow-hidden bg-white ${isFlipped ? "pointer-events-none" : ""}`} 
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={item.src}
            alt="banner"
            width={694}
            height={572}
            priority
            className="w-full h-full object-cover"
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
                <button 
                  onClick={() => setIsFlipped(true)}
                  className="CalSans-re-font font-400 w-full px-6 py-2 text-[10px] md:text-[16px] rounded-[12px] text-black bg-white hover:bg-gray-200 transition-colors"
                >
                  Read More
                </button>
              </div>
            </div>
          )}
          {/* BADGE */}
          <div className="absolute grid right-0 top-0 bg-black text-white px-6 py-4 rounded-bl-[40px] z-20">
            <p className="text-[8px] md:text-[12px] leading-tight">Duration of Course</p>
            <p className="text-[10px] md:text-[18px] leading-tight">{duration}</p>
          </div>
        </div>

        {/* BACK SIDE */}
        <div 
          className={`absolute w-full h-full rounded-[20px] bg-white text-black p-6 flex flex-col justify-center gap-4 shadow-xl border border-gray-100 ${!isFlipped ? "pointer-events-none" : ""}`}
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          <h3 className="text-[25px] font-bold theme-text pt-4">{item.title}</h3>
          <p className="text-[14px] text-gray-600  leading-snug">
            Discover the full curriculum, practical benefits, and career prospects for our intensive {duration} {item.title} course.
          </p>
          
          <div className="w-full bg-[#f6f6f6] p-4 rounded-xl my-2 text-sm text-gray-700 flex-1 overflow-y-auto max-h-[180px]">
            <ul className="list-disc pl-4 space-y-1 font-medium">
              {item.syllabus ? (
                item.syllabus.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))
              ) : (
                <>
                  <li>Comprehensive theoretical modules</li>
                  <li>Guided hands-on practicals</li>
                  <li>Learn from industry experts</li>
                  <li>Official Certificate on completion</li>
                </>
              )}
            </ul>
          </div>

          <div className="mt-auto w-full grid gap-2">
            <button 
              onClick={() => {
                const phoneNumber = "919495388624"; // <-- Replace with your real WhatsApp number
                const message = encodeURIComponent(`Hi, I'm interested in registering for the ${duration} ${item.title} course.`);
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                )}`;

                window.location.href = url;
              }}
              className="CalSans-re-font font-400 w-full px-6 py-2 text-[14px] md:text-[16px] rounded-[12px] text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Register Now
            </button>
            <button 
              onClick={() => setIsFlipped(false)}
              className="CalSans-re-font font-400 w-full px-6 py-2 text-[14px] rounded-[12px] text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              Back to course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Courses() {
  const aboutImages: CourseItem[] = [
    {
      src: "/Courses/5.jpg",
      title: "Beautician",
      description:
        "Learn professional makeup, advanced skincare techniques, and bridal styling from industry experts.",
      syllabus: [
        "Threading", "Bleech", "Cleanup", "De-Tan", "V. Peel", "Facial", 
        "Ultrazone Treatment", "Skin", "Hot oil treatment", "Dandruff treatment", 
        "Shampoo Wash", "Hair Color", "Smoothening", "Straightening", "Hair cut", 
        "Hair style", "Waxing", "Manicure", "Pedicure", "Hair dye", "Make up"
      ]
    },
    {
      src: "/about/1.jpg",
      title: "Fashion Designing",
      description:
        "Master pattern making, garment construction, and contemporary design principles to launch your fashion career.",
    },
    {
      src: "/about/2.jpg",
      title: "Tailoring",
      description:
        "Acquire practical skills in bespoke tailoring, cutting, altering, and creating custom-fitted garments.",
    },
  ];

  const durations = [
    { title: "1 month courses", durationStr: "1 Months" },
    { title: "3 month courses", durationStr: "3 Months" },
    { title: "6 month courses", durationStr: "6 Months" },
  ];

  return (
    <div className="grid min-h-screen items-center justify-center gap-10 pb-8">
      {durations.map((section, sIndex) => (
        <div key={sIndex} className="w-full grid justify-center gap-6">
          <p className="theme-text CalSans-re-font text-[35px] md:text-[55px] lg:text-[64.19px] md:leading-[80%] leading-[100%] text-center flex justify-center gap-3 font-500 reveal opacity-0 translate-y-20 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
            {section.title}
          </p>

          <div className="w-full grid md:flex items-center justify-center gap-6">
            {aboutImages.map((item, index) => (
              <CourseCard 
                key={index} 
                item={item} 
                duration={section.durationStr} 
                index={index} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
