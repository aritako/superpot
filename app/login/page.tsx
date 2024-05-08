"use server";
import React, { FormEvent } from "react";
import Form from "./form";
import Navbar from "@/components/Navbar";

async function Login() {
  return (
    <section className="flex-grow lg:p-12 sm:p-6 p-6 bg-gradient-to-b from-green-200 to-green-50">
      <Navbar />
      <div className="flex flex-col items-center gap-2 my-14">
        <img
          src="/img/logo_green.png"
          alt="Logo"
          className="w-1/6 mt-[-55px] mb-[-35px]"
        />
        <h1 className="text-2xl mb-[-35px]">Welcome Back! 🌱</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Form />
      </div>
    </section>
  );
}

export default Login;
