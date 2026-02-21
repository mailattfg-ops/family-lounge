// "use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full  bg-[#f6f6f6] text-black px-2 md:px-10">
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

                <div className="w-full flex items-start md:justify-end gap-6 md:gap-12 lg:gap-20 md:px-20 Inter-re-font">
                    
                    {/* Contact */}
                    <div className="w-[170px] md:w-[250px] grid">
                        <h3 className="text-lg font-semibold mb-2">Address</h3>
                        <ul className="w-[170px] md:w-[250px] space-y-2  text-[#373737] text-sm mb-2">
                            <li>Office 210, Al Serkal Avenue, Al Quoz Industrial Area 1, Dubai, United Arab Emirates</li>
                        </ul>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <ul className="space-y-2  text-[#373737] text-sm mb-2">
                            <li>+971 4 123 4567</li>
                        </ul>
                    </div>
                    {/* Services */}
                    <div className="w-fit grid text-[#373737]">
                        <h3 className="text-lg font-semibold mb-2 md:mb-4">About</h3>
                        <h3 className="text-lg font-semibold mb-2 md:mb-4">Packages</h3>
                        <h3 className="text-lg font-semibold mb-2 md:mb-4">Blog</h3>
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