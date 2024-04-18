import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/Star";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Serhat Kılıç | Software Developer",
  description: "Frontend web developer portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#010b19] w-full h-auto inset-0 overflow-x-hidden`}>
        
        <Navbar />
        <SocialLinks />
        {children}
        <Footer />
      </body>
    </html>
  );
}
