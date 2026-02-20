"use client";

import { ShaderAnimation } from "@/components/ui/shader-animation";
import { FeatureSteps } from "@/components/ui/feature-section";

const motorCareFeatures = [
    {
        step: "Paso 1",
        title: "Cambio de Aceite Regular",
        content:
            "El aceite lubrica y protege las piezas internas del motor. Cambiarlo cada 5,000–10,000 km previene el desgaste prematuro y mantiene el rendimiento óptimo.",
        image:
            "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop",
    },
    {
        step: "Paso 2",
        title: "Sistema de Refrigeración",
        content:
            "Un motor sobrecalentado puede sufrir daños irreversibles. Verifica niveles de refrigerante, mangueras y el estado del radiador periódicamente.",
        image:
            "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2070&auto=format&fit=crop",
    },
    {
        step: "Paso 3",
        title: "Filtros en Buen Estado",
        content:
            "Los filtros de aire, aceite y combustible evitan que impurezas dañen el motor. Reemplázalos según las recomendaciones del fabricante.",
        image:
            "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2074&auto=format&fit=crop",
    },
    {
        step: "Paso 4",
        title: "Diagnóstico Preventivo",
        content:
            "El escaneo computarizado detecta fallas antes de que se conviertan en reparaciones costosas. Agenda tu diagnóstico cada 6 meses.",
        image:
            "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=2080&auto=format&fit=crop",
    },
];

export default function ShaderSection() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Shader background — full bleed */}
            <div className="absolute inset-0 z-0">
                <ShaderAnimation />
            </div>

            {/* Semi-transparent overlay for readability */}
            <div className="absolute inset-0 z-[1] bg-black/60" />

            {/* Content on top */}
            <div className="relative z-10 dark min-h-screen flex items-center">
                <FeatureSteps
                    features={motorCareFeatures}
                    title="¿Por Qué Cuidar Tu Motor?"
                    autoPlayInterval={4000}
                    imageHeight="h-[500px]"
                    className="py-20 text-white w-full"
                />
            </div>
        </section>
    );
}
