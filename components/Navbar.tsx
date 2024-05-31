"use client";
import React, { useEffect, useState } from "react";
import AuthButton from "./AuthButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getSession, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { LuMenu, LuX } from "react-icons/lu";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const toggleMenu = () => setIsOpen(prevState => !prevState);
  const navBarFont =
    "text-sm flex items-center rounded-full px-3 text-slate-900 hover:bg-green-200 hover:text-slate-900 transition duration-300 ease-in-out";

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard"},
    { name: "Docs", href: "/docs" },
    { name: "Product", href: "/view" },
  ];
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (windowWidth >= 768 && isOpen) {
    setIsOpen(false);
  }
  return (
    <div className="flex justify-center">
      <nav className="h-[75px] flex justify-between bg-slate-950/95 mb-12 rounded-full border-2 border-slate-900/80 shadow-component px-6 py-2 max-w-6xl w-full items-center">
        <div className="flex">
          <a href={"/"} className="flex items-center gap-1 mr-5">
            <span className="krona_one text-sgreen">SuperPot</span>
          </a>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hidden md:flex h-[36px] text-sm items-center rounded-full px-3 text-white hover:bg-slate-800 transition duration-300 ease-in-out"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex gap-1">
          <button className="md:hidden flex items-center text-white" onClick={toggleMenu}>
            <LuMenu size={24} />
          </button>
          <div className="hidden md:flex gap-1">
            <AuthButton session={session}/>
            {!session && (
              <Button className="bg-sgreen rounded-full h-[36px] px-3 text-slate-950 hover:text-white hover:bg-[#3d6a2a] transition ease-in-out duration-300">
                <Link href="/register">Sign Up</Link>
              </Button>
            )}
          </div>
        </div>
      </nav>

      <div className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 bg-black bg-opacity-75 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed top-0 left-0 w-3/4 h-full bg-slate-950 p-5 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <button
            className="flex items-center mb-5 text-white"
            onClick={toggleMenu}
          >
            <LuX size={24} />
          </button>
          <div className="flex flex-col gap-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="h-[36px] text-sm flex items-center rounded-lg px-3 text-white hover:bg-slate-800 transition duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
            <AuthButton session={session} className = "mt-8 bg-slate-700 rounded-lg flex justify-center"/>
            {!session && (
              <Button className="bg-sgreen rounded-lg h-[36px] px-3 text-slate-950 hover:text-white hover:bg-[#3d6a2a] transition ease-in-out duration-300">
                <Link href="/register">Sign Up</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
