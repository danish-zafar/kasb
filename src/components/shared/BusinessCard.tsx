import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle2, ShoppingBag } from 'lucide-react';

export interface BusinessCardProps {
  id: string;
  title: string;
  category: string;
  address: string;
  price: string;
  description: string;
  whatsapp: string;
  logo?: string;
}

export default function BusinessCard({
  id,
  title,
  category,
  address,
  price,
  description,
  whatsapp,
  logo
}: BusinessCardProps) {

  // Primary image source fallback mechanism
  const imageSrc = (logo && logo.trim() !== "" && logo !== "/logo.jpg") 
    ? logo 
    : id === "quran-academy"
      ? "/images/education/Quranonline.png"
      : "/images/education/Quranonline.png";

  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    id === "quran-academy"
      ? `AoA! Mujhe ${title} ke courses aur free trial class ke hawale se maloomat chahiye.`
      : `AoA! Mujhe ${title} ke hawale se maloomat chahiye.`
  )}`;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col justify-between">
      <div className="p-5">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-gray-200 bg-slate-900 flex-shrink-0 flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="64px"
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{title}</h3>
              <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
            </div>
            <p className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-1">
              {category}
            </p>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-600 border-t border-gray-100 pt-3">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="line-clamp-2">{address}</span>
          </div>

          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span className="font-medium text-gray-800">{price}</span>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-3 line-clamp-2">
          {description}
        </p>
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs py-2.5 px-3 rounded-xl transition flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5" />
          WhatsApp
        </a>

        <Link
          href={`/listings/${id}`}
          className="flex-1 text-center bg-gray-900 hover:bg-black text-white font-medium text-xs py-2.5 px-3 rounded-xl transition"
        >
          More Details
        </Link>
      </div>
    </div>
  );
}