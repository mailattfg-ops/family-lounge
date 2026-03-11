import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "../components/LayoutWrapper";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "../components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beauty World Family Lounge | Professional Salon & Beautician Courses",
  description: "Unlock your potential with professional beautician courses and premium beauty services at Beauty World Family Lounge located in Kulanada, Pathanamthitta, Kerala.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <LayoutWrapper>
          <Toaster position="top-center" />
          {children}
          <WhatsAppButton />
        </LayoutWrapper>
      </body>
    </html>
  );
}