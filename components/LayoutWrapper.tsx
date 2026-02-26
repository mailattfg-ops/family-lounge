"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // optional 3 sec delay AFTER everything loads
      setTimeout(() => {
        setPageLoaded(true);
      }, 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {pageLoaded && <Footer />}
    </div>
  );
}