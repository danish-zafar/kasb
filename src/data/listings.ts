export interface ListingItem {
  id: string;
  title: string;
  category: string;
  address: string;
  price: string;
  description: string;
  whatsapp: string;
  logo?: string;
  featured?: boolean;
  city?: string;
}

export const LISTINGS: ListingItem[] = [
  {
    id: "ideal-guest-house",
    title: "Ideal Guest House Mithi",
    category: "Guest House / Hotel",
    address: "Near Main Bus Stand, Mithi, Tharparkar",
    price: "PKR 3,000 - 8,000 / night",
    description: "Ideal Guest House offers premium rooms with modern amenities, family-friendly security, and warm hospitality in the heart of Mithi, Tharparkar.",
    whatsapp: "923332501234",
    logo: "/images/guesthouse/logo.jpg",
    featured: true,
    city: "Mithi"
  },
  {
    id: "quran-academy",
    title: "Online Quran Academy",
    category: "Education",
    address: "Online Classes Available Worldwide",
    price: "Free Trial Available",
    description: "Learn Quran with Qualified Male & Female Tutors for Kids & Adults with Flexible Timings.",
    whatsapp: "923063621318",
    logo: "/images/education/WhatsApp Image 2026-08-30 at 10.49.58 AM.jpeg",
    featured: true,
    city: "Online / Global"
  },
  {
    id: "dr-azad-sindhi-vet-care",
    title: "Dr Azad Sindhi Vet Care Services",
    category: "Veterinary",
    address: "Al-Fatah Model Town Daharki",
    price: "2k to 5k PKR",
    description: "Professional Veterinary Doctor (S.A.U Tandojam, R.V.M.P Islamabad). Pet animals vaccination specialist & hygiene pet food.",
    whatsapp: "923133100011",
    logo: "/images/veterinary/logo.svg",
    featured: true,
    city: "Daharki"
  },
  {
    id: "jaweria-designer",
    title: "Jaweria Designer | Graphic Designer",
    category: "Graphic Designer",
    address: "Awami colony Sadiq Abad",
    price: "15000 PKR",
    description: "I’m Jaweria, a Graphic Designer specializing in creative and professional visual designs. Logo Design, Social Media Posts, Business Cards, Posters, Flyers, Banners, Branding Designs.",
    whatsapp: "923062635726",
    logo: "/images/graphic-design/logo.png",
    featured: true,
    city: "Sadiqabad / Online Worldwide"
  }
];