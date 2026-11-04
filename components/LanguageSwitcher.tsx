"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";
import { Locale } from "@/lib/i18n";

function FlagBR({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 720 504" className={`${className} rounded-[2px] shrink-0 shadow-sm`} aria-hidden="true">
      <rect width="720" height="504" fill="#009c3b" />
      <polygon points="360,42 672,252 360,462 48,252" fill="#ffdf00" />
      <circle cx="360" cy="252" r="126" fill="#002776" />
    </svg>
  );
}

function FlagES({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 750 500" className={`${className} rounded-[2px] shrink-0 shadow-sm`} aria-hidden="true">
      <rect width="750" height="500" fill="#c60b1e" />
      <rect y="125" width="750" height="250" fill="#ffc400" />
    </svg>
  );
}

const LANGUAGES: { code: Locale; label: string; Flag: typeof FlagBR }[] = [
  { code: "pt", label: "Português", Flag: FlagBR },
  { code: "es", label: "Español", Flag: FlagES },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];
  const ActiveFlag = activeLang.Flag;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-ocean-900/90 hover:bg-ocean-800/90 border border-ocean-700/60 rounded-full px-3 py-1.5 text-xs font-semibold text-white transition-all shadow-md"
        aria-expanded={isOpen}
      >
        <ActiveFlag />
        <span className="uppercase tracking-wider">{activeLang.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-ocean-950 border border-ocean-800 rounded-xl shadow-2xl p-1 z-50 animate-in fade-in zoom-in-95 duration-150">
          {LANGUAGES.map(({ code, label, Flag }) => {
            const isSelected = code === locale;
            return (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setLocale(code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  isSelected
                    ? "bg-cyan-500/15 text-cyan-400 font-bold"
                    : "text-slate-300 hover:bg-ocean-900/60 hover:text-white"
                }`}
              >
                <Flag />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
