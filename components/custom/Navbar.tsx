import React from "react";

function Navbar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Docs", href: "docs" },
  ];
  return (
    <nav className="sticky top-0 bg-green-100/80 p-4 mb-12 rounded-full shadow-md border-2 border-green-300 px-12 max-w-7xl w-full">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="rounded-lg px-5 py-2 text-slate-900 font-medium hover:bg-green-200 hover:text-slate-900"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
