"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Phone, Filter, RotateCcw, ArrowRight, Check, X, Building2, Tag } from "lucide-react";
import SearchableCitySelect from "@/components/shared/SearchableCitySelect";

export const ALL_LISTINGS = [
  {
    id: "quran-academy",
    title: "Online Quran Academy",
    category: "Education & Tutors",
    subCategory: "Quran Academy & Online Classes",
    city: "Online / Islamabad",
    address: "Online Classes via Zoom / Skype (Pakistan & Global)",
    price: "Contact for Fee",
    whatsapp: "923063621318",
    logo: "/images/education/Quranonline.png",
    description: "Learn Quran online with Tajweed, Hifz, Nazra & Islamic Studies with certified male & female tutors. Flexible 1-on-1 timings for kids & adults.",
    featured: true
  },
  {
    id: "mhec-center",
    title: "Mental Health and Education Centre",
    category: "Healthcare",
    subCategory: "Mental Health & Consultation",
    city: "Islamabad",
    address: "Islamabad / Online Services",
    price: "Appointment Based",
    whatsapp: "923430520090",
    logo: "/images/psychology/logo.png",
    description: "Online psychological consultation, psychotherapy, corporate workshops, personality, employee & IQ assessments, and internship courses.",
    featured: true
  },
  {
    id: "soofi-saifullah-fragrances",
    title: "Soofi Saifullah Perfumes",
    category: "Businesses",
    subCategory: "Perfumes & Fragrances",
    city: "Daharki",
    address: "Daharki Cinema Road, Daharki",
    price: "PKR 2,000 - PKR 3,300",
    whatsapp: "923363190175",
    logo: "/images/perfumes/logo.png",
    description: "Premium handcrafted long-lasting Eau De Parfums for Men & Women (Alpha, Alif, Valley, Obsession, Vanilla Charm, Oude Aseel, Oud Bahaar, Persona).",
    featured: true
  },
  {
    id: "ideal-guest-house",
    title: "Ideal Guest House Mithi",
    category: "Hotel/Hospitality",
    subCategory: "Guest House & Lodging",
    city: "Mithi, Tharparkar",
    address: "Near Kishmir Chock Mithi, Tharparkar, Pakistan",
    price: "Contact for Rates",
    whatsapp: "923332502016",
    logo: "/images/guesthouse/logo.png",
    description: "Comfortable executive rooms, 24/7 lodging availability, clean air-conditioned rooms, family-friendly atmosphere, and warm hospitality near Kishmir Chock Mithi, Tharparkar.",
    featured: true
  },
  {
    id: "dr-azad-sindhi-vet-care",
    title: "Dr Azad Sindhi Vet Care Services",
    category: "Veterinary",
    subCategory: "Pet Care & Veterinary Doctor",
    city: "Daharki",
    address: "Al-Fatah Model Town Daharki",
    price: "2k to 5k PKR",
    whatsapp: "923133100011",
    logo: "/images/veterinary/logo.svg",
    description: "Professional Veterinary Doctor (S.A.U Tandojam, R.V.M.P Islamabad). Pet animals vaccination specialist (Anti-Rabies, Worms, Ticks, Mites) & hygiene pet food.",
    featured: true
  }
];

const CATEGORIES = [
  "Veterinary",
  "Hotel/Hospitality",
  "Healthcare",
  "Businesses",
  "Property & Real Estate",
  "Professional Services",
  "Education & Tutors",
  "Deals & Offers"
];

