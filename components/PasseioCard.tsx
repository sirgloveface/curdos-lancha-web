"use client";

import { Clock, Users, MapPin, Check, Sparkles } from "lucide-react";
import { PasseioLocalized } from "@/lib/i18n";
import { useLanguage } from "@/context/LanguageContext";

interface PasseioCardProps {
  passeio: PasseioLocalized;
  onSelect: (passeio: PasseioLocalized) => void;
}

export function PasseioCard({ passeio, onSelect }: PasseioCardProps) {
  const { t } = useLanguage();
  const tx = t.sectionPasseios;

  return (
    <article className="group relative flex flex-col bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl">
      {passeio.destaque && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500 text-slate-950 text-xs font-bold shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{tx.mostWanted}</span>
        </div>
      )}

      <div className="relative h-60 w-full overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${passeio.imagemUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-semibold text-slate-200">
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            {passeio.duracaoHoras} {tx.duration}
          </span>
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            {passeio.capacidadeMax} {tx.people}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1 text-xs text-slate-400 mb-1">
            <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span className="truncate">{tx.departure}: {passeio.localEmbarque}</span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {passeio.titulo}
          </h3>

          <p className="mt-2 text-sm text-slate-300 line-clamp-2 leading-relaxed">
            {passeio.descricao}
          </p>

          <div className="mt-4">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              {tx.stops}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {passeio.roteiro.map((ponto, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[11px] font-medium bg-ocean-950 border border-slate-800 text-slate-300"
                >
                  {ponto}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              {tx.included}
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-300">
              {passeio.incluso.slice(0, 6).map((item, i) => (
                <li key={i} className="flex items-center gap-1.5 truncate">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
              {tx.priceLabel}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-semibold text-white">R$</span>
              <span className="text-2xl font-black text-cyan-400">
                {passeio.valorBase.toLocaleString("pt-BR")}
              </span>
            </div>
          </div>

          <button
            onClick={() => onSelect(passeio)}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 text-sm"
          >
            {tx.bookBtn}
          </button>
        </div>
      </div>
    </article>
  );
}
