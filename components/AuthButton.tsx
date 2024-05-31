import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export default function AuthButton({ session, className }: { session: Session | null, className ?: string}) {
  const navBarFont =
    "h-[36px] text-sm flex items-center rounded-full px-3 text-white hover:bg-slate-800 transition duration-300 ease-in-out";

  const handleLogout = async () => {
    if (confirm("Are you sure you want to logout?")) {
      await signOut();
    }
  };

  return session ? (
    <button className={navBarFont + ` ${className}`} onClick={handleLogout}>
      Logout
    </button>
  ) : (
    <a className={navBarFont + ` ${className}`} href="/login">
      {" "}
      Login
    </a>
  );
}
