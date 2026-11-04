"use client";

import { Flame, Music, Waves, Shield, Anchor, Bath } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ICONS = [Anchor, Shield, Music, Flame, Bath, Waves];

export function BoatSpecs() {
  const { t } = useLanguage();
  const tx = t.specs;

  return (
    <section id="lancha" className="py-24 bg-ocean-950/60 border-y border-ocean-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            {tx.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            {tx.title}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {tx.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tx.items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
