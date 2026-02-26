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
        <footer className={`${isAdminRoute ? "hidden" : ""} w-full  bg-[#f6f6f6] text-black px-2 md:px-10 reveal 
              opacity-0 translate-y-20 
              transition-all duration-900  delay-300
              ease-[cubic-bezier(0.16,1,0.3,1)]`}>
            <div className="w-full px-6 pt-14 pb-7 grid md:flex gap-10 justify-between">

                {/* Brand Section */}
                <div>
                    <Image
                        src="/logo-dark.png"
                        alt="banner"
                        width={1444}
                        height={800} // use original image ratio
                        priority
                        className="w-[440px] h-[197.70404052734375px] object-contain"
                    />
                </div>

                <div className="w-full flex items-start justify-between md:justify-end gap-6 md:gap-12 lg:gap-20 md:px-20 Inter-re-font">

                    {/* Contact */}
                    <div className="w-[170px] md:w-[250px] grid">
                        <h3 className="text-lg font-semibold mb-2">Address</h3>
                        <ul className="w-[170px] md:w-[250px] space-y-2  text-[#373737] text-sm mb-2">
                            <li>Office 210, Al Serkal Avenue, Al Quoz Industrial Area 1, Dubai, United Arab Emirates</li>
                        </ul>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <ul className="space-y-2  text-[#373737] text-sm mb-2">
                            <li>+91 628 2057 622</li>
                            <li>+91 949 5388 624</li>
                        </ul>
                        <div className="flex gap-2 pt-2">
                            <Link href={'https://www.facebook.com/share/1CGAestnU7/'} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </Link>
                            <Link href={'https://www.instagram.com/beauty_world.kulanada?utm_source=qr&igsh=NjAzcHp3b29pc2tr'} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </Link>
                        </div>
                    </div>
                    {/* Services */}
                    <div className="w-fit grid">
                        <h3 className="text-lg font-semibold mb-2 md:mb-4">Service</h3>
                        <h3 className="text-lg font-semibold mb-2 md:mb-4">Gallery</h3>
                        <h3 className="text-lg font-semibold mb-2 md:mb-4">Courses</h3>
                        <h3 className="text-lg font-semibold mb-2 md:mb-4">Contact</h3>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            {/* <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} BeautyWorld. All rights reserved.
            </div> */}
        </footer>
    );
}