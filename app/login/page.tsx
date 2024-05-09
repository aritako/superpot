"use server";
import React, { FormEvent } from "react";
import LoginForm from "./form";
import Navbar from "@/components/Navbar";

export default async function Login() {
  return (
    <section className="flex-grow lg:p-12 sm:p-6 p-6 bg-gradient-to-b from-green-200 to-green-50">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="flex flex-col items-center my-14">
        <img
          src="/img/logo_green.png"
          alt="Logo"
          className="w-1/6 mt-[-30px]"
        />
        <h1 className="text-2xl mt-[-30px]">Welcome Back! 🌱</h1>
        <h1 className="text-large mb-[-25px]">
          Please login to access the dashboard controls
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <LoginForm />
      </div>
    </section>
  );
}
