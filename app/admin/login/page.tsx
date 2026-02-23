"use client";

import { redirect } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [form, setForm] = useState({
    email: "admin",
    password: "password",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", form);
    if (form.email === "admin" && form.password === "password") {
      if (form.email === "admin" && form.password === "password") {
        Cookies.set("adminAuth", "true", { expires: 1 }); // 1 day
        router.push("/admin/gallery");
      }
    } else {
      alert("Invalid credentials. Please try again.");
    }
    // call your API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-black text-2xl font-semibold text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-black block text-sm font-medium mb-1">
              User Address
            </label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="text-black w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-black block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="text-black w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot password */}
          {/* <div className="text-right">
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Forgot Password?
            </a>
          </div> */}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Signup link */}
        {/* <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-black font-medium hover:underline">
            Sign up
          </a>
        </p> */}
      </div>
    </div>
  );
}