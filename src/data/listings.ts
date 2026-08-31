export interface ListingItem {
  id: string;
  title: string;
  category: string;
  address: string;
  price: string;
  description: string;
  whatsapp: string;
  logo: string;
}

export const LISTINGS: ListingItem[] = [
  {
    id: "mhec-center",
    title: "Mental Health and Education Centre (MH&EC)",
    category: "Healthcare",
    address: "Islamabad / Online Services Nationwide",
    price: "Appointment Based",
    description: "Online psychological consultation, psychotherapy, corporate workshops, personality, employee & IQ assessments, and internship courses.",
    whatsapp: "923430520090",
    logo: "/images/psychology/logo.png"
  },
  {
    id: "soofi-saifullah-fragrances",
    title: "Soofi Saifullah Perfumes",
    category: "Perfumes & Fragrances",
    address: "Daharki Cinema Road, Daharki, Sindh",
    price: "PKR 2,000 - PKR 3,300",
    description: "Handcrafted Luxury Eau De Parfums with Exceptional Projection & Longevity.",
    whatsapp: "923363190175",
    logo: "/images/perfumes/logo.png"
  },
  {
    id: "royal-guest-house",
    title: "Royal Guest House",
    category: "Hospitality & Lodging",
    address: "Main City Area, Islamabad",
    price: "PKR 5,000 / Night",
    description: "Luxury rooms, 24/7 room service, air conditioning, and peaceful environment for family and business stays.",
    whatsapp: "923000000000",
    logo: "/images/hospitality/royal-logo.png" // Royal Guest House ka apna logo path
  }
];