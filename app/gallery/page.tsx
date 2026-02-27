"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Contact from "../home/contact";
import { createClient } from "@supabase/supabase-js";

export default function Home() {
  const [gallery, setGallery] = useState<any[]>([]);
  const [mainVideo, setMainVideo] = useState<any | null>(null);
  
  const [loadingVideo, setLoadingVideo] = useState(true);
  const [loadingImages, setLoadingImages] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const ITEMS_PER_PAGE = 8;
  const loaderRef = useRef<HTMLDivElement>(null);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
  );

  const fetchVideo = async () => {
    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .eq("alt", "MAIN_SITE_VIDEO")
      .limit(1);

    if (!error && data && data.length > 0) {
      setMainVideo(data[0]);
    }
    setLoadingVideo(false);
  };

  const fetchImages = async (currentPage: number) => {
    setLoadingImages(true);
    const from = currentPage * ITEMS_PER_PAGE;
    const to = from + ITEMS_PER_PAGE - 1;

    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .neq("alt", "MAIN_SITE_VIDEO")
      .order("id", { ascending: false })
      .range(from, to);

    if (!error && data) {
      if (data.length < ITEMS_PER_PAGE) {
        setHasMore(false);
      }
      setGallery((prev) => (currentPage === 0 ? data : [...prev, ...data]));
      setPage(currentPage + 1);
    }
    setLoadingImages(false);
  };

  // Initial load
  useEffect(() => {
    fetchVideo().then(() => {
      fetchImages(0);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loadingImages && hasMore && !loadingVideo) {
          fetchImages(page);
        }
      },
      { threshold: 0.1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [page, loadingImages, hasMore, loadingVideo]);

  // Reveal animation observer
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
  }, [gallery, mainVideo]);

  return loadingVideo ? (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#f6f6f6] pt-[150px] md:pt-[170px]">
      <main className="flex min-h-screen w-full flex-col px-0 py-[20px] md:py-[60px] sm:items-start">
        <div className="w-full px-4 text-center">
          {/* Main Video Skeleton */}
          <div className="max-w-[1200px] mx-auto h-[400px] md:h-[600px] rounded-[20px] bg-gray-200 animate-pulse mb-6" />
          {/* Images Skeleton */}
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-[257px] h-[320px] rounded-[20px] bg-gray-200 animate-pulse"
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
          <div className="md:w-full grid items-center justify-center gap-6 px-4 md:px-8">
            
            {/* Highlighted Video Section */}
            {mainVideo && (
              <div className="w-full max-w-[1200px] mx-auto rounded-[20px] overflow-hidden shadow-lg reveal opacity-0 translate-y-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] bg-black mb-6">
                <video 
                    src={mainVideo.image_url} 
                    controls 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto max-h-[700px] object-cover"
                />
              </div>
            )}

            <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center">
              {gallery.map((item, index) => (
                <div
                  key={item.id || index}
                  className={`relative w-[257px] h-[320px] flex justify-center mx-auto rounded-[20px] overflow-hidden reveal opacity-0 translate-y-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                >
                  <Image
                    src={item.image_url || ""}
                    alt={item.alt || ""}
                    width={257}
                    height={320}
                    className="w-full h-full object-cover object-center"
                    priority={index < 4} // prioritize loading first 4 images 
                  />
                </div>
              ))}
            </div>

            {/* Scroll Loader / Infinite Scroll Observer Trigger */}
            <div ref={loaderRef} className="w-full h-20 flex items-center justify-center mt-4">
              {loadingImages && (
                <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
              )}
            </div>

          </div>
        </div>
        <Contact />
      </main>
    </div>
  );
}
