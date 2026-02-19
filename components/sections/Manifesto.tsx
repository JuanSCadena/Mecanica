"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
    const lineVariants = {
        hidden: { opacity: 0.2, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    const content = [
        { text: "CUIDANDO EL", accent: "CORAZÓN DE TU AUTO", full: false },
        { text: "DESDE HACE", accent: "MÁS DE 20 AÑOS.", full: false },
        { text: "ALIANZAS CON LAS", accent: "MEJORES MARCAS,", full: false },
        { text: "PARA DARTE EL", accent: "CUIDADO EXPERTO", full: false },
        { text: "QUE MERECES, AL", accent: "PRECIO JUSTO.", full: false },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-zinc-900 py-32 sm:py-48">
            {/* Animated Background Pattern (Lando Style - CSS Animation) */}
            <div
                className="absolute inset-0 z-0 opacity-50 animate-drift"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                    backgroundRepeat: "repeat",
                }}
            />

            <div className="container relative z-10 mx-auto px-6 max-w-6xl">
                <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
                    {content.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-10%" }}
                            variants={lineVariants}
                            transition={{ delay: index * 0.15 }}
                            className="flex flex-wrap justify-center gap-x-3 md:gap-x-5"
                        >
                            {item.full ? (
                                <span className="font-oswald text-3xl font-bold uppercase tracking-tighter text-white md:text-5xl lg:text-7xl">
                                    {item.text}
                                </span>
                            ) : (
                                <>
                                    <span className="font-oswald text-3xl font-bold uppercase tracking-tighter text-white md:text-5xl lg:text-7xl">
                                        {item.text}
                                    </span>
                                    <span className="font-playfair text-3xl font-medium italic text-[#FF5722] md:text-5xl lg:text-7xl">
                                        {item.accent}
                                    </span>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
