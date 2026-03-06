"use client";

import { redirect } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", form);
    if (form.email === "admin" && form.password === "pass@1234567890") {
        Cookies.set("adminAuth", "true", { expires: 1 }); // 1 day
        router.push("/admin/gallery");
    } else {
      alert("Invalid credentials. Please try again.");
    }
    // call your API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 font-sans relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white relative z-10">
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-tr from-pink-500 to-violet-500 text-white p-3 rounded-2xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8 text-sm">Please sign in to access your dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-gray-700 block text-sm font-medium">
              User ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-50/50 border border-gray-200 text-gray-800 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all text-sm"
                placeholder="Enter your user ID"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-gray-700 block text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full bg-gray-50/50 border border-gray-200 text-gray-800 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-medium py-3 px-4 rounded-xl shadow-lg transform hover:scale-[1.02] active:scale-[0.98] transition-all flex justify-center items-center gap-2 mt-2"
          >
            Sign In
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </form>
      </div>
    </div>
  );
}