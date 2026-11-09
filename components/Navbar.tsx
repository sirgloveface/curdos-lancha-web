"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
  const { t, locale } = useLanguage();
  const greeting = locale === "es"
    ? "¡Hola! Quisiera información sobre los paseos en lancha en Florianópolis."
    : "Olá! Gostaria de informações sobre os passeios de lancha em Florianópolis.";

  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5548999999999"}?text=${encodeURIComponent(greeting)}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ocean-950/80 backdrop-blur-md border-b border-ocean-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
            <Image
              src="/img/curdos-lancha-logo.png"
              alt="Curdo's Lancha Logo"
              width={64}
              height={64}
              className="object-contain w-full h-full drop-shadow-md group-hover:scale-105 transition-transform"
              priority
            />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block leading-none">CURDO'S LANCHA</span>
            <span className="text-[11px] uppercase tracking-widest text-slate-400 block mt-1 font-medium">Florianópolis • SC</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="#passeios" className="hover:text-gold-400 transition-colors">{t.nav.passeios}</Link>
          <Link href="#lancha" className="hover:text-gold-400 transition-colors">{t.nav.lancha}</Link>
          <Link href="#galeria" className="hover:text-gold-400 transition-colors">{t.nav.fotos}</Link>
          <Link href="#faq" className="hover:text-gold-400 transition-colors">{t.nav.faq}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.nav.whatsappBtn}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
