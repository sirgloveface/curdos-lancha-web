import { Locale } from "./i18n";

const DEFAULT_PHONE = "5548992194523";

interface WhatsAppBookingPayload {
  passeioTitulo: string;
  dataPasseio?: string;
  quantidadePessoas?: number;
  clienteNome?: string;
  valorBase?: number;
  locale?: Locale;
}

export function buildWhatsAppBookingUrl(payload: WhatsAppBookingPayload): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || DEFAULT_PHONE;
  const isEs = payload.locale === "es";

  const lines = isEs
    ? [
        "⚓ *Curdo's Lancha - Solicitud de Paseo*",
        `• *Paseo:* ${payload.passeioTitulo}`,
        payload.dataPasseio ? `• *Fecha Deseada:* ${payload.dataPasseio}` : null,
        payload.quantidadePessoas ? `• *Pasajeros:* ${payload.quantidadePessoas}` : null,
        payload.clienteNome ? `• *Cliente:* ${payload.clienteNome}` : null,
        "",
        "¡Hola! Quisiera consultar tarifas y disponibilidad para este paseo en lancha.",
      ]
    : [
        "⚓ *Curdo's Lancha - Solicitação de Passeio*",
        `• *Passeio:* ${payload.passeioTitulo}`,
        payload.dataPasseio ? `• *Data Desejada:* ${payload.dataPasseio}` : null,
        payload.quantidadePessoas ? `• *Passageiros:* ${payload.quantidadePessoas}` : null,
        payload.clienteNome ? `• *Cliente:* ${payload.clienteNome}` : null,
        "",
        "Olá! Gostaria de consultar valores e disponibilidade para este passeio de lancha.",
      ];

  const text = encodeURIComponent(lines.filter(Boolean).join("\n"));
  return `https://wa.me/${phone}?text=${text}`;
}
