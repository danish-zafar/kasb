"use client";

import { useState, useRef, useEffect } from "react";
import { Search, MapPin, ChevronDown, Check, X } from "lucide-react";
import { PAKISTAN_CITIES } from "@/data/pakistanCities";

interface SearchableCitySelectProps {
  value: string;
  onChange: (city: string) => void;
  placeholder?: string;
  className?: string;
  lightTheme?: boolean;
}

export default function SearchableCitySelect({
  value,
  onChange,
  placeholder = "All Cities (Pakistan)",
  className = "",
  lightTheme = true
}: SearchableCitySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const filteredCities = PAKISTAN_CITIES.filter((city) =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (city: string) => {
    onChange(city);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-2 px-3.5 py-3 rounded-xl border text-xs font-semibold transition text-left cursor-pointer ${
          lightTheme
            ? "bg-slate-50 border-slate-200 hover:border-[#058A39] text-slate-800 focus:bg-white"
            : "bg-slate-900 border-slate-700 hover:border-[#058A39] text-white"
        }`}
      >
        <div className="flex items-center gap-2 truncate">
          <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className={`truncate font-bold ${value ? (lightTheme ? "text-slate-900" : "text-white") : "text-slate-400"}`}>
            {value || placeholder}
          </span>
        </div>
        
        <div className="flex items-center gap-1 shrink-0">
          {value && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                onChange("");
              }}
              className="p-1 hover:bg-slate-200/50 rounded-full transition text-slate-400 hover:text-slate-600"
              title="Clear selection"
            >
              <X className="w-3.5 h-3.5" />
            </span>
          )}
          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>

      {/* Search Dropdown Popover */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white rounded-2xl shadow-2xl border border-slate-200 max-h-72 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150">
          
          {/* Search Bar inside Dropdown */}
          <div className="p-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
            <Search className="w-4 h-4 text-[#058A39] shrink-0 ml-1" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Type city name to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs text-slate-800 font-semibold placeholder-slate-400 outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-slate-400 hover:text-slate-600 text-xs p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Cities List */}
          <div className="overflow-y-auto p-1.5 space-y-0.5 max-h-56 scrollbar-thin">
            
            {/* All Cities Option */}
            <button
              type="button"
              onClick={() => handleSelect("")}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-between ${
                !value ? "bg-emerald-50 text-[#058A39]" : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span>All Cities (Pakistan)</span>
              {!value && <Check className="w-4 h-4 text-[#058A39]" />}
            </button>

            {filteredCities.length === 0 ? (
              <div className="px-4 py-6 text-center text-xs text-slate-400 font-medium">
                No matching cities found for &quot;{searchQuery}&quot;
              </div>
            ) : (
              filteredCities.map((city) => {
                const isSelected = value === city;
                return (
                  <button
                    key={city}
                    type="button"
                    onClick={() => handleSelect(city)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition flex items-center justify-between ${
                      isSelected
                        ? "bg-emerald-50 text-[#058A39] font-bold"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span>{city}</span>
                    {isSelected && <Check className="w-4 h-4 text-[#058A39]" />}
                  </button>
                );
              })
            )}

          </div>

          <div className="p-2 bg-slate-50 border-t border-slate-100 text-[10px] text-slate-400 text-center font-medium">
            Showing {filteredCities.length} Pakistani cities (A - Z)
          </div>

        </div>
      )}

    </div>
  );
}
