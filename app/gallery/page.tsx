"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Contact from "../home/contact";
import { createClient } from "@supabase/supabase-js";

export default function Home() {
  const [gallery, setGallery] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
  );

  const fetchGallery = async () => {
    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .order("id", { ascending: false });

    if (!error && data) setGallery(data);
    console.log("data", data);
    setLoading(false);
  };

  const aboutImages = [
    {
      src: "/about/4.jpg",
    },
    {
      src: "/about/3.jpg",
    },
    {
      src: "/about/2.jpg",
    },
    {
      src: "/about/1.jpg",
    },
    {
      src: "/about/4.jpg",
    },
    {
      src: "/about/3.jpg",
    },
    {
      src: "/about/2.jpg",
    },
    {
      src: "/about/1.jpg",
    },
  ];

  useEffect(() => {
    fetchGallery();
  }, []);
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
  }, [gallery]); // 👈 IMPORTANT
  return (

    loading ? (
      <div className="flex min-h-screen items-center justify-center font-sans bg-[#f6f6f6] pt-[150px] md:pt-[170px]">
        <main className="flex min-h-screen w-full flex-col px-0 py-[20px] md:py-[60px] sm:items-start">
          <div className="w-full px-4">
            <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-2 md:gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="col-span-12 md:col-span-6 lg:col-span-3 h-[320px] rounded-[20px] shimmer"
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    ) : (
      <div className="flex min-h-screen items-center justify-center font-sans bg-[#f6f6f6] pt-[150px] md:pt-[170px]">
        <main className="flex min-h-screen w-full flex-col px-0 py-[20px] md:py-[60px] sm:items-start">
          <div className="w-full grid place-items-center text-center gap-6 md:gap-10">
            <p className="CalSans-re-font theme-text text-[34.19px] text-[54.19px] md:text-[64.19px] flex items-center gap-3 font-500 reveal 
            opacity-0 translate-y-20 
            transition-all duration-900 
            ease-[cubic-bezier(0.16,1,0.3,1)]">
              Gallery
            </p>
            <div className="md:w-full grid items-center justify-center gap-6">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 justify-items-center px-8">
                {gallery.map((item, index) => (
                  <div
                    key={index}
                    className={`relative w-full h-[320px] flex justify-center rounded-[20px] overflow-hidden reveal opacity-0 translate-y-20 transition-all duration-[2000ms] delay-[${100 * index}ms] ease-[cubic-bezier(0.16,1,0.3,1)]`}
                  >
                    <Image
                      src={item.image_url || ""}
                      alt={item.alt || ""}
                      width={694}
                      height={700}
                      className="w-[257.117919921875px] h-[324.1921691894531px] object-cover"
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Contact />
        </main>
      </div>
    )
  );

}
