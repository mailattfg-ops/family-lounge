"use client";

import { useEffect } from "react";

export default function SupabaseKeepAlive() {
  useEffect(() => {
    const triggerPing = async () => {
      try {
        const lastPing = localStorage.getItem("supabase-last-ping");
        const now = new Date().getTime();
        const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

        // If no previous ping or it's been more than 24 hours, ping again
        if (!lastPing || now - parseInt(lastPing) > oneDay) {
          const res = await fetch("/api/keep-alive");
          if (res.ok) {
            localStorage.setItem("supabase-last-ping", now.toString());
            console.log("Supabase keep-alive ping successful");
          }
        }
      } catch (error) {
        console.error("Failed to trigger keep-alive ping:", error);
      }
    };

    triggerPing();
  }, []);

  return null; // This component doesn't render anything
}
