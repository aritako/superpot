"use client";
import { useSession, signOut } from "next-auth/react";

export default function AuthButton() {
  const navBarFont =
    "text-sm flex items-center rounded-full px-3 text-slate-900 hover:bg-green-200 hover:text-slate-900 transition duration-300 ease-in-out";
  const { data: session } = useSession();

  const handleLogout = async () => {
    if (confirm("Are you sure you want to logout?")) {
      sessionStorage.removeItem("uid");
      await signOut();
    }
  };

  return session ? (
    <button className={navBarFont} onClick={handleLogout}>
      Logout
    </button>
  ) : (
    <a className={navBarFont} href="/login">
      {" "}
      Login
    </a>
  );
}
