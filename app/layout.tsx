/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { Inter, Krona_One } from "next/font/google";
import "./globals.css";
import SessionProvider from "../components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });
const kronaOne = Krona_One({
  subsets: ["latin"], 
  weight: ["400"],
  variable: "--font-krona-one"
});

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
      <body className={`${inter.className} ${kronaOne.variable} bg-slate-950`}>
        <SessionProvider>{children}</SessionProvider>
        </body>
    </html>
  );
}
