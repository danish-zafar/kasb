"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  MapPin, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Hotel, 
  Home as HomeIcon, 
  GraduationCap, 
  Tag,
  ShieldCheck,
  Zap,
  Users,
  HeartPulse
} from "lucide-react";
import BusinessCard from "@/components/shared/BusinessCard";
import SearchableCitySelect from "@/components/shared/SearchableCitySelect";
import { ALL_LISTINGS } from "./listings/page";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const featuredListings = ALL_LISTINGS.filter((item) => item.featured);

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative bg-gradient-to-b from-[#011429] via-[#021d3b] to-[#042d5c] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#058A39]/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#0284c7]/25 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-slate-900/80 border-2 border-[#058A39]/60 px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-[#058A39]/10 backdrop-blur-md">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
            <span className="text-emerald-300 tracking-wide uppercase">Pakistan’s Growing Local Business Directory</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15]">
            Find What You Need, <br />
            <span className="bg-gradient-to-r from-[#10b981] via-[#058A39] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-lg">
              Where You Need It.
            </span>
          </h1>
          
          <p className="text-slate-200 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Connect directly with verified local businesses, trade outlets, healthcare centers, and educational institutes across Pakistan.
          </p>

          {/* Search Box */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `/listings?search=${encodeURIComponent(searchQuery)}&city=${encodeURIComponent(selectedCity)}`;
            }}
            className="bg-white p-3 rounded-2xl shadow-2xl shadow-black/40 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-3 border-4 border-[#058A39]/30"
          >
            <div className="sm:col-span-6 flex items-center gap-3 px-4 py-3.5 bg-slate-100 rounded-xl border border-slate-200 focus-within:border-[#058A39] transition">
              <Search className="w-5 h-5 text-[#058A39] shrink-0" />
              <input
                type="text"
                placeholder="What are you looking for? (e.g. Mental Health, Perfumes)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-slate-900 font-semibold placeholder-slate-500 text-sm sm:text-base outline-none"
              />
            </div>

            <div className="sm:col-span-4">
              <SearchableCitySelect
                value={selectedCity}
                onChange={(city) => setSelectedCity(city)}
                placeholder="All Cities (Pakistan - Search A to Z)"
                lightTheme={true}
              />
            </div>

            <button
              type="submit"
              className="sm:col-span-2 bg-[#058A39] hover:bg-[#04702e] text-white font-extrabold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#058A39]/30 hover:scale-[1.02] active:scale-95 text-base"
            >
              <span>Search</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Key Feature Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Direct WhatsApp Connect
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-sky-500/20 border border-sky-500/40 text-sky-300">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> 100% Free Listing
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Verified Local Businesses
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- CATEGORIES SECTION ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Explore Categories</h2>
            <p className="text-sm text-slate-500 mt-1">Browse active categories to find local providers fast.</p>
          </div>
          <Link href="/listings" className="text-sm font-semibold text-[#058A39] hover:underline flex items-center gap-1">
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { title: "Hotel/Hospitality", count: "Ideal Guest House & Stays", icon: Hotel },
            { title: "Healthcare", count: "Mental Health & Consultations", icon: HeartPulse },
            { title: "Businesses", count: "Perfumes & Retail Outlets", icon: Building2 },
            { title: "Property", count: "Real Estate Listings", icon: HomeIcon },
            { title: "Education", count: "Tutors & Academy", icon: GraduationCap },
            { title: "Deals & Offers", count: "Promotional Deals", icon: Tag },
          ].map((cat, i) => (
            <Link key={i} href="/listings" className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#058A39] transition text-center group">
              <div className="w-12 h-12 mx-auto bg-slate-50 rounded-xl flex items-center justify-center text-[#058A39] group-hover:bg-[#058A39] group-hover:text-white transition mb-3">
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-[#058A39] transition">{cat.title}</h3>
              <span className="text-[11px] text-slate-400 font-medium block mt-0.5 line-clamp-1">{cat.count}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ----------------- PROMOTED / FEATURED LISTINGS SECTION ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-bold text-[#058A39] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 uppercase tracking-wide">Featured</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">Top Promoted Listings</h2>
            <p className="text-sm text-slate-500">Verified local providers and verified businesses.</p>
          </div>
          <Link href="/listings" className="text-sm font-semibold text-[#058A39] hover:underline flex items-center gap-1">
            See All Listings <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Dynamic Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredListings.map((item) => (
            <BusinessCard
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              address={item.address}
              price={item.price}
              description={item.description}
              whatsapp={item.whatsapp}
              logo={item.logo}
            />
          ))}
        </div>
      </section>

      {/* ----------------- WHY CHOOSE KASBMARKAZ ----------------- */}
      <section className="bg-white border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Why Search on KasbMarkaz?</h2>
            <p className="text-slate-500 text-sm">Empowering local buyers and businesses with transparent communication.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-[#058A39] rounded-2xl flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Direct Verified Sellers</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Skip the middlemen. Get accurate numbers and location addresses directly from regional sellers.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-3">
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Instant WhatsApp Contact</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Inquire rates or negotiate deals in one tap directly over WhatsApp with listing owners.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-3">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Zero Commission</h3>
              <p className="text-xs text-slate-500 leading-relaxed">No hidden charges for buyers or sellers. Post listings and deal transparently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- TOP CITIES ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Popular Regions</h2>
          <p className="text-sm text-slate-500">Explore directory listings active across main hub cities.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { city: "Mithi", province: "Tharparkar, Sindh", listings: "Ideal Guest House & Stays" },
            { city: "Islamabad", province: "ICT", listings: "Mental Health & Services" },
            { city: "Daharki", province: "Ghotki, Sindh", listings: "Soofi Saifullah Fragrances" },
            { city: "Karachi", province: "Sindh", listings: "Commercial & Business" },
            { city: "Sanghar", province: "Sindh", listings: "Trade & Agricultural Outlets" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 text-left hover:border-[#058A39] transition">
              <MapPin className="w-5 h-5 text-[#058A39] mb-2" />
              <h3 className="font-bold text-slate-900 text-base">{item.city}</h3>
              <p className="text-xs text-slate-400 font-medium">{item.province}</p>
              <span className="text-[11px] font-bold text-[#058A39] block mt-2">{item.listings}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- CALL TO ACTION BANNER ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-[#058A39] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-[#058A39]/20">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Grow Your Local Business Online</h2>
            <p className="text-emerald-100 text-sm sm:text-base max-w-xl">
              List your shop, outlet, institute, or property on KasbMarkaz today. Reach thousands of local customers in your city for FREE.
            </p>
          </div>
          <Link
            href="/add-listing"
            className="bg-white text-[#058A39] font-extrabold px-8 py-4 rounded-2xl hover:bg-emerald-50 transition shadow-md whitespace-nowrap text-sm sm:text-base active:scale-95"
          >
            Post Your Ad Now
          </Link>
        </div>
      </section>

    </main>
  );
}