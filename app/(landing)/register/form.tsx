"use client";
import { FormEvent, useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type registerFormData = {
  email: string;
  password: string;
  repassword: string;
};

export default function RegisterForm() {
  const { data: session } = useSession();
  if (session) {
    redirect("/");
  }

  const router = useRouter();
  const [formData, setFormData] = useState<registerFormData>({
    email: "",
    password: "",
    repassword: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.repassword) {
      setError("Passwords do not match");
      // } else if {
    } else {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          router.push(`/login`);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setError("Email already in use");
          } else if (error.code === "auth/invalid-email") {
            setError("Invalid email");
          } else if (error.code === "auth/weak-password") {
            setError("Weak password");
          } else {
            setError("Invalid action");
          }
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          className="border-0 shadow appearance-none border rounded-lg text-sm w-full py-2 px-3 text-gray-400 leading-tight bg-slate-900 transition ease-in-out duration-300"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <input
          className="border-0 shadow appearance-none border rounded-lg text-sm w-full py-2 px-3 text-gray-400 leading-tight bg-slate-900 transition ease-in-out duration-300"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <input
          className="border-0 shadow appearance-none border rounded-lg text-sm w-full py-2 px-3 text-gray-400 leading-tight bg-slate-900 transition ease-in-out duration-300"
          type="password"
          placeholder="Confirm Password"
          name="repassword"
          value={formData.repassword}
          onChange={handleChange}
        />
      </div>

      <div style={{ minHeight: "20px" }}>
        {error && (
          <p className="flex justify-center text-red-500 text-xs ">{error}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          type="submit"
          className="w-full border-0 bg-sgreen text-slate-950 hover:text-white hover:bg-sdgreen transition ease-in-out duration-300 rounded-lg"
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
}
