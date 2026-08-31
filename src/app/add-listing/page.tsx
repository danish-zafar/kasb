"use client";

import { useState } from "react";
import SearchableCitySelect from "@/components/shared/SearchableCitySelect";
import emailjs from "@emailjs/browser";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Tag, 
  CheckCircle2, 
  DollarSign
} from "lucide-react";

const CATEGORIES = [
  { id: "businesses", label: "Businesses & Stores" },
  { id: "stays", label: "Stays & Hotels" },
  { id: "property", label: "Property & Real Estate" },
  { id: "services", label: "Professional Services" },
  { id: "education", label: "Education & Tutors" },
  { id: "deals", label: "Deals & Offers" },
];

const CITIES = [
  "Sanghar",
  "Tharparkar",
  "Karachi",
  "Hyderabad",
  "Islamabad",
  "Lahore",
  "Sukkur"
];

export default function AddListingPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "businesses",
    city: "Sanghar",
    address: "",
    price: "",
    whatsapp: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_8olabyl";
    const TEMPLATE_ID = "template_xdwq5uh";
    const PUBLIC_KEY = "IF-5cNpA6r5oGQ2ls";

    const templateParams = {
      title: formData.title,
      category: formData.category,
      city: formData.city,
      whatsapp: formData.whatsapp,
      price: formData.price || "N/A",
      address: formData.address,
      description: formData.description || "No description provided.",
      to_email: "devdanish.tech@gmail.com",
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to send listing request. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
        
        {/* Top Header Banner */}
        <div className="bg-brand-navy p-8 text-white text-center space-y-2">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Post Your Ad or Business
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
            Reach thousands of local customers in your city for FREE. Fill out the details below to list your shop, property, or service.
          </p>
        </div>

        {success ? (
          <div className="p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-[#058A39] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">Listing Request Sent!</h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Your details have been emailed directly to our verification team. It will be live on KasbMarkaz shortly.
              </p>
            </div>
            <button
              onClick={() => {
                setSuccess(false);
                setFormData({
                  title: "",
                  category: "businesses",
                  city: "Sanghar",
                  address: "",
                  price: "",
                  whatsapp: "",
                  description: "",
                });
              }}
              className="bg-[#058A39] text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md hover:bg-emerald-700 transition"
            >
              Submit Another Listing
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
            
            {/* Section 1: Basic Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#058A39]" /> Business Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Business / Ad Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Al-Rehman Agro & Seed Store"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#058A39] focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Category *
                  </label>
                  <div className="relative">
                    <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#058A39] focus:bg-white transition cursor-pointer"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Price Tag / Starting Rate
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. PKR 6,500 / night or Free Quote"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#058A39] focus:bg-white transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Contact & Location */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#058A39]" /> Location & Contact Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    City *
                  </label>
                  <SearchableCitySelect
                    value={formData.city}
                    onChange={(city) => setFormData({ ...formData, city })}
                    placeholder="Select City (Search A - Z)"
                    lightTheme={true}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#058A39]" />
                    <input
                      type="tel"
                      required
                      placeholder="923327500033"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#058A39] focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Full Address / Landmark *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Station Road, Near Main Market, Sanghar"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#058A39] focus:bg-white transition"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Description & Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe products, services, operating hours, etc."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#058A39] focus:bg-white transition"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary font-bold py-4 rounded-xl text-base shadow-lg transition duration-200 disabled:opacity-50"
            >
              {loading ? "Sending Email Request..." : "Submit & Publish Listing"}
            </button>

          </form>
        )}

      </div>
    </div>
  );
}