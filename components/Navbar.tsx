import React from "react";
import { signOut } from "next-auth/react";  
import AuthButton from "./AuthButton";

export default function Navbar({ hasLogin }: { hasLogin: boolean }) {
  const navBarFont =
    "text-sm flex items-center rounded-full px-3 text-slate-900 hover:bg-green-200 hover:text-slate-900 transition duration-300 ease-in-out";

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: hasLogin ? "/dashboard" : "/login" },
    { name: "Docs", href: "/docs" },
  ];

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      signOut();
    }
  };

  return (
    <div className="flex justify-center">
      <nav className="flex sticky top-0 bg-green-100/80 mb-12 rounded-full shadow-md border-2 border-green-300 px-6 py-2 max-w-6xl w-full">
        <a href={"/"} className="flex items-center gap-1 mr-5">
          <img src="/img/superpot-logo.png" alt="Logo" className="w-10 h-10" />
          <span className="krona_one text-green-600">SuperPot</span>
        </a>
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className={navBarFont}>
            {item.name}
          </a>
        ))}
        <AuthButton />
      </nav>
    </div>
  );
}
