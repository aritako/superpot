"use server";
import React, { FormEvent } from "react";
import RegisterForm from "./form";
import Navbar from "@/components/Navbar";
import Link from "next/link";

async function Register() {
  return (
    <main>
      <div className = "absolute -z-50 w-full h-64 bg-gradient-to-b from-sgreen/30 to-transparent"></div>
      <section className="sticky top-0 p-4">
        <Navbar  />
      </section>
      <section className = "flex justify-center space-between w-full p-4">
        <div className = "flex flex-col gap-4 px-4 w-full max-w-6xl">
          <span className = "krona_one xl:text-5xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white">
            Welcome to <span className = "text-sgreen">SuperPot.</span>
          </span>
          <span className = "text-gray-400">Already have an account?&nbsp;
            <span>        
              <Link
                href="/login"
                className="text-sgreen hover:text-sdgreen transition duration-300 ease-in-out rounded px-0.5"
              >
                Login.
              </Link>
            </span>
          </span>
          <div className = "mt-8 max-w-md">
            <RegisterForm />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;
