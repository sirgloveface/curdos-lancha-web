"use client";

import { useState } from "react";
import { Camera, Compass, Maximize2, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface GalleryImage {
  url: string;
  category: "drone" | "camera";
  captionPt: string;
  captionEs: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: "/img/Drone/Drone%20-%20Curdos%20Lancha%20(1).JPG",
    category: "drone",
    captionPt: "Navegação em mar aberto rumo às ilhas",
    captionEs: "Navegación en mar abierto rumbo a las islas",
  },
  {
    url: "/img/Camera/Camera%20-%20Curdos%20Lancha%20(2).jpg",
    category: "camera",
    captionPt: "Deck de proa espaçoso para banho de sol",
    captionEs: "Amplio deck de proa para tomar sol",
  },
  {
    url: "/img/Drone/Drone%20-%20Curdos%20Lancha%20(5).JPG",
    category: "drone",
    captionPt: "Águas cristalinas e preservadas de Florianópolis",
    captionEs: "Aguas cristalinas y preservadas de Florianópolis",
  },
  {
    url: "/img/Camera/Camera%20-%20Curdos%20Lancha%20(13).jpg",
    category: "camera",
    captionPt: "Cockpit confortável com área gourmet e assentos estofados",
    captionEs: "Cockpit cómodo con área gourmet y asientos acolchados",
  },
  {
    url: "/img/Drone/Drone%20-%20Curdos%20Lancha%20(14).JPG",
    category: "drone",
    captionPt: "Vista aérea do ancoradouro na Baía Funda",
    captionEs: "Vista aérea del fondeadero en Bahía Funda",
  },
  {
    url: "/img/Camera/Camera%20-%20Curdos%20Lancha%20(16).jpg",
    category: "camera",
    captionPt: "Posto de comando moderno e navegação suave",
    captionEs: "Puesto de mando moderno y navegación suave",
  },
  {
    url: "/img/Drone/Drone%20-%20Curdos%20Lancha%20(18).JPG",
    category: "drone",
    captionPt: "Enseadas calmas para parada e mergulho",
    captionEs: "Ensenadas calmas para parada y buceo",
  },
  {
    url: "/img/Camera/Camera%20-%20Curdos%20Lancha%20(21).JPG",
    category: "camera",
    captionPt: "Confraternização VIP com amigos e família",
    captionEs: "Celebración VIP con amigos y familia",
  },
  {
    url: "/img/Drone/Drone%20-%20Curdos%20Lancha%20(24).JPG",
    category: "drone",
    captionPt: "Cenários deslumbrantes da Costa Leste da Ilha",
    captionEs: "Escenarios deslumbrantes de la Costa Este de la Isla",
  },
  {
    url: "/img/Camera/Camera%20-%20Curdos%20Lancha%20(26).JPG",
    category: "camera",
    captionPt: "Cabine aconchegante com banheiro privativo",
    captionEs: "Cabina acogedora con baño privado",
  },
  {
    url: "/img/Drone/Drone%20-%20Curdos%20Lancha%20(35).JPG",
    category: "drone",
    captionPt: "Curdo's Lancha em velocidade de cruzeiro",
    captionEs: "Curdo's Lancha a velocidad de crucero",
  },
  {
    url: "/img/Camera/Camera%20-%20Curdos%20Lancha%20(33).JPG",
    category: "camera",
    captionPt: "Plataforma de popa com escada e ducha de água doce",
    captionEs: "Plataforma de popa con escalera y ducha de agua dulce",
  },
];

export function GallerySection() {
  const { locale } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | "drone" | "camera">("all");
  const [previewImage, setPreviewImage] = useState<GalleryImage | null>(null);

  const isEs = locale === "es";

  const filtered = GALLERY_IMAGES.filter((img) => {
    if (activeFilter === "all") return true;
    return img.category === activeFilter;
  });

  return (
    <section id="galeria" className="py-24 bg-ocean-950 relative border-t border-ocean-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              {isEs ? "Galería de Fotos" : "Galeria de Fotos"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              {isEs ? "Momentos Inolvidables en Floripa" : "Momentos Inesquecíveis em Floripa"}
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl">
              {isEs
                ? "Explora fotos reales de nuestra lancha tomadas con dron y cámara profesional durante los paseos."
                : "Explore fotos reais da nossa lancha capturadas por drone e câmera profissional durante os passeios."}
            </p>
          </div>

          <div className="inline-flex p-1 bg-slate-900/90 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === "all"
                  ? "bg-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {isEs ? "Todas" : "Todas"}
            </button>
            <button
              onClick={() => setActiveFilter("drone")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === "drone"
                  ? "bg-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                {isEs ? "Drone Aéreo" : "Drone Aéreo"}
              </span>
            </button>
            <button
              onClick={() => setActiveFilter("camera")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === "camera"
                  ? "bg-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5" />
                {isEs ? "A Bordo" : "A Bordo"}
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((item, index) => (
            <div
              key={index}
              onClick={() => setPreviewImage(item)}
              className="group relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl bg-slate-900"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.url}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-cyan-400 transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 z-10">
                <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-700/50 mb-1">
                  {item.category === "drone" ? (isEs ? "Dron" : "Drone") : (isEs ? "A Bordo" : "A Bordo")}
                </span>
                <p className="text-xs text-slate-200 line-clamp-1 font-medium">
                  {isEs ? item.captionEs : item.captionPt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Fechar prévia"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black">
              <div
                className="w-full h-full bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${previewImage.url}')` }}
              />
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-0.5">
                  {previewImage.category === "drone" ? (isEs ? "Vista Aérea com Dron" : "Vista Aérea com Drone") : (isEs ? "Fotografía a Bordo" : "Fotografia a Bordo")}
                </span>
                <p className="text-sm text-slate-200 font-medium">
                  {isEs ? previewImage.captionEs : previewImage.captionPt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
