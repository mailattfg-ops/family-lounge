"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [hideLogo, setHideLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideLogo(window.scrollY > 50); // hide after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  const linkClass = (path: string) =>
    `relative px-2 py-1 transition ${pathname === path
      ? "text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:content-['']"
      : "text-[#929292] hover:text-black"
    }`;
  const isAdminRoute = pathname === "/admin" || pathname === "/admin/login" || pathname === "/admin/gallery";

  return (
    <nav className={`${isAdminRoute ? "hidden" : ""} sticky h-0 top-0 z-50 bg-[#f6f6f6]`}>
      {/* <nav className="relative h-0 top-0 z-50 bg-[#f6f6f6]"> */}
      <div className="max-w-[1250px] mx-auto flex justify-center pt-2 items-center">
        <div className="w-fit grid gap-2 flex justify-center">
          <div
            className={`flex justify-center transition-all duration-500 overflow-hidden ${hideLogo ? "h-0 opacity-0" : "h-auto opacity-100"
              }`}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={207}
              height={60}
              priority
              className="w-[180px] md:w-[212px] h-auto object-contain"
            />
          </div>
          <ul className="w-fit space-y-2 flex justify-center gap-0 md:gap-4 bg-[#3e3e3e] text-[#686868] rounded-lg items-center text-[12px] md:text-[19.12px] lg:text-[19.12px] CalSans-re-font px-2 py-2 md:px-4 md:py-3">
            <li className="m-0">
              <Link href="/" className={linkClass("/home")}>
                Home
              </Link>
            </li>
            <li className="m-0">
              <Link href="/service" className={linkClass("/service")}>
                Service
              </Link>
            </li>
            <li className="m-0">
              <Link href="/gallery" className={linkClass("/gallery")}>
                Gallery
              </Link>
            </li>
            <li className="m-0">
              <Link href="/contact" className={linkClass("/contact")}>
                Contact
              </Link>
            </li>
            <li>
              <button
                // onClick={onClick}
                className={`w-max px-4 py-2 md:px-6 md:py-3 rounded-lg text-black bg-white`}
              >
                <Link href="/courses">
                  Apply for Classes
                </Link>

              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}