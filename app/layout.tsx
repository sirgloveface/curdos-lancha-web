import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Curdo's Lancha | Passeios Náuticos em Florianópolis",
  description: "Aluguel de lancha e passeios privativos em Florianópolis. Ilha do Campeche, Baía dos Golfinhos, Costa da Lagoa e Tinguá.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-ocean-950 text-slate-100 antialiased selection:bg-gold-500 selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
