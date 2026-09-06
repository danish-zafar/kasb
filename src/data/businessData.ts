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
  "quran-academy": {
    id: "quran-academy",
    title: "Online Quran Academy",
    tagline: "Learn Quran Online with Tajweed & Certified Islamic Tutors",
    category: "Education",
    subCategory: "Quran Academy & Online Classes",
    city: "Online",
    district: "Global",
    address: "Online Classes via Zoom / Skype",
    priceRange: "Contact for Fee",
    serviceType: "Online Quran Teaching",
    whatsapp: "923063621318",
    phone: "+92 306 3621318",
    hours: "24/7 Flexible Timings",
    reviews: "4.9 ★ (120+ Students)",
    facebook: "Online Quran Academy",
    verified: true,
    logo: "/images/education/Quranonline.png",
    bannerImage: "/images/education/Quranonline.png",
    description: "Online Quran Academy offers flexible, high-quality one-on-one Quran learning for kids and adults. We provide certified male & female tutors for Nazra, Hifz, Tajweed, and foundational Islamic studies globally.",
    featured: true,
    products: [
      {
        id: "qa-1",
        name: "Nazra Quran with Tajweed",
        description: "Master Quranic recitation with precise Tajweed pronunciation rules under expert guidance.",
        image: "/images/education/Quran1.jpeg",
        price: "Contact for Fee",
        badge: "Popular",
        category: "Quran Courses",
        details: {
          overview: "1-on-1 live interactive sessions tailored for kids and beginners.",
          duration: "30-45 mins per session",
          mode: "Online (Zoom / Skype)"
        }
      },
      {
        id: "qa-2",
        name: "Quran Memorization (Hifz)",
        description: "Structured step-by-step Quran memorization program with systematic daily revision.",
        image: "/images/education/hifz.jpg",
        price: "Contact for Fee",
        badge: "Featured",
        category: "Quran Courses",
        details: {
          overview: "Comprehensive Hifz plan with memory techniques and tracking.",
          duration: "1 Hour per session",
          mode: "Online (Zoom / Skype)"
        }
      },
      {
        id: "qa-3",
        name: "Islamic Studies & Daily Duas",
        description: "Learn essential Islamic knowledge, daily masnoon duas, prayer rules, and moral ethics.",
        image: "/images/education/dua.jpg",
        price: "Contact for Fee",
        category: "Islamic Studies",
        details: {
          overview: "Basic Islamic tarbiyah for young students and converts.",
          duration: "30 mins per session",
          mode: "Online (Zoom / Skype)"
        }
      }
    ]
  },
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
  },
  "dr-azad-sindhi-vet-care": {
    id: "dr-azad-sindhi-vet-care",
    title: "Dr Azad Sindhi Vet Care Services",
    tagline: "Professional Veterinary Doctor & Pet Care Specialist",
    category: "Veterinary",
    subCategory: "Pet Care & Veterinary Doctor",
    city: "Daharki",
    district: "Ghotki",
    address: "Al-Fatah Model Town Daharki",
    priceRange: "2k to 5k PKR",
    serviceType: "Veterinary Care & Vaccination",
    whatsapp: "923133100011",
    phone: "0313 3100011",
    hours: "Flexible Appointments via WhatsApp",
    reviews: "4.9 ★ (Pet Care Specialist)",
    facebook: "Dr Azad Sindhi Vet Care Services",
    verified: false,
    logo: "/images/veterinary/logo.svg",
    bannerImage: "/images/veterinary/logo.svg",
    description: "Professional Veterinary Doctor (S.A.U Tandojam, R.V.M.P Islamabad). Only Pet Animals Vaccination Specialist... Vaccines available on low prices from market rates just like Anti-Rabbies, Hair Fall, internal Worms, ticks, Mites, Seasonal Diseases. Provide Processed Hygiene Food For pet animals (Cats, Dogs).",
    featured: true,
    products: [
      {
        id: "vet-vaccination",
        name: "Pet Animal Vaccination & Health Care",
        category: "Vaccination",
        description: "Specialist vaccines & treatments for Anti-Rabies, Hair Fall, internal Worms, Ticks, Mites & Seasonal Diseases at low market rates.",
        image: "/images/veterinary/vaccine.svg",
        badge: "Specialist",
        price: "2k to 5k PKR",
        details: {
          overview: "Comprehensive vaccination & health treatment for pet animals.",
          duration: "Appointment Based",
          mode: "Clinic / On-Demand Service"
        }
      },
      {
        id: "pet-food",
        name: "Processed Hygiene Food for Pets (Cats & Dogs)",
        category: "Pet Food",
        description: "Nutritious & processed hygiene food formulated for cats and dogs to maintain health and vitality.",
        image: "/images/veterinary/petfood.svg",
        badge: "Hygiene Food",
        price: "Contact for Rates",
        details: {
          overview: "Specially processed hygiene food for cats and dogs.",
          duration: "Available on Order",
          mode: "Direct Delivery / Pickup"
        }
      },
      {
        id: "doctor-consultation",
        name: "Veterinary Doctor Consultation & Appointment",
        category: "Consultation",
        description: "Professional veterinary doctor consultation (S.A.U Tandojam, R.V.M.P Islamabad). Book appointment easily on WhatsApp.",
        image: "/images/veterinary/doctor.svg",
        badge: "Appointment",
        price: "2k to 5k PKR",
        details: {
          overview: "1-on-1 veterinary doctor health consultation and diagnosis.",
          duration: "Appointment Based",
          mode: "WhatsApp Appointment / Clinic Visit"
        }
      }
    ]
  },
  "jaweria-designer": {
    id: "jaweria-designer",
    title: "Jaweria Designer | Graphic Designer",
    tagline: "Creative & Professional Visual Designs, Branding & Freelance Services Worldwide",
    category: "Graphic Designer",
    subCategory: "Graphic Designing & Brand Identity",
    city: "Sadiqabad",
    district: "Rahim Yar Khan",
    address: "Awami colony Sadiq Abad",
    priceRange: "15000 pkr",
    serviceType: "Graphic Design & Branding",
    whatsapp: "923062635726",
    phone: "0306 2635726",
    hours: "Available for Freelance & Online Clients Worldwide",
    reviews: "5.0 ★ (Creative Visual Designer)",
    verified: false,
    logo: "/images/graphic-design/logo.svg",
    bannerImage: "/images/graphic-design/logo.svg",
    description: "I’m Jaweria, a Graphic Designer specializing in creative and professional visual designs. I provide Logo Design, Social Media Posts, Business Cards, Posters, Flyers, Banners, and Branding Designs. I focus on clean, modern, and engaging designs tailored to each client’s needs. Available for freelance projects and online clients worldwide.",
    featured: true,
    products: [
      {
        id: "logo-design",
        name: "Logo Design",
        category: "Branding",
        description: "Clean, modern, and memorable custom logo design tailored for your business and brand identity.",
        image: "/images/graphic-design/logo-design.svg",
        badge: "Popular",
        price: "15000 pkr",
        details: {
          overview: "Custom vector logo design with high-resolution source files & brand assets.",
          duration: "Project Based",
          mode: "Online / Freelance Worldwide"
        }
      },
      {
        id: "social-media-posts",
        name: "Social Media Posts",
        category: "Social Media",
        description: "Engaging social media post designs, ad creatives, and banners for Instagram, Facebook, and LinkedIn.",
        image: "/images/graphic-design/social-media.svg",
        badge: "Creative",
        price: "15000 pkr",
        details: {
          overview: "High-converting social media visual posts & banners.",
          duration: "Project Based",
          mode: "Online / Freelance Worldwide"
        }
      },
      {
        id: "business-cards",
        name: "Business Cards",
        category: "Print Design",
        description: "Professional and elegant business card designs ready for high-quality printing.",
        image: "/images/graphic-design/business-cards.svg",
        badge: "Print Ready",
        price: "15000 pkr",
        details: {
          overview: "Double-sided premium business card design with print files.",
          duration: "Project Based",
          mode: "Online / Freelance Worldwide"
        }
      },
      {
        id: "posters-flyers-banners",
        name: "Posters, Flyers & Banners",
        category: "Marketing",
        description: "Eye-catching promotional posters, event flyers, web banners, and billboard designs.",
        image: "/images/graphic-design/posters-banners.svg",
        badge: "Promotional",
        price: "15000 pkr",
        details: {
          overview: "Custom posters, flyers, and digital/print banners.",
          duration: "Project Based",
          mode: "Online / Freelance Worldwide"
        }
      },
      {
        id: "branding-designs",
        name: "Branding Designs",
        category: "Branding",
        description: "Complete corporate branding packages including color palettes, typography, and brand identity guidelines.",
        image: "/images/graphic-design/branding-designs.svg",
        badge: "Full Package",
        price: "15000 pkr",
        details: {
          overview: "Complete visual identity and brand style guide creation.",
          duration: "Project Based",
          mode: "Online / Freelance Worldwide"
        }
      }
    ]
  }
};