export default function ListingsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setSelectedCity("");
    setSearchQuery("");
  };

  const filteredListings = ALL_LISTINGS.filter((item) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(item.category);
    const matchesCity =
      !selectedCity ||
      item.city.toLowerCase().includes(selectedCity.toLowerCase()) ||
      item.address.toLowerCase().includes(selectedCity.toLowerCase()) ||
      item.city.toLowerCase().includes("online");
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesCity && matchesSearch;
  });

  const totalActiveFilters = selectedCategories.length + (selectedCity ? 1 : 0) + (searchQuery ? 1 : 0);

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      
      {/* Hero Banner Section */}
      <section className="bg-gradient-to-r from-[#011429] via-[#021d3b] to-[#042d5c] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" /> Pakistan&apos;s Directory Index
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Explore <span className="text-[#058A39]">Verified Listings</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Search verified local businesses, guest houses, healthcare centers, and online academies across Pakistan.
            </p>
          </div>

          {/* Top Search Field */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#058A39]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, business or location..."
              className="w-full pl-10 pr-4 py-3 bg-white text-slate-900 border-2 border-emerald-500/30 rounded-2xl text-xs font-semibold placeholder-slate-400 outline-none focus:ring-2 focus:ring-[#058A39] shadow-lg transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar Filters */}
          <aside className="bg-white p-6 rounded-3xl border border-slate-200/90 h-fit space-y-6 shadow-md shadow-slate-100">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-emerald-50 text-[#058A39] rounded-xl">
                  <Filter className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-extrabold text-sm text-slate-900">Directory Filters</h2>
                  <span className="text-[10px] text-slate-400 font-medium">Refine your search</span>
                </div>
              </div>
              
              {totalActiveFilters > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="text-[11px] font-bold text-[#058A39] hover:text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg flex items-center gap-1 transition cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" /> Reset ({totalActiveFilters})
                </button>
              )}
            </div>

            {/* City Dropdown Filter */}
            <div className="space-y-2">
              <label className="flex items-center justify-between text-xs font-bold text-slate-800 uppercase tracking-wider">
                <span>Select City / Region</span>
                <span className="text-[10px] text-emerald-600 font-semibold lowercase">(search A - Z)</span>
              </label>
              
              <SearchableCitySelect
                value={selectedCity}
                onChange={(city) => setSelectedCity(city)}
                placeholder="All Cities (Pakistan)"
                lightTheme={true}
              />
            </div>

            <hr className="border-slate-100" />

            {/* Checkbox Categories Filter */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#058A39]" /> Categories
                </label>
                {selectedCategories.length > 0 && (
                  <span className="text-[10px] font-extrabold bg-[#058A39] text-white px-2 py-0.5 rounded-full">
                    {selectedCategories.length}
                  </span>
                )}
              </div>

              <div className="space-y-1.5">
                {CATEGORIES.map((cat) => {
                  const isChecked = selectedCategories.includes(cat);
                  return (
                    <label
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition select-none ${
                        isChecked
                          ? "bg-emerald-50 border-emerald-300 text-[#058A39] shadow-sm font-bold"
                          : "bg-slate-50/50 border-slate-200/80 text-slate-700 hover:bg-slate-100/70"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-4 h-4 rounded-md border flex items-center justify-center transition ${
                          isChecked ? "bg-[#058A39] border-[#058A39] text-white" : "border-slate-300 bg-white"
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        {cat}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

          </aside>

          {/* Right Side Listings Grid */}
          <div className="lg:col-span-3 space-y-5">
            
            {/* Top Results Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white px-5 py-4 rounded-2xl border border-slate-200/90 shadow-sm">
              <span className="text-xs text-slate-600 font-medium">
                Showing <strong className="text-slate-900 text-sm font-extrabold">{filteredListings.length}</strong> verified business listing{filteredListings.length === 1 ? "" : "s"}
              </span>

              {/* Active Filter Tags */}
              {totalActiveFilters > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  {selectedCity && (
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-[#058A39] text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      <MapPin className="w-3 h-3" /> {selectedCity}
                      <button onClick={() => setSelectedCity("")} className="hover:text-red-500">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedCategories.map((cat) => (
                    <span key={cat} className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      {cat}
                      <button onClick={() => handleCategoryChange(cat)} className="hover:text-red-500">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      &quot;{searchQuery}&quot;
                      <button onClick={() => setSearchQuery("")} className="hover:text-red-500">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Listings Grid */}
            {filteredListings.length === 0 ? (
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-sm">
                <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto">
                  <Search className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold text-slate-800">No listings match your search criteria.</p>
                  <p className="text-xs text-slate-500">Try clearing your filters or selecting a different category.</p>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="bg-[#058A39] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition shadow-md cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredListings.map((listing) => (
                  <div
                    key={listing.id}
                    className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-extrabold bg-emerald-50 text-[#058A39] border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                          {listing.category}
                        </span>
                        <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                          {listing.price}
                        </span>
                      </div>

                      <div className="flex items-start gap-4 mb-3">
                        {listing.logo && (
                          <div className="relative w-14 h-14 rounded-2xl bg-slate-900 border border-slate-200 p-1 shrink-0 overflow-hidden shadow-sm flex items-center justify-center">
                            <Image
                              src={listing.logo}
                              alt={listing.title}
                              fill
                              sizes="56px"
                              className="object-contain p-1"
                              unoptimized
                            />
                          </div>
                        )}
                        <div>
                          <Link href={`/listings/${listing.id}`} className="hover:underline">
                            <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-[#058A39] transition-colors">
                              {listing.title}
                            </h3>
                          </Link>
                          <p className="text-xs text-slate-500 mt-1 flex items-center gap-1 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {listing.address}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-xs text-slate-600 leading-relaxed mt-4 line-clamp-2">
                        {listing.description}
                      </p>
                    </div>

                    {/* Bottom Actions */}
                    <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center gap-2">
                      <Link
                        href={`/listings/${listing.id}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0B132B] text-white font-bold text-xs py-3 px-3 rounded-xl hover:bg-black transition text-center"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      
                      <a
                        href={`https://wa.me/${listing.whatsapp}?text=${encodeURIComponent(
                          listing.category === "Veterinary"
                            ? `AoA! Mujhe ${listing.title} ke hawale se pet treatment / appointment book karni hai.`
                            : `AoA! Mujhe ${listing.title} ke details aur services ke hawale se inquiry karni hai.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#058A39] text-white font-bold text-xs py-3 px-3 rounded-xl hover:bg-emerald-700 transition text-center shadow-md shadow-emerald-950/10"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </div>
    </main>
  );
}