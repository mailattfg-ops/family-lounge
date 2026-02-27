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

// "use client";
// import Image from "next/image"; 
// import AboutUs from "./aboutUs";
// import { useEffect, useState } from "react";
// import Contact from "./contact";

// const originalBanners = [
//   "/banner/1.jpg",
//   "/banner/2.jpg",
//   "/banner/3.jpg"
// ];

// export default function Home() {
//   const [images, setImages] = useState(originalBanners);
//   const [fade, setFade] = useState(false);

//   useEffect(() => {
//     const elements = document.querySelectorAll(".reveal");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.remove("opacity-0", "translate-y-20");
//             entry.target.classList.add("opacity-100", "translate-y-0");
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   // Carousel fade-swap effect
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setFade(true); // Start fading out
      
//       setTimeout(() => {
//         setImages((prev) => {
//           const next = [...prev];
//           const first = next.shift();
//           if (first) next.push(first);
//           return next;
//         });
//         setFade(false); // Fade back in
//       }, 400); // After brief fade, swap source

//     }, 3500); // 3.5s per banner

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flex min-h-screen items-center justify-center font-sans bg-[#f6f6f6]">
//       <main className="flex min-h-screen w-full flex-col px-0 sm:items-start gap-6">
//         <div className="relative w-full grid place-items-center text-center gap-10 pt-35 md:pt-4">
//           <div className="relative z-10 w-full grid gap-0 pt-10 md:pt-65">
//             <p className="theme-text text-[14.85px] md:text-[19px] lg:text-[24px] reveal 
//               opacity-0 translate-y-20 
//               transition-all duration-900  delay-100
//               ease-[cubic-bezier(0.16,1,0.3,1)]">Redefining how</p>
//             <p className="theme-text text-[38px] md:text-[56px] lg:text-[69px] font-350 font-Serif leading-[0.89] pb-2
//               reveal 
//               opacity-0 translate-y-20 
//               transition-all duration-900  delay-200
//               ease-[cubic-bezier(0.16,1,0.3,1)]">
//               We are Elevating Family Experiences
//             </p>
//             <p className="theme-text text-[14.85px] md:text-[19px] lg:text-[24px] 
//               reveal 
//               opacity-0 translate-y-20 
//               transition-all duration-900  delay-300
//               ease-[cubic-bezier(0.16,1,0.3,1)]">All your needs in one single amazing place</p>
//           </div>
//           <div className="absolute z-9 top-0 left-0 w-ffit flex items-center justify-center overflow-hidden ">
//             <Image
//               src="/banner/bann-l.jpg"
//               alt="banner"
//               width={327}
//               height={400}
//               priority
//               className="scale-x-[-1] leaf-left w-[110px] md:w-[250px] lg:w-[327px] h-[200px] md:h-[310px] lg:h-[400px]"
//             />
//           </div>
//           <div className="absolute z-9 top-0 right-0 w-ffit flex items-center justify-center overflow-hidden">
//             <Image
//               src="/banner/bann-r.jpg"
//               alt="banner"
//               width={327}
//               height={400}
//               priority
//               className="leaf-right w-[110px] md:w-[250px] lg:w-[327px] h-[200px] md:h-[310px] lg:h-[400px]"
//             />
//           </div>
//         </div>

//         <div className="w-full flex items-center justify-center overflow-hidden gap-6 md:pt-10 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
//           {images.map((src, index) => (
//             <Image
//               key={index} // Using index as key so element stays structurally the same, just swaps src
//               src={src}
//               alt="banner"
//               width={694}
//               height={572}
//               priority
//               className={`w-[300px] md:w-[500px] lg:w-[694px] h-[258px] md:h-[358px] lg:h-[572px] transition-opacity duration-500 ease-in-out ${fade ? 'opacity-40' : 'opacity-100'}`}
//             />
//           ))}
//         </div>
//         <AboutUs />
//         <Contact />
//       </main>
//     </div>
//   );
// }

