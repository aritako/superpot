"use server";
import React, { FormEvent } from "react";
import RegisterForm from "./form";
import Navbar from "@/components/Navbar";

async function Register() {
  return (
    <section className="flex-grow lg:p-12 sm:p-6 p-6 bg-gradient-to-b from-green-200 to-green-50">
      <Navbar />
      <div className="flex flex-col items-center my-14">
        <img
          src="/img/logo_green.png"
          alt="Logo"
          className="w-1/6 mt-[-30px]"
        />
        <h1 className="text-2xl mt-[-25px] mb-[-30px]">
          Welcome to Super Pot! 🌱
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <RegisterForm />
      </div>
    </section>
  );
}

export default Register;
