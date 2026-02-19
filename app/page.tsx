"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import HistoryAutoReveal from "@/components/sections/HistoryAutoReveal";
import ServicesCollage from "@/components/sections/ServicesCollage";
import BrandsCarousel from "@/components/sections/BrandsCarousel";
import WhatsAppCard from "@/components/ui/WhatsAppCard";
import Preloader from "@/components/ui/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen w-full bg-black text-white">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Header />

      {/* SECCIÓN 1: HERO (SCROLLYTELLING) */}
      <Hero />

      {/* SECCIÓN 2: MANIFIESTO (DRIFTING TEXT) */}
      <Manifesto />

      {/* SECCIÓN 3: HISTORIA (AUTOMÁTICA) */}
      <HistoryAutoReveal />

      {/* SECCIÓN 4: SERVICIOS (COLLAGE HORIZONTAL) + DUALITY INTEGRADO */}
      <ServicesCollage />

      <WhatsAppCard />

      {/* SECCIÓN 5: DEBUG SECTION - PARA VERIFICAR SCROLL */}
      {/* SECCIÓN 5: MARCAS (CAROUSEL INFINITO) */}
      <BrandsCarousel />
    </main>
  );
}
