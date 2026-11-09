import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PasseiosSection } from "@/components/PasseiosSection";
import { BoatSpecs } from "@/components/BoatSpecs";
import { GallerySection } from "@/components/GallerySection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-ocean-950 text-slate-100">
      <Navbar />
      <Hero />
      <PasseiosSection />
      <BoatSpecs />
      <GallerySection />
      <FaqSection />
      <Footer />
    </main>
  );
}