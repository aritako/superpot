import React from "react";

function Navbar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/login" },
    { name: "Docs", href: "/docs" },
  ];
  return (
    <div className="flex justify-center">
      <nav className="flex sticky top-0 bg-green-100/80 mb-12 rounded-full shadow-md border-2 border-green-300 px-6 py-2 max-w-6xl w-full">
        <a href={"/"} className="flex items-center gap-1 mr-5">
          <img src="/img/superpot-logo.png" alt="Logo" className="w-10 h-10" />
          <span className="krona_one text-green-600">SuperPot</span>
        </a>
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm flex items-center rounded-full px-3 text-slate-900 hover:bg-green-200 hover:text-slate-900 transition duration-300 ease-in-out"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
