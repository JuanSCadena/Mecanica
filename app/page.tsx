"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import HistoryAutoReveal from "@/components/sections/HistoryAutoReveal";
import ServicesCollage from "@/components/sections/ServicesCollage";
import BrandsCarousel from "@/components/sections/BrandsCarousel";
import ShaderSection from "@/components/sections/ShaderSection";
import StatsSection from "@/components/sections/StatsSection";
import ContactSection from "@/components/sections/ContactSection";
import WhatsAppCard from "@/components/ui/WhatsAppCard";
import Preloader from "@/components/ui/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen w-full bg-black text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Header />

      {/* SECCIÓN 1: HERO (SCROLLYTELLING) */}
      <div id="inicio">
        <Hero />
      </div>

      {/* SECCIÓN 2: MANIFIESTO (DRIFTING TEXT) */}
      <div id="nosotros">
        <Manifesto />
      </div>

      {/* SECCIÓN 3: HISTORIA (AUTOMÁTICA) */}
      <div id="historia">
        <HistoryAutoReveal />
      </div>

      {/* SECCIÓN 4: SERVICIOS (COLLAGE HORIZONTAL) + DUALITY INTEGRADO */}
      <div id="servicios">
        <ServicesCollage />
      </div>

      {/* TRANSICIÓN 1: Fade Up + Scale */}
      <motion.div
        id="cuidados"
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <ShaderSection />
      </motion.div>

      {/* TRANSICIÓN 2: Slide desde la izquierda */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <WhatsAppCard />
      </motion.div>

      {/* TRANSICIÓN 3: Fade con rotación sutil */}
      <motion.div
        initial={{ opacity: 0, y: 80, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        style={{ perspective: 1200 }}
      >
        <StatsSection />
      </motion.div>

      {/* TRANSICIÓN 4: Slide Up con rebote */}
      <motion.div
        id="marcas"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <BrandsCarousel />
      </motion.div>

      {/* TRANSICIÓN 5: Fade elegante */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <ContactSection />
      </motion.div>
    </main>
  );
}
