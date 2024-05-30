import React from "react";
import AuthButton from "./AuthButton";

export default function Navbar({ hasLogin }: { hasLogin: boolean }) {
  const navBarFont =
    "text-sm flex items-center rounded-full px-3 text-slate-900 hover:bg-green-200 hover:text-slate-900 transition duration-300 ease-in-out";

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: hasLogin ? "/dashboard" : "/login" },
    { name: "Docs", href: "/docs" },
    { name: "Product Description", href: "/view" },
  ];

  return (
    <div className="flex justify-center">
      <nav className="h-[75px] flex bg-slate-950/95 mb-12 rounded-full border-2 border-slate-900/80 shadow-component px-6 py-2 max-w-6xl w-full items-center">
        <a href={"/"} className="flex items-center gap-1 mr-5">
          {/* <img src="/img/superpot-logo.png" alt="Logo" className="w-10 h-10" /> */}
          <span className="krona_one text-sgreen">SuperPot</span>
        </a>
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="h-[36px] text-sm flex items-center rounded-full px-3 text-white hover:bg-slate-800 transition duration-300 ease-in-out"
          >
            {item.name}
          </a>
        ))}
        <AuthButton hasLogin={hasLogin} />
      </nav>
    </div>
  );
}
