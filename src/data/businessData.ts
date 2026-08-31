export interface FragranceNotes {
  top: string;
  heart: string;
  base: string;
}

export interface ServiceDetails {
  overview: string;
  duration: string;
  mode: string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: number | string;
  size?: string;
  gender?: "Men" | "Women" | "Unisex";
  category?: string;
  badge?: string;
  notes?: FragranceNotes;
  details?: ServiceDetails;
}

export interface GalleryImage {
  id: string;
  title: string;
  image: string;
  category?: string;
}

export interface BusinessListing {
  id: string;
  title: string;
  tagline: string;
  category: string;
  subCategory?: string;
  city: string;
  district?: string;
  address: string;
  priceRange: string;
  serviceType?: string;
  whatsapp: string;
  phone?: string;
  hours?: string;
  reviews?: string;
  facebook?: string;
  verified: boolean;
  logo: string;
  bannerImage?: string;
  description: string;
  featured: boolean;
  products?: ProductItem[];
  gallery?: GalleryImage[];
}

export const BUSINESS_DATA: Record<string, BusinessListing> = {
  "soofi-saifullah-fragrances": {
    id: "soofi-saifullah-fragrances",
    title: "Soofi Saifullah Perfumes",
    tagline: "Handcrafted Luxury Eau De Parfums with Exceptional Projection & Longevity",
    category: "Businesses",
    subCategory: "Perfumes & Fragrances",
    city: "Daharki",
    district: "Ghotki",
    address: "Daharki Cinema Road, Daharki, Sindh",
    priceRange: "PKR 2,000 - PKR 3,300",
    serviceType: "Eau De Parfum (EDP)",
    whatsapp: "923363190175",
    verified: true,
    logo: "/images/perfumes/logo.png",
    bannerImage: "/images/perfumes/alpha.jpeg",
    description: "Soofi Saifullah Perfumes crafts rich, long-lasting Eau De Parfums using imported premium fragrance oils. Designed for perfume connoisseurs who appreciate intense projection, royal agarwood blends, elegant florals, and signature woody accords.",
    featured: true,
    products: [
      {
        id: "alpha",
        name: "Alpha",
        price: 2200,
        size: "50ml",
        gender: "Men",
        category: "Men",
        description: "A commanding signature fragrance crafted for the bold modern gentleman. Opens with fresh herbal sage and settles into warm amber and precious woods.",
        notes: {
          top: "Clary Sage & French Lavender",
          heart: "Precious Spices & Amber Resin",
          base: "Rich Oakwood & Tonka Bean"
        },
        image: "/images/perfumes/alpha.jpeg",
        badge: "Bestseller"
      },
      {
        id: "alif",
        name: "Alif",
        price: 2000,
        size: "50ml",
        gender: "Men",
        category: "Men",
        description: "Deep oriental fragrance presenting royal character and masculine sophistication. Encased in a luxurious presentation box.",
        notes: {
          top: "Cardamom & Bergamot",
          heart: "Smokey Leather & Nutmeg",
          base: "Dark Amber & Cedarwood"
        },
        image: "/images/perfumes/alif.jpeg",
        badge: "Popular"
      },
      {
        id: "valley",
        name: "Valley",
        price: 2200,
        size: "50ml",
        gender: "Men",
        category: "Men",
        description: "An invigorating escape into crisp mountain forests. Blends pine needles, fresh juniper berries, and earthy green moss.",
        notes: {
          top: "Juniper Berries & Alpine Air",
          heart: "Wild Thyme & Mountain Pine",
          base: "Vetiver, Moss & Amber Gold"
        },
        image: "/images/perfumes/valley.jpeg",
        badge: "Fresh & Woody"
      },
      {
        id: "obsession",
        name: "Obsession",
        price: 2300,
        size: "50ml",
        gender: "Women",
        category: "Women",
        description: "An irresistible floral-amber composition that exudes feminine grace, sweet orchids, and silky cashmere notes.",
        notes: {
          top: "Pink Peony & Peach Blossom",
          heart: "Vanilla Orchid & Wild Rose",
          base: "Cashmere Wood & Creamy Musk"
        },
        image: "/images/perfumes/obsession.jpeg",
        badge: "Feminine Choice"
      },
      {
        id: "vanilla-charm",
        name: "Vanilla Charm",
        price: 2000,
        size: "50ml",
        gender: "Women",
        category: "Women",
        description: "A warm, gourmand delight featuring rich Madagascar vanilla, brown sugar crystals, and delicate white jasmine.",
        notes: {
          top: "White Jasmine & Sweet Coconut",
          heart: "Madagascar Vanilla Orchid",
          base: "Brown Sugar, Amber & Tonka Bean"
        },
        image: "/images/perfumes/vanilla-charm.jpeg",
        badge: "Sweet & Warm"
      },
      {
        id: "oude-aseel",
        name: "Oude Aseel",
        price: 2500,
        size: "50ml",
        gender: "Unisex",
        category: "Unisex",
        description: "Authentic royal agarwood formulation enriched with Damask rose and dark saffron. High concentration for all-day impression.",
        notes: {
          top: "Saffron & Royal Oud",
          heart: "Damask Rose & Patchouli",
          base: "Smokey Agarwood, Leather & Musk"
        },
        image: "/images/perfumes/oud-aseel.jpeg",
        badge: "Royal Oud"
      },
      {
        id: "oud-bahaar",
        name: "Oud Bahaar",
        price: 2300,
        size: "50ml",
        gender: "Unisex",
        category: "Unisex",
        description: "A harmonious fusion of vibrant spring blossoms and deep Cambodian oud. Warm, spicy, and captivating.",
        notes: {
          top: "Spring Blossoms & Citrus Zest",
          heart: "Cambodian Oud & Spicy Cardamom",
          base: "Amber Glow & Sandalwood"
        },
        image: "/images/perfumes/oud-bahaar.jpeg",
        badge: "Floral Oud"
      },
      {
        id: "persona",
        name: "Persona",
        price: 3300,
        size: "50ml",
        gender: "Unisex",
        category: "Unisex",
        description: "The peak of luxury perfumery. Executive edition featuring intense dark plum, exotic spices, leather, and rare resins.",
        notes: {
          top: "Dark Plum & Pink Pepper",
          heart: "Tuscan Leather & Iris",
          base: "Oud Wood, Frankincense & Vanilla"
        },
        image: "/images/perfumes/persona.jpeg",
        badge: "Executive Edition"
      }
    ]
  },
  "mhec-center": {
    id: "mhec-center",
    title: "Mental Health and Education Centre (MH&EC)",
    tagline: "Professional Psychological Services, Educational Assessment & Internship Programs",
    category: "Healthcare",
    subCategory: "Mental Health & Consultation",
    city: "Islamabad",
    district: "ICT",
    address: "Islamabad / Online Services Nationwide",
    priceRange: "Appointment Based",
    serviceType: "Psychology & Education",
    whatsapp: "923430520090",
    verified: true,
    logo: "/images/psychology/logo.png",
    bannerImage: "/images/psychology/logo.png",
    description: "Mental Health and Education Centre provides comprehensive online psychological consultations, psychotherapy, corporate mental wellness workshops, personality & IQ assessments, and specialized training courses for clinical psychology students.",
    featured: true,
    products: [
      {
        id: "online-therapy",
        name: "Online Therapy & Counseling",
        category: "Counseling",
        description: "Confidential 1-on-1 sessions for anxiety, depression, relationship issues, and stress management with certified clinical psychologists.",
        image: "/images/psychology/therapy.jpg",
        badge: "Core Service",
        details: {
          overview: "1-on-1 personalized psychotherapy and clinical counseling.",
          duration: "45 - 60 Minutes per Session",
          mode: "Online (Zoom / WhatsApp Video Call)"
        }
      },
      {
        id: "iq-assessment",
        name: "Personality & IQ Assessment",
        category: "Assessment",
        description: "Standardized psychometric testing, cognitive functioning evaluation, and corporate employee assessments with detailed clinical reporting.",
        image: "/images/psychology/assessment.jpg",
        badge: "Popular",
        details: {
          overview: "Comprehensive psychometric evaluation with detailed formal report.",
          duration: "2 Sessions + Diagnostic Report",
          mode: "Online / In-Person Evaluation"
        }
      },
      {
        id: "clinical-internship",
        name: "Clinical Internship & Diploma Course",
        category: "Courses",
        description: "Structured learning modules, case presentation training, and practical certification courses for psychology students and practitioners.",
        image: "/images/psychology/internship.jpg",
        badge: "Education",
        details: {
          overview: "Practical clinical training program with professional certificate.",
          duration: "4 Weeks - 3 Months Programs",
          mode: "Hybrid (Online Lectures + Supervised Training)"
        }
      }
    ]
  },
  "ideal-guest-house": {
    id: "ideal-guest-house",
    title: "Ideal Guest House Mithi",
    tagline: "Executive Comfort, Clean Rooms & 24/7 Hospitality in Mithi",
    category: "Hotel/Hospitality",
    subCategory: "Guest House & Lodging",
    city: "Mithi, Tharparkar",
    district: "Tharparkar",
    address: "Near Kishmir Chock Mithi, Tharparkar, Pakistan",
    priceRange: "Contact for Rates",
    serviceType: "Guest House Rooms & Stays",
    whatsapp: "923332502016",
    phone: "0333 2502016",
    hours: "Always open",
    reviews: "Not yet rated (0 reviews)",
    facebook: "Ideal Guest House Mithi",
    verified: true,
    logo: "/images/guesthouse/logo.png",
    bannerImage: "/images/guesthouse/pic1.jpg",
    description: "Ideal Guest House Mithi offers comfortable executive lodging, 24/7 availability, clean air-conditioned rooms, family-friendly atmosphere, and warm hospitality near Kishmir Chock Mithi, Tharparkar, Pakistan.",
    featured: true,
    gallery: [
      {
        id: "pic1",
        title: "Guest House Main Building & Entrance",
        image: "/images/guesthouse/pic1.jpg",
        category: "Exterior"
      },
      {
        id: "pic2",
        title: "Executive Guest Room Interior",
        image: "/images/guesthouse/pic2.jpg",
        category: "Rooms"
      },
      {
        id: "pic3",
        title: "Bed & Sitting Area Setup",
        image: "/images/guesthouse/pic3.jpg",
        category: "Rooms"
      },
      {
        id: "pic4",
        title: "Room Amenities & Air Conditioning",
        image: "/images/guesthouse/pic4.jpg",
        category: "Facilities"
      },
      {
        id: "pic5",
        title: "Guest Corridor & Suite View",
        image: "/images/guesthouse/pic5.jpg",
        category: "Corridor"
      },
      {
        id: "pic6",
        title: "Clean Modern Lodging Room",
        image: "/images/guesthouse/pic6.jpg",
        category: "Rooms"
      },
      {
        id: "pic7",
        title: "Guest House Premises & Parking Area",
        image: "/images/guesthouse/pic7.jpg",
        category: "Exterior"
      }
    ]
  }
};