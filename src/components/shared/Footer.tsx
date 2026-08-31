"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Building2, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1329] text-slate-300 border-t border-slate-800/80 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* FOOTER LOGO & OVERVIEW CONTAINER */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block bg-white p-3.5 rounded-2xl shadow-md border border-slate-200">
              <img
                src="/logo.png"
                alt="KasbMarkaz Logo"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              KasbMarkaz is Pakistan’s leading digital business directory connecting buyers directly with verified regional businesses, trade outlets, healthcare centers, hotels, and educational institutes.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-500/10 border border-emerald-500/20 text-[#058A39] text-xs font-semibold rounded-xl">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" /> 
              <span>100% Verified Local Directory</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-white transition flex items-center justify-between group py-1">
                  <span>Home Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition" />
                </Link>
              </li>
              <li>
                <Link href="/listings" className="hover:text-white transition flex items-center justify-between group py-1">
                  <span>Explore All Listings</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition" />
                </Link>
              </li>
              <li>
                <Link href="/add-listing" className="hover:text-white transition flex items-center justify-between group py-1">
                  <span>Post Free Business Ad</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition" />
                </Link>
              </li>
              <li>
                <Link href="/listings/soofi-saifullah-fragrances" className="hover:text-white transition flex items-center justify-between group py-1">
                  <span>Soofi Saifullah Perfumes</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition" />
                </Link>
              </li>
              <li>
                <Link href="/listings/mhec-center" className="hover:text-white transition flex items-center justify-between group py-1">
                  <span>Mental Health Centre (MH&EC)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition" />
                </Link>
              </li>
              <li>
                <Link href="/listings/ideal-guest-house" className="hover:text-white transition flex items-center justify-between group py-1">
                  <span>Ideal Guest House Mithi</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Regions & Cities */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Key Locations
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li className="flex items-center gap-1.5 hover:text-slate-200 transition py-0.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" /> Karachi, Sindh
              </li>
              <li className="flex items-center gap-1.5 hover:text-slate-200 transition py-0.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" /> Islamabad, ICT
              </li>
              <li className="flex items-center gap-1.5 hover:text-slate-200 transition py-0.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" /> Mithi, Tharparkar
              </li>
              <li className="flex items-center gap-1.5 hover:text-slate-200 transition py-0.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" /> Daharki, Ghotki
              </li>
              <li className="flex items-center gap-1.5 hover:text-slate-200 transition py-0.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" /> Lahore, Punjab
              </li>
              <li className="flex items-center gap-1.5 hover:text-slate-200 transition py-0.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" /> Hyderabad, Sindh
              </li>
            </ul>
          </div>

          {/* Head Office & Support */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Head Office & Contact
            </h4>
            
            <div className="space-y-3 text-xs font-medium">
              
              {/* Head Office Info */}
              <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span>Head Office</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Karachi, Sindh, Pakistan</span>
                </div>
              </div>

              {/* Direct Support */}
              <a 
                href="https://wa.me/923327500033" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-slate-900/90 hover:bg-slate-900 rounded-2xl border border-slate-800 transition group"
              >
                <div className="p-2 bg-[#058A39]/20 text-[#058A39] rounded-xl shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal">WhatsApp Contact</span>
                  <span className="text-xs font-bold text-white">+92 332 7500033</span>
                </div>
              </a>

              <a 
                href="mailto:devdanish.tech@gmail.com"
                className="flex items-center gap-3 p-3 bg-slate-900/90 hover:bg-slate-900 rounded-2xl border border-slate-800 transition group"
              >
                <div className="p-2 bg-blue-500/20 text-blue-400 rounded-xl shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal">Email Support</span>
                  <span className="text-xs font-bold text-white">devdanish.tech@gmail.com</span>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© 2026 KasbMarkaz. All rights reserved. Head Office: Karachi, Sindh, Pakistan.</p>
          <div className="flex items-center gap-6">
            <Link href="/listings" className="hover:text-slate-300 transition">Directory Listings</Link>
            <Link href="/add-listing" className="hover:text-slate-300 transition">Post Your Ad</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}