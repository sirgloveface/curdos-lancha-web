"use client";

import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function FaqSection() {
  const { t } = useLanguage();
  const tx = t.faq;

  return (
    <section id="faq" className="py-24 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-gold-400 font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{tx.tag}</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white">{tx.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tx.items.map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <h3 className="font-bold text-white text-base mb-2">{item.q}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
