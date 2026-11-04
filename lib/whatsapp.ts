import { Locale } from "./i18n";

const DEFAULT_PHONE = "5548999999999";

interface WhatsAppBookingPayload {
  passeioTitulo: string;
  dataPasseio: string;
  quantidadePessoas: number;
  clienteNome?: string;
  valorBase?: number;
  locale?: Locale;
}

export function buildWhatsAppBookingUrl(payload: WhatsAppBookingPayload): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || DEFAULT_PHONE;
  const isEs = payload.locale === "es";

  const lines = isEs
    ? [
        "⚓ *Curdo's Lancha - Solicitud de Reserva*",
        `• *Paseo:* ${payload.passeioTitulo}`,
        `• *Fecha:* ${payload.dataPasseio}`,
        `• *Pasajeros:* ${payload.quantidadePessoas}`,
        payload.clienteNome ? `• *Cliente:* ${payload.clienteNome}` : null,
        payload.valorBase ? `• *Precio Estimado:* R$ ${payload.valorBase.toLocaleString("pt-BR")}` : null,
        "",
        "¡Hola! Quisiera consultar la disponibilidad de la lancha para esta fecha.",
      ]
    : [
        "⚓ *Curdo's Lancha - Solicitação de Reserva*",
        `• *Passeio:* ${payload.passeioTitulo}`,
        `• *Data:* ${payload.dataPasseio}`,
        `• *Pessoas:* ${payload.quantidadePessoas}`,
        payload.clienteNome ? `• *Cliente:* ${payload.clienteNome}` : null,
        payload.valorBase ? `• *Valor Estimado:* R$ ${payload.valorBase.toLocaleString("pt-BR")}` : null,
        "",
        "Olá! Gostaria de confirmar a disponibilidade da lancha para esta data.",
      ];

  const text = encodeURIComponent(lines.filter(Boolean).join("\n"));
  return `https://wa.me/${phone}?text=${text}`;
}
