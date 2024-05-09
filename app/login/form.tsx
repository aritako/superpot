"use client";
import { FormEvent, useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type loginFormData = {
  email: string;
  password: string;
};

export default function Form() {
  const [formData, setFormData] = useState<loginFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const { data: session } = useSession();
  if (session) {
    redirect("/dashboard");
  }

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
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto">
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="shadow appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="w-full bg-green-500 rounded mt-3"
        >
          Sign In
        </Button>
      </div>
      <div className="mt-3">
        Don't have an account yet?{" "}
        <Link
          href="/register"
          className="text-green-500 hover:text-green-800 underline"
        >
          Create Account
        </Link>
      </div>
    </form>
  );
}
