"use client";

import { useState } from "react";
import { Clock, Users, MapPin, Check, Sparkles, ChevronLeft, ChevronRight, MessageCircle, Calendar } from "lucide-react";
import { PasseioLocalized } from "@/lib/i18n";
import { useLanguage } from "@/context/LanguageContext";

interface PasseioCardProps {
  passeio: PasseioLocalized;
  onSelect: (passeio: PasseioLocalized) => void;
}

export function PasseioCard({ passeio, onSelect }: PasseioCardProps) {
  const { t, locale } = useLanguage();
  const tx = t.sectionPasseios;
  const images = passeio.imagens && passeio.imagens.length > 0 ? passeio.imagens : [passeio.imagemUrl];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const defaultPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5548992194523";
  const isEs = locale === "es";
  const whatsappMsg = isEs
    ? `¡Hola! Me interesa el paseo "${passeio.titulo}" en Florianópolis. ¿Podrían informarme tarifas y disponibilidad?`
    : `Olá! Tenho interesse no passeio "${passeio.titulo}" em Florianópolis. Gostaria de saber valores e datas disponíveis.`;
  const directWhatsappUrl = `https://wa.me/${defaultPhone}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <article className="group relative flex flex-col bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl">
      {passeio.destaque && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500 text-slate-950 text-xs font-bold shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{tx.mostWanted}jdjdjdjdjdj</span>
        </div>
      )}

      <div className="relative h-64 w-full overflow-hidden bg-slate-950">
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${images[currentImgIndex]}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/20" />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md opacity-80 hover:opacity-100 transition-all border border-white/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Próxima foto"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md opacity-80 hover:opacity-100 transition-all border border-white/10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="absolute top-4 right-4 z-20 flex gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImgIndex ? "bg-cyan-400 w-4" : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Ver foto ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-semibold text-slate-200 z-10">
          <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            {passeio.duracaoHoras} {tx.duration}
          </span>
          <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
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
              {passeio.incluso.slice(0, 6).map((item, i) => {
                const isNegative = item.startsWith("Sem ") || item.startsWith("Sin ");
                return (
                  <li key={i} className="flex items-center gap-1.5 truncate">
                    <Check className={`w-3.5 h-3.5 shrink-0 ${isNegative ? "text-amber-400" : "text-emerald-400"}`} />
                    <span className={`truncate ${isNegative ? "text-slate-400 italic" : "text-slate-200"}`}>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-950/60 p-3 rounded-2xl border border-slate-800/70">
            <div className="flex items-center gap-2.5 px-1">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div>
                <span className="text-xs font-bold text-slate-200 block leading-tight">
                  {tx.whatsappStatus}
                </span>
                <span className="text-[11px] text-slate-400 block leading-tight mt-0.5">
                  {tx.whatsappSub}
                </span>
              </div>
            </div>

            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/60 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group/btn border border-emerald-400/30 shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100 group-hover/btn:scale-110 transition-transform" />
              <span>{tx.whatsappCta}</span>
            </a>
          </div>

          <div className="flex justify-end pr-1">
            <button
              onClick={() => onSelect(passeio)}
              className="text-[11px] text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 underline-offset-4 hover:underline"
            >
              <Calendar className="w-3 h-3 text-cyan-400/80" />
              <span>{tx.preBookModal}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}