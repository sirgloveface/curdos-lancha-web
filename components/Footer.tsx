"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const tx = t.footer;
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5548999999999"}`;

  return (
    <footer id="contato" className="bg-black/90 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <Image
                  src="/img/curdos-lancha-logo.png"
                  alt="Curdo's Lancha Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full drop-shadow-md"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">CURDO'S LANCHA</span>
            </div>
            <p className="text-slate-400 max-w-md text-xs sm:text-sm leading-relaxed">
              {tx.desc}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{tx.boardingPoints}</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">{tx.popularRoutes}</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="#passeios" className="hover:text-white transition-colors">Da Lagoa ao Mar Aberto</Link></li>
              <li><Link href="#passeios" className="hover:text-white transition-colors">Ilha do Campeche</Link></li>
              <li><Link href="#passeios" className="hover:text-white transition-colors">Baía Funda ou Castelinho</Link></li>
              <li><Link href="#passeios" className="hover:text-white transition-colors">Costa da Lagoa</Link></li>
              <li><Link href="#passeios" className="hover:text-white transition-colors">Praia do Tinguá & Caixa d'Aço</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">{tx.contact}</h4>
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 transition-colors text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{tx.whatsappService}</span>
              </a>
              <p className="text-[11px] text-slate-500 leading-normal">
                {tx.serviceHours}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-amber-500/90">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{tx.weatherNotice}</span>
          </div>
          <p>© {new Date().getFullYear()} {tx.rights}</p>
        </div>
      </div>
    </footer>
  );
}
