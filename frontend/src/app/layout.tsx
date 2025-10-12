import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "File Converter - Convert Files Easily",
  description: "Convert your files to various formats with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 backdrop-blur-md bg-white/10 border-b border-white/20">
          <Link href="/" className="text-xl font-bold text-white">
            FileConverter
          </Link>
          <Link 
            href="/signup" 
            className="relative px-6 py-2 text-white font-medium rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient-x group-hover:animate-gradient-faster"></div>
            {/* Button content */}
            <span className="relative z-10">Sign Up</span>
          </Link>
        </nav>
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
