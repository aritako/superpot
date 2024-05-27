"use client";
import { FormEvent, useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { auth } from "../../firebase";

type loginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [formData, setFormData] = useState<loginFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();
  if (session) {
    redirect("/dashboard");
  }
  // console.log(session)
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    
    if (response?.error === "CredentialsSignin") {
      setError("Email or password is incorrect");
    } else if (response?.error === "ConfigurationError") {
      setError("Invalid action");
    } else if (response?.ok){
      redirect("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          className="border-0 shadow appearance-none border rounded-lg text-sm w-full py-2 px-3 text-gray-400 leading-tight bg-slate-900 transition ease-in-out duration-300"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-1">
        <input
          className="border-0 shadow appearance-none border rounded-lg text-sm w-full py-2 px-3 text-gray-400 leading-tight bg-slate-900 transition ease-in-out duration-300"
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div style={{ minHeight: "20px" }}>
        {error && (
          <p className="flex justify-center text-red-500 text-xs italic">
            {error}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          type="submit"
          className="w-full border-0 bg-sgreen text-slate-950 hover:text-white hover:bg-sdgreen transition ease-in-out duration-300 rounded-lg"
        >
          Sign In
        </Button>
      </div>
    </form>
  );
}
