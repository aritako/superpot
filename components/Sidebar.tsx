'use client';
const navigation = [
    { name: "Dashboard", href: "/dashboard"},
    { name: "Logout", href: "/docs" },
];
export default function Sidebar(){

    return (
    <div className = "w-[300px] min-w-[300px] border-r border-slate-800 min-h-screen flex flex-col">
        <a href={"/"} className="flex items-center gap-1 p-3">
        {/* <img src="/img/superpot-logo.png" alt="Logo" className="w-10 h-10" /> */}
            <span className="krona_one text-sgreen">SuperPot</span>
        </a>
        {navigation.map((item) => (
            <a
            key={item.name}
            href={item.href}
            className="border border-x-0 border-slate-800 text-sm flex items-center px-4 py-3 text-white hover:bg-slate-800 transition duration-300 ease-in-out"
            >
            {item.name}
            </a>
        ))}
    </div>
    )
}
