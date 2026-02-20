"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function HistoryAutoReveal() {
    // Motion Value unificado para sincronización perfecta (0 -> 100 -> 0)
    const scanProgress = useMotionValue(0);

    // Transformaciones derivadas del mismo valor
    const clipPathParams = useTransform(scanProgress, (val) => `inset(0 ${100 - val}% 0 0)`);
    const laserPosition = useTransform(scanProgress, (val) => `${val}%`);

    useEffect(() => {
        // Animación del valor maestro
        const controls = animate(scanProgress, [0, 100, 0], {
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.5, 1]
        });

        return controls.stop;
    }, [scanProgress]);

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-zinc-950 py-20 md:flex-row md:py-0">
            {/* Mitad Izquierda: Contenido de Texto */}
            <div className="flex w-full flex-col justify-center px-8 sm:px-12 md:h-full md:w-1/2 md:p-16 lg:p-24">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col space-y-6"
                >
                    <h2 className="font-oswald text-5xl font-bold uppercase tracking-tighter text-white md:text-6xl lg:text-7xl">
                        LEGADO EN <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>
                            EVOLUCIÓN
                        </span>
                    </h2>

                    <div className="flex items-center gap-4">
                        <span className="h-px w-12 bg-[#FF5722]"></span>
                        <span className="font-manrope text-xl font-bold text-[#FF5722]">1989 — actualidad</span>
                    </div>

                    <p className="max-w-md font-manrope text-lg leading-relaxed text-zinc-400">
                        Más de 25 años de experiencia en el mercado automotriz, ofreciendo calidad y servicio a nuestros clientes.
                    </p>
                </motion.div>
            </div>

            {/* Mitad Derecha: Visor Temporal (Sincronizado & Panorámico) */}
            <div className="flex w-full items-center justify-center px-4 py-8 md:h-full md:w-full md:p-8">
                <div className="relative aspect-video w-full max-w-[95vw] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black">
                    {/* Imagen Base (Antes) - Grayscale + Antiguo */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center">
                        <Image
                            src="/images/Proveedoraantes.jpeg"
                            alt="Proveedora La Gasca en sus inicios — taller mecánico histórico en el barrio La Gasca, Quito"
                            fill
                            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 450px"
                            className="object-contain object-center grayscale filter contrast-125 sepia-[0.3]"
                            priority
                        />
                        {/* Overlay sutil para el fondo negro en caso de letterboxing de la imagen antigua */}
                    </div>

                    {/* Imagen Superior (Después) - Revelación Sincronizada */}
                    <motion.div
                        className="absolute inset-0 z-10 flex items-center justify-center"
                        style={{ clipPath: clipPathParams }}
                    >
                        <div className="relative h-full w-full">
                            <Image
                                src="/images/ProveedoraDespues2.jpeg"
                                alt="Proveedora La Gasca actualmente — taller automotriz moderno y venta de repuestos en Quito, Ecuador"
                                fill
                                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 450px"
                                className="object-contain object-center"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Línea Escáner Láser Sincronizada */}
                    <motion.div
                        className="absolute top-0 bottom-0 w-[2px] bg-[#FF5722] shadow-[0_0_15px_2px_rgba(255,87,34,0.8)] z-20"
                        style={{
                            left: laserPosition,
                            x: "-50%"
                        }}
                    />

                    {/* Labels Flotantes */}
                    <div className="absolute bottom-6 left-6 z-30 font-oswald text-xs font-bold tracking-widest text-white/50 uppercase bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        ORIGEN
                    </div>
                    <div className="absolute bottom-6 right-6 z-30 font-oswald text-xs font-bold tracking-widest text-[#FF5722] uppercase bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        ACTUALIDAD
                    </div>
                </div>
            </div>
        </section>
    );
}
