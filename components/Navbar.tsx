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
  const isAdminRouteCourses = pathname === "/courses";

  return (
    <nav className={`${isAdminRoute ? "hidden" : ""} sticky h-0 top-0 z-50 bg-[#f6f6f6]`}>
      {/* <nav className="relative h-0 top-0 z-50 bg-[#f6f6f6]"> */}
      <div className="max-w-[1250px] mx-auto flex justify-center pt-2 items-center">
        <div className="w-fit grid gap-2 flex justify-center">
          <div
            className={`flex justify-center transition-all duration-500 overflow-hidden ${hideLogo ? "h-0 opacity-0" : "h-auto opacity-100"
              }`}
          >
            <Link href="/" className="relative px-2 py-1 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={212}
                height={95}
                priority
                className="w-[140px] md:w-[212px] h-auto object-contain"
              />
            </Link>

          </div>
          <ul
            className="relative w-fit flex justify-center md:gap-4 
            bg-[#3e3e3e] text-gray-200 rounded-lg items-center 
            text-[12px] md:text-[19.12px] 
            CalSans-re-font px-2 py-2 md:px-4 md:py-3
            overflow-hidden
            before:absolute before:inset-0
            before:pointer-events-none
            before:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(61,31,168,0.35),transparent_100px)]
            before:opacity-0 hover:before:opacity-100
            before:transition-opacity before:duration-300"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
              e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
            }}
          >            <li className="m-0">
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
            <li className="ml-2 md:ml-0">
              <button
              >
                <Link
                  href="/courses"
                  className={`relative z-50 inline-flex items-center justify-center
                      min-h-[35px] md:min-h-[48px] px-4 md:px-6
                      rounded-lg font-medium
                      transition-all duration-300 text-center
                      ${isAdminRouteCourses
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-900 hover:bg-neutral-900 hover:text-white border border-neutral-300"
                    }`}
                >
                  <span className="hidden md:inline">Apply for Courses</span>
                  <span className="md:hidden">Courses</span>
                </Link>
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}