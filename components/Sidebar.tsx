'use client';
import { signOut } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";

const navigation = [
    { name: "Dashboard", href: "/dashboard"},
    { name: "Settings", href: "" },
];

const navbarItemStyle = "rounded-lg text-sm flex items-center px-4 py-3 text-white hover:bg-slate-800 transition duration-300 ease-in-out"
const activeNavbarItemStyle = "bg-slate-800 rounded-lg text-sm flex items-center px-4 py-3 text-white";
export default function Sidebar(){
  const path = usePathname();
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
  <div className = "sticky top-0 w-[250px] min-w-[250px] border-r border-slate-800 min-h-screen flex flex-col p-4 bg-slate-950 gap-1">
    <a href={"/"} className="flex items-center gap-1 pb-4 ">
      <span className="krona_one text-sgreen text-xl">SuperPot</span>
    </a>
    {navigation.map((item) => (
      <a
      key={item.name}
      href={item.href}
      className= {`${path == item.href ? activeNavbarItemStyle : navbarItemStyle} cursor-pointer`}
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
