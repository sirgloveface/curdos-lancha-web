"use client";

import Link from "next/link";
import { MessageCircle, Compass, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t, locale } = useLanguage();
  const ctaMsg = locale === "es"
    ? "¡Hola! Quiero consultar fechas disponibles para paseo en lancha en Floripa."
    : "Olá! Quero consultar datas disponíveis para passeio de lancha em Floripa.";

  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5548999999999"}?text=${encodeURIComponent(ctaMsg)}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center brightness-[0.38] scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/img/Drone/Drone%20-%20Curdos%20Lancha%20(1).JPG')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ocean-900/80 border border-ocean-600/30 text-ocean-100 text-xs font-semibold mb-6">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{t.hero.badge}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1]">
          {t.hero.titleMain} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-gold-400">
            {t.hero.titleGradient}
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
          <Link
            href="#passeios"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-[1.02]"
          >
            <Compass className="w-5 h-5" />
            <span>{t.hero.exploreBtn}</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-all"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>{t.hero.whatsappCta}</span>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-800/80 max-w-3xl">
          <div>
            <span className="block text-2xl sm:text-3xl font-extrabold text-white">100%</span>
            <span className="text-xs uppercase tracking-wider text-slate-400">{t.hero.stats.privativo}</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-extrabold text-white">9</span>
            <span className="text-xs uppercase tracking-wider text-slate-400">{t.hero.stats.capacidade}</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-extrabold text-white">Incluso</span>
            <span className="text-xs uppercase tracking-wider text-slate-400">{t.hero.stats.combustivel}</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-extrabold text-white">VIP</span>
            <span className="text-xs uppercase tracking-wider text-slate-400">{t.hero.stats.estrutura}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
