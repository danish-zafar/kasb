"use client";

import Link from "next/link";
import { PlusCircle, Search, Grid } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          
          {/* EXACT NAVBAR LOGO DIMENSIONS */}
          <Link href="/" className="flex items-center py-2 shrink-0">
            <img
              src="/logo.png"
              alt="KasbMarkaz Logo"
              className="h-20 sm:h-24 w-auto object-contain transition-transform duration-200 hover:scale-105"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700">
            <Link 
              href="/listings" 
              className="flex items-center gap-2 hover:text-[#058A39] transition duration-200"
            >
              <Search className="w-4.5 h-4.5 text-[#058A39]" />
              <span>Explore Listings</span>
            </Link>
            <Link 
              href="/categories" 
              className="flex items-center gap-2 hover:text-[#058A39] transition duration-200"
            >
              <Grid className="w-4.5 h-4.5 text-[#058A39]" />
              <span>Categories</span>
            </Link>
          </nav>

          {/* Post Business Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/add-listing"
              className="btn-primary font-bold px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 text-sm transition duration-200 active:scale-95"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Add Business</span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}