"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { buildWhatsAppBookingUrl } from "@/lib/whatsapp";
import { Locale } from "@/lib/i18n";

const ReservaSchema = z.object({
  passeioId: z.string().min(1, "Selecione um passeio"),
  passeioTitulo: z.string().min(1),
  clienteNome: z.string().min(3, "Nome completo obrigatório"),
  clienteTelefone: z.string().min(8, "Telefone inválido"),
  clienteEmail: z.string().email("E-mail inválido").optional().or(z.literal("")),
  dataPasseio: z.string().min(1, "Data obrigatória"),
  quantidadePessoas: z.coerce.number().min(1).max(9, "Capacidade máxima de 9 pessoas"),
  valorBase: z.coerce.number().positive(),
  observacoes: z.string().optional(),
  locale: z.enum(["pt", "es"]).default("pt"),
});

export type ReservaInput = z.infer<typeof ReservaSchema>;

export interface ReservaResult {
  success: boolean;
  whatsappUrl?: string;
  error?: string;
}

export async function criarReservaAction(formData: FormData): Promise<ReservaResult> {
  const rawData = {
    passeioId: formData.get("passeioId"),
    passeioTitulo: formData.get("passeioTitulo"),
    clienteNome: formData.get("clienteNome"),
    clienteTelefone: formData.get("clienteTelefone"),
    clienteEmail: formData.get("clienteEmail"),
    dataPasseio: formData.get("dataPasseio"),
    quantidadePessoas: formData.get("quantidadePessoas"),
    valorBase: formData.get("valorBase"),
    observacoes: formData.get("observacoes"),
    locale: formData.get("locale") || "pt",
  };

  const parsed = ReservaSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message || "Dados inválidos",
    };
  }

  const { data } = parsed;

  try {
    if (process.env.DATABASE_URL) {
      await prisma.reserva.create({
        data: {
          passeioId: data.passeioId,
          clienteNome: data.clienteNome,
          clienteTelefone: data.clienteTelefone,
          clienteEmail: data.clienteEmail || null,
          dataPasseio: new Date(data.dataPasseio),
          quantidadePessoas: data.quantidadePessoas,
          valorTotal: data.valorBase,
          observacoes: data.observacoes || null,
          status: "PENDENTE",
        },
      });
    }
  } catch (err) {
    console.warn("DB offline. Redirecionando direto para WhatsApp:", err);
  }

  const whatsappUrl = buildWhatsAppBookingUrl({
    passeioTitulo: data.passeioTitulo,
    dataPasseio: data.dataPasseio,
    quantidadePessoas: data.quantidadePessoas,
    clienteNome: data.clienteNome,
    valorBase: data.valorBase,
    locale: data.locale as Locale,
  });

  return {
    success: true,
    whatsappUrl,
  };
}
