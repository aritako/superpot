/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Pot",
  description: "A Smart Greenhouse Enclosure for Your Plants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-50`}>{children}</body>
    </html>
  );
}
