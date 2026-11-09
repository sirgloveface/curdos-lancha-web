"use client";

import { useState, useTransition } from "react";
import { X, Calendar, Users, Phone, User, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { PasseioLocalized } from "@/lib/i18n";
import { criarReservaAction } from "@/app/actions/reserva";
import { useLanguage } from "@/context/LanguageContext";

interface BookingModalProps {
  passeio: PasseioLocalized | null;
  onClose: () => void;
}

export function BookingModal({ passeio, onClose }: BookingModalProps) {
  const { t, locale } = useLanguage();
  const tx = t.bookingModal;
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [confirmedUrl, setConfirmedUrl] = useState<string | null>(null);

  if (!passeio) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    formData.append("locale", locale);

    startTransition(async () => {
      const res = await criarReservaAction(formData);
      if (!res.success) {
        setError(res.error || "Ocorreu um erro ao processar.");
        return;
      }
      if (res.whatsappUrl) {
        setConfirmedUrl(res.whatsappUrl);
        window.open(res.whatsappUrl, "_blank");
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-ocean-950 border border-ocean-900 rounded-2xl shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedUrl ? (
          <div className="text-center py-6">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{tx.successTitle}</h3>
            <p className="text-slate-300 text-sm mb-6">{tx.successDesc}</p>
            <a
              href={confirmedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all"
            >
              <span>{tx.reopenBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="mt-4 text-xs text-slate-400 hover:text-white transition-colors block mx-auto"
            >
              {tx.closeBtn}
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
                {tx.tag}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{passeio.titulo}</h3>
              <p className="text-xs text-slate-400 mt-1">
                {passeio.duracaoHoras}h • {passeio.capacidadeMax} {t.sectionPasseios.people} • {locale === "es" ? "Paseo 100% Privado" : "Passeio 100% Privativo"}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-950/50 border border-red-800 text-red-200 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="passeioId" value={passeio.id} />
              <input type="hidden" name="passeioTitulo" value={passeio.titulo} />
              <input type="hidden" name="valorBase" value={passeio.valorBase} />
              <input type="hidden" name="locale" value={locale} />

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">{tx.nameLabel}</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    required
                    type="text"
                    name="clienteNome"
                    placeholder={tx.namePlaceholder}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">{tx.phoneLabel}</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    required
                    type="tel"
                    name="clienteTelefone"
                    placeholder={tx.phonePlaceholder}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">{tx.dateLabel}</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      required
                      type="date"
                      name="dataPasseio"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">{tx.passengersLabel}</label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      required
                      type="number"
                      name="quantidadePessoas"
                      defaultValue={4}
                      min={1}
                      max={passeio.capacidadeMax}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">{tx.notesLabel}</label>
                <textarea
                  name="observacoes"
                  rows={2}
                  placeholder={tx.notesPlaceholder}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 rounded-xl transition-all disabled:opacity-50"
              >
                {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>{tx.submitBtn}</span>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
