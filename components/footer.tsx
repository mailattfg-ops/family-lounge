"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Footer() {
    const pathname = usePathname();
    const isAdminRoute = pathname === "/admin" || pathname === "/admin/login" || pathname === "/admin/gallery";
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
        <footer className={`${isAdminRoute ? "hidden" : ""} w-full bg-[#f6f6f6] text-black pt-10 pb-12 reveal 
              opacity-0 translate-y-20 
              transition-all duration-900 delay-300 overflow-hidden
              ease-[cubic-bezier(0.16,1,0.3,1)]`}>
            <div className="max-w-7xl mx-auto w-full px-6 md:px-10 flex flex-col lg:flex-row gap-12 lg:gap-10 justify-between items-center lg:items-start">

                {/* Brand Section */}
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                    <Image
                        src="/logo-dark.png"
                        alt="BeautyWorld Logo"
                        width={1444}
                        height={800} // use original image ratio
                        priority
                        className="w-full max-w-[280px] md:max-w-[360px] h-auto object-contain"
                    />
                </div>

                {/* Right side content */}
                <div className="w-full lg:w-2/3 flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-end gap-12 md:gap-16 lg:gap-24 Inter-re-font text-center sm:text-left">

                    {/* Contact */}
                    <div className="flex flex-col items-center sm:items-start max-w-[300px]">
                        <h3 className="text-lg font-bold mb-3 text-gray-900">Address</h3>
                        <p className="text-[#4a4a4a] text-sm mb-5 leading-relaxed">
                            Office 210, Al Serkal Avenue, Al Quoz Industrial Area 1, Dubai, United Arab Emirates
                        </p>
                        
                        <h3 className="text-lg font-bold mb-3 text-gray-900">Phone</h3>
                        <ul className="space-y-1 text-[#4a4a4a] text-sm mb-6">
                            <li>+91 628 2057 622</li>
                            <li>+91 949 5388 624</li>
                        </ul>
                        
                        <div className="flex gap-4">
                            <Link href={'https://www.facebook.com/share/1CGAestnU7/'} target="_blank" className="p-2.5 bg-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </Link>
                            <Link href={'https://www.instagram.com/beauty_world.kulanada?utm_source=qr&igsh=NjAzcHp3b29pc2tr'} target="_blank" className="p-2.5 bg-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Services & Quick Links */}
                    <div className="flex flex-col items-center sm:items-start group">
                        <h3 className="text-lg font-bold mb-5 text-gray-900">Quick Links</h3>
                        <div className="flex flex-col gap-4">
                            <Link href="/service" className="text-sm font-medium text-[#4a4a4a] hover:text-black transition-colors cursor-pointer">Service</Link>
                            <Link href="/gallery" className="text-sm font-medium text-[#4a4a4a] hover:text-black transition-colors cursor-pointer">Gallery</Link>
                            <Link href="/courses" className="text-sm font-medium text-[#4a4a4a] hover:text-black transition-colors cursor-pointer">Courses</Link>
                            <Link href="/contact" className="text-sm font-medium text-[#4a4a4a] hover:text-black transition-colors cursor-pointer">Contact</Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}