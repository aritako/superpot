'use client';

import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const navigation = [
    { name: "Dashboard", href: "/dashboard"},
    { name: "Settings", href: "/dashboard" },
];

const navbarItemStyle = "rounded-lg text-sm flex items-center px-4 py-3 text-white hover:bg-slate-800 transition duration-300 ease-in-out"

export default function Sidebar(){
  const handleLogout = () => {
    const doLogout = async () => {
      if (confirm("Are you sure you want to logout?")) {
          await signOut();
          redirect("/")
      }
    }
    doLogout();
  }
  return (
  <div className = "sticky top-0 w-[250px] min-w-[250px] border-r border-slate-800 min-h-screen flex flex-col p-4 bg-slate-950">
    <a href={"/"} className="flex items-center gap-1 pb-4 ">
    {/* <img src="/img/superpot-logo.png" alt="Logo" className="w-10 h-10" /> */}
        <span className="krona_one text-sgreen text-xl">SuperPot</span>
    </a>
    {navigation.map((item) => (
      <a
      key={item.name}
      href={item.href}
      className= {navbarItemStyle}
      >
      {item.name}
      </a>
    ))}
    <a onClick = {handleLogout} className= {navbarItemStyle + ' cursor-pointer'}>
      Logout
    </a>
  </div>
  )
}
