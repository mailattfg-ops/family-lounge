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
                <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Image
                        src="/logo.png"
                        alt="BeautyWorld Logo"
                        width={1444}
                        height={800} // use original image ratio
                        priority
                        className="w-full max-w-[280px] md:max-w-[360px] h-auto object-contain"
                    />
                    <p className="mt-2 text-[#4a4a4a] text-sm leading-relaxed max-w-[280px] md:max-w-[360px]">
                        Unlock your potential with our professional beautician courses. Gain hands-on experience and expert guidance to build a successful career in the beauty industry.
                    </p>
                </div>

                {/* Right side content */}
                <div className="w-full lg:w-2/3 flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-end gap-12 md:gap-12 lg:gap-16 Inter-re-font text-center sm:text-left">

                    {/* Contact */}
                    <div className="flex flex-col items-center sm:items-start max-w-[300px]">
                        <h3 className="text-lg font-bold mb-3 text-gray-900">Address</h3>
                        <p className="text-[#4a4a4a] text-sm mb-5 leading-relaxed">
                            Beauty World Family Lounge, <br />
                            Krishnathulasi Arcade, <br />
                            MC Road , Kulanada Junction, <br />
                            Pathanamthitta, <br />
                            Kerala – 689503, India
                        </p>
                        
                        <h3 className="text-lg font-bold mb-3 text-gray-900">Phone</h3>
                        <ul className="space-y-1 text-[#4a4a4a] text-sm mb-6">
                            <li>+91 949 5388 624</li>
                            <li>+91 628 2057 622</li>
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

                    {/* Map */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-lg font-bold mb-5 text-gray-900">Find Us Here</h3>
                        <div className="w-full flex justify-center sm:justify-start">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d246.12643829013797!2d76.67224463671388!3d9.242239759497537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1772424883998!5m2!1sen!2sin" 
                                width="100%" 
                                height="200" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl shadow-md w-[280px] md:w-[250px] lg:w-[280px]"
                            ></iframe>
                        </div>
                    </div>
                </div>

            </div>

            {/* Copyright & Branding Footer Bottom */}
            <div className="max-w-7xl mx-auto w-full px-6 md:px-10 mt-12 pt-6 border-t border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#4a4a4a] text-center md:text-left gap-4">
                    <p>© 2026 Beauty World Family Lounge. All Rights Reserved.</p>
                    <p>Designed by <Link href="https://www.thinkforgeglobal.com/" target="_blank" className="font-semibold text-gray-900 hover:underline">Think Forge Global LLP</Link></p>
                </div>
            </div>
        </footer>
    );
}