"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  MapPin, 
  Phone, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Info,
  Star,
  Clock,
  MessageCircle,
  ImageIcon,
  X,
  Maximize2
} from "lucide-react";
import { BUSINESS_DATA, GalleryImage } from "@/data/businessData";

interface ServiceProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  badge?: string;
  category?: string;
  price?: string | number;
  size?: string;
  gender?: string;
  notes?: {
    top: string;
    heart: string;
    base: string;
  };
  details?: {
    overview: string;
    duration: string;
    mode: string;
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BusinessDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const listing = BUSINESS_DATA[slug];

  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [selectedDetails, setSelectedDetails] = useState<{ overview: string; duration: string; mode: string } | null>(null);
  const [selectedNotes, setSelectedNotes] = useState<{ top: string; heart: string; base: string; name: string } | null>(null);
  const [previewImage, setPreviewImage] = useState<GalleryImage | null>(null);

  if (!listing) {
    notFound();
  }

  const products: ServiceProduct[] = (listing.products as unknown as ServiceProduct[]) || [];
  const gallery: GalleryImage[] = listing.gallery || [];
  
  const availableCategories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category || p.gender).filter(Boolean))) as string[]
  ];

  const filteredProducts = categoryFilter === "All" 
    ? products 
    : products.filter((p: ServiceProduct) => p.category === categoryFilter || p.gender === categoryFilter);

  const isOrderProduct = listing.id === "soofi-saifullah-fragrances" || listing.category.toLowerCase().includes("perfume");
  const isGuestHouse = listing.id === "ideal-guest-house" || listing.category.toLowerCase().includes("hotel");

  const mainWhatsappUrl = `https://wa.me/${listing.whatsapp}?text=${encodeURIComponent(
    isOrderProduct 
      ? `AoA! Mujhe ${listing.title} ke hawale se perfumes order karne hain.`
      : isGuestHouse
        ? `AoA! Mujhe ${listing.title} ke hawale se room booking / rates maloom karne hain.`
        : `AoA! Mujhe ${listing.title} ke hawale se inquiry / appointment book karni hai.`
  )}`;

  return (
    <main className="min-h-screen bg-[#0B0F17] text-slate-100 py-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Listings
          </Link>
          <button 
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }
            }}
            className="text-xs font-medium text-slate-400 hover:text-white bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800 transition cursor-pointer"
          >
            Share Page
          </button>
        </div>

        {/* Hero Section Banner */}
        <div className="relative bg-gradient-to-r from-slate-900 via-[#111827] to-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            
            <div className="flex items-center gap-5">
              <div className="relative w-24 h-24 rounded-2xl bg-black border border-slate-800 p-2 shrink-0 overflow-hidden shadow-inner">
                <Image
                  src={listing.logo}
                  alt={listing.title}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{listing.title}</h1>
                  {listing.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-amber-500/10 text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Listing
                    </span>
                  )}
                  <span className="text-[11px] font-bold bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {listing.category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-xl">{listing.tagline}</p>
                <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{listing.address}</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto flex flex-col items-end gap-2">
              <a
                href={mainWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#058A39] hover:bg-emerald-600 text-white font-bold text-xs py-3.5 px-6 rounded-2xl transition flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40"
              >
                <Phone className="w-4 h-4" /> Contact on WhatsApp
              </a>
              <span className="text-[11px] text-slate-400">Rates / Pricing: <strong className="text-slate-200">{listing.priceRange || "Contact for Rates"}</strong></span>
            </div>

          </div>
        </div>

        {/* Details & Contact Info Grid (Screenshot layout design) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Main About Description Box */}
          <div className="md:col-span-2 bg-slate-900/60 rounded-3xl border border-slate-800/80 p-6 space-y-4 backdrop-blur-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> About {listing.title}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {listing.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-xs border-t border-slate-800/60">
              <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
                <span className="text-slate-500 block text-[10px] uppercase">Location</span>
                <span className="font-semibold text-slate-200">{listing.city}, {listing.district || listing.city}</span>
              </div>
              <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
                <span className="text-slate-500 block text-[10px] uppercase">Pricing</span>
                <span className="font-semibold text-slate-200">{listing.priceRange}</span>
              </div>
              <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
                <span className="text-slate-500 block text-[10px] uppercase">Category</span>
                <span className="font-semibold text-slate-200">{listing.category}</span>
              </div>
              <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
                <span className="text-slate-500 block text-[10px] uppercase">Status</span>
                <span className="font-semibold text-emerald-400">Verified & Active</span>
              </div>
            </div>
          </div>

          {/* Screenshot Contact Info & Details Sidebar Box */}
          <div className="bg-slate-900/90 rounded-3xl border border-slate-800/80 p-6 space-y-6 shadow-lg">
            
            {/* Details Section */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white tracking-wide border-b border-slate-800 pb-2">
                Details
              </h3>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3 text-slate-300">
                  <Star className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{listing.reviews || "Not yet rated (0 reviews)"}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{listing.hours || "Always open"}</span>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-sky-400 hover:underline cursor-pointer">
                    {listing.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <h3 className="text-base font-bold text-white tracking-wide border-b border-slate-800 pb-2">
                Contact info
              </h3>

              <div className="space-y-3 text-xs">
                {listing.phone && (
                  <div className="flex items-center gap-3 text-slate-200">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <a href={`tel:${listing.phone.replace(/\s/g, "")}`} className="hover:text-emerald-400 transition font-medium">
                      {listing.phone}
                    </a>
                  </div>
                )}

                <div className="flex items-center gap-3 text-slate-200">
                  <MessageCircle className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="font-medium">{listing.facebook || listing.title}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={mainWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#058A39] hover:bg-emerald-600 text-white font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-2 shadow"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Ideal Guest House Image Gallery Showcase (Replaces products for guest house) */}
        {gallery.length > 0 && (
          <div className="space-y-6 pt-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-amber-400" />
                  Guest House Photos & Rooms
                  <span className="text-xs bg-amber-500/10 text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/20 font-medium">
                    {gallery.length} Images
                  </span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Explore rooms, facilities, and premises of Ideal Guest House Mithi. Click any photo to expand.
                </p>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gallery.map((item: GalleryImage) => {
                const itemWhatsappUrl = `https://wa.me/${listing.whatsapp}?text=${encodeURIComponent(
                  `AoA! Mujhe Ideal Guest House Mithi ke "${item.title}" (${item.category || "Rooms"}) ke room rates maloom karne hain.`
                )}`;

                return (
                  <div
                    key={item.id}
                    className="group bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 relative overflow-hidden"
                  >
                    <div>
                      {/* Image Frame */}
                      <div 
                        onClick={() => setPreviewImage(item)}
                        className="relative w-full h-52 rounded-xl bg-slate-950 overflow-hidden mb-3 border border-slate-800/60 cursor-pointer group"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <span className="bg-slate-900/90 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-xl border border-amber-500/40 flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5" /> View Photo
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-white text-sm group-hover:text-amber-400 transition-colors">
                            {item.title}
                          </h3>
                          {item.category && (
                            <span className="text-[10px] font-semibold bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                              {item.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 mt-3 border-t border-slate-800/80">
                      <a
                        href={itemWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-xs font-extrabold bg-[#058A39] hover:bg-emerald-600 text-white py-2.5 rounded-xl transition flex items-center justify-center gap-2 shadow"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Inquire Room on WhatsApp</span>
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* Standard Products / Services Collection Grid (For other listings) */}
        {products.length > 0 && gallery.length === 0 && (
          <div className="space-y-6 pt-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  {isOrderProduct ? "Featured Perfume Collection" : "Featured Services"}
                  <span className="text-xs bg-amber-500/10 text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/20 font-medium">
                    {products.length} Items
                  </span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  {isOrderProduct
                    ? "Explore our luxury handcrafted perfumes. Order directly on WhatsApp for fast delivery."
                    : "Select any service below to view details or book an appointment via WhatsApp."}
                </p>
              </div>

              {/* Dynamic Category Filter Tabs */}
              {availableCategories.length > 1 && (
                <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
                  {availableCategories.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setCategoryFilter(tab)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                        categoryFilter === tab
                          ? "bg-amber-500 text-slate-950 shadow-md"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Products / Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((product: ServiceProduct) => {
                const itemWhatsappUrl = `https://wa.me/${listing.whatsapp}?text=${encodeURIComponent(
                  isOrderProduct 
                    ? `AoA! Mujhe "${product.name}" (${product.size || "50ml"}) order karna hai.`
                    : `AoA! Mujhe "${product.name}" ke liye appointment book karni hai.`
                )}`;

                return (
                  <div
                    key={product.id}
                    className="group bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 relative overflow-hidden"
                  >
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 text-[10px] font-bold bg-amber-500 text-slate-950 px-2 py-0.5 rounded-md uppercase tracking-wider shadow">
                        {product.badge}
                      </span>
                    )}

                    <div>
                      {/* Service / Product Image */}
                      <div className="relative w-full h-48 rounded-xl bg-slate-950 overflow-hidden mb-3 border border-slate-800/60">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Details & Info */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors">
                            {product.name}
                          </h3>
                          
                          {/* Info Button for Details or Notes */}
                          {product.details && (
                            <button
                              onClick={() => setSelectedDetails(product.details || null)}
                              title="View Service Details"
                              className="text-slate-500 hover:text-amber-400 transition p-1 cursor-pointer"
                            >
                              <Info className="w-4 h-4" />
                            </button>
                          )}

                          {product.notes && (
                            <button
                              onClick={() => setSelectedNotes({ ...product.notes!, name: product.name })}
                              title="View Fragrance Notes"
                              className="text-amber-400/80 hover:text-amber-300 text-xs font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 flex items-center gap-1 transition cursor-pointer"
                            >
                              <Info className="w-3.5 h-3.5" /> Notes
                            </button>
                          )}
                        </div>

                        {/* Price & Specs */}
                        <div className="flex items-center gap-2 text-xs font-medium">
                          {product.price && (
                            <span className="text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                              PKR {typeof product.price === 'number' ? product.price.toLocaleString() : product.price}
                            </span>
                          )}
                          {(product.size || product.gender) && (
                            <span className="text-slate-400 text-[11px]">
                              {[product.size, product.gender].filter(Boolean).join(" • ")}
                            </span>
                          )}
                        </div>

                        <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 mt-3 border-t border-slate-800/80">
                      <a
                        href={itemWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-xs font-extrabold bg-[#058A39] hover:bg-emerald-600 text-white py-2.5 rounded-xl transition flex items-center justify-center gap-2 shadow"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{isOrderProduct ? "Order Now on WhatsApp" : "Book Appointment"}</span>
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* Guarantee Banner */}
        <div className="bg-slate-900/40 rounded-2xl border border-slate-800/60 p-4 flex items-center gap-3 text-xs text-slate-400">
          <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
          <div>
            <strong className="text-slate-200">Direct Listing Guarantee — KasbMarkaz:</strong> Connect directly with {listing.title} for verified pricing, room availability, and appointments.
          </div>
        </div>

      </div>

      {/* Image Lightbox Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">{previewImage.title}</h3>
              <button
                onClick={() => setPreviewImage(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black">
              <Image
                src={previewImage.image}
                alt={previewImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400">{previewImage.category || "Ideal Guest House Mithi"}</span>
              <a
                href={`https://wa.me/${listing.whatsapp}?text=${encodeURIComponent(
                  `AoA! Mujhe Ideal Guest House Mithi ke "${previewImage.title}" ke rates & booking maloom karni hain.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#058A39] hover:bg-emerald-600 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition flex items-center gap-2 shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Inquire Room on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Service Details Modal */}
      {selectedDetails && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-sm w-full space-y-4 relative">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Service Information</h4>
            <div className="space-y-2 text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 font-semibold block">Overview</span>
                <span className="text-slate-200">{selectedDetails.overview}</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 font-semibold block">Duration</span>
                <span className="text-slate-200">{selectedDetails.duration}</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 font-semibold block">Mode</span>
                <span className="text-slate-200">{selectedDetails.mode}</span>
              </div>
            </div>
            <button
              onClick={() => setSelectedDetails(null)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold py-2.5 rounded-xl transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Fragrance Notes Modal */}
      {selectedNotes && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-sm w-full space-y-4 relative">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">{selectedNotes.name} — Fragrance Pyramid</h4>
            <div className="space-y-2 text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-amber-400/90 font-bold block mb-0.5">Top Notes</span>
                <span className="text-slate-200">{selectedNotes.top}</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-amber-400/90 font-bold block mb-0.5">Heart Notes</span>
                <span className="text-slate-200">{selectedNotes.heart}</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-amber-400/90 font-bold block mb-0.5">Base Notes</span>
                <span className="text-slate-200">{selectedNotes.base}</span>
              </div>
            </div>
            <button
              onClick={() => setSelectedNotes(null)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold py-2.5 rounded-xl transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}