"use client";

import { useState } from "react";
import { PasseioLocalized } from "@/lib/i18n";
import { PasseioCard } from "@/components/PasseioCard";
import { BookingModal } from "@/components/BookingModal";
import { useLanguage } from "@/context/LanguageContext";

export function PasseiosSection() {
  const { passeios, t } = useLanguage();
  const tx = t.sectionPasseios;
  const [selectedPasseio, setSelectedPasseio] = useState<PasseioLocalized | null>(null);

  return (
    <section id="passeios" className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            {tx.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            {tx.title}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl">
            {tx.subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {passeios.map((passeio) => (
          <PasseioCard
            key={passeio.id}
            passeio={passeio}
            onSelect={setSelectedPasseio}
          />
        ))}
      </div>

      <BookingModal
        passeio={selectedPasseio}
        onClose={() => setSelectedPasseio(null)}
      />
    </section>
  );
}
