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
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 backdrop-blur-md bg-black/20 border-b border-white/20">
          <Link href="/" className="text-xl font-bold text-white">
            FileConverter
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent"
            >
              Home
            </Link>
            <Link 
              href="/converters" 
              className="text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent"
            >
              Converters
            </Link>
            <Link 
              href="/contact" 
              className="text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent"
            >
              Contact Us
            </Link>
            <Link 
              href="/about" 
              className="text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent"
            >
              About Us
            </Link>
          </div>

          {/* Sign Up Button */}
          <Link 
            href="/signup" 
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Sign Up
          </Link>
        </nav>
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
