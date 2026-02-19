"use client";

import React from "react";
import { motion } from "framer-motion";

// Icons (SVG)
const StarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 text-[#FF5722]"
    >
        <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
        />
    </svg>
);

const VerifiedIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 text-blue-500 ml-1"
    >
        <path
            fillRule="evenodd"
            d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
        />
    </svg>
);

// Review Data
const reviews = [
    {
        text: "¡Excelente servicio! Mi D-Max quedó como nueva después del ajuste de motor.",
        author: "Carlos M.",
        model: "Chevrolet D-Max",
    },
    {
        text: "Rápidos y honestos. Me mostraron los repuestos viejos y explicaron todo.",
        author: "Andrés V.",
        model: "Toyota Hilux",
    },
    {
        text: "El mejor lugar para calibrar inyectores en Quito. Muy recomendados.",
        author: "Fernando T.",
        model: "Kia Sportage Turbo",
    },
    {
        text: "Atención de primera, solucionaron el fallo eléctrico que nadie encontraba.",
        author: "Gabriela S.",
        model: "Mazda CX-5",
    },
    {
        text: "Repuestos originales a buen precio. Difícil de encontrar hoy en día.",
        author: "Roberto L.",
        model: "Ford F-150",
    },
    {
        text: "Me salvaron el viaje. Repararon la suspensión en tiempo récord.",
        author: "Juan P.",
        model: "Toyota Fortuner",
    },
    {
        text: "Profesionales totales. El cambio de embrague se siente perfecto.",
        author: "Luis R.",
        model: "Chevrolet Sail",
    },
    {
        text: "Honestidad ante todo. No me cobraron cosas innecesarias.",
        author: "Patricia C.",
        model: "Nissan Versa",
    },
    {
        text: "La calidad de los repuestos es genuina. Se nota el rendimiento.",
        author: "Esteban D.",
        model: "Volkswagen Amarok",
    },
];

// Duplicate data to enough length for smooth loop
const duplicatedReviews = [...reviews, ...reviews, ...reviews];

const MarqueeRow = ({
    items,
    direction = "left",
    speed = 40,
}: {
    items: typeof reviews;
    direction?: "left" | "right";
    speed?: number;
}) => {
    return (
        <div className="flex w-full overflow-hidden py-4 select-none wrapper-marquee">
            <motion.div
                className="flex gap-6 shrink-0"
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                // Hover pauses animation
                whileHover={{ animationPlayState: "paused" }} // Framer motion prop for CSS play state? No, standard Framer way is difficult for hover pause without CSS override or layout duplication. 
            // Let's use Tailwind group-hover on parent to pause via CSS if possible, but framer transform is inline.
            // Best way with Framer for pause is tricky. 
            // Let's stick to simple CSS animation for the marquee if we want easy pause, OR robust Framer. 
            // User asked for "animation-play-state: paused" which implies CSS.
            // Let's use CSS animation in globals or inline styles for the marquee track.
            // But user suggested Framer Motion OR CSS.
            // I will use Framer Motion for the setup but maybe just simple CSS animate-marquee class for the pause ability.
            >
                {/* Due to hover pause requirement, custom CSS marquee is often smoother/easier. 
                   Let's use a "style" tag or standard CSS class. 
                   I'll rely on Framer Motion's values but pausing is hard.
                   Refactoring to CSS Animation for easier hover-pause. 
               */}
            </motion.div>

            {/* LET'S USE PURE CSS FOR MARQUEE TO ENABLE EASY PAUSE */}
            <div
                className={`flex gap-6 shrink-0 marquee-track ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
                style={{
                    animationDuration: `${speed}s`,
                    animationPlayState: 'running'
                }}
            >
                {items.map((review, i) => (
                    <div
                        key={i}
                        className="group relative w-[300px] md:w-[400px] shrink-0 rounded-xl bg-zinc-900/50 p-6 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-[#FF5722]/50 hover:bg-zinc-800/80 hover:scale-[1.02]"
                    >
                        {/* Quote Icon Background Effect */}
                        <div className="absolute top-4 right-6 text-6xl font-serif text-zinc-800 opacity-20 pointer-events-none">
                            &rdquo;
                        </div>

                        {/* Stars */}
                        <div className="flex mb-3 gap-1">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} />
                            ))}
                        </div>

                        {/* Text */}
                        <p className="font-manrope text-white/90 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none min-h-[3rem] mb-4">
                            "{review.text}"
                        </p>

                        {/* Footer */}
                        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white/40">
                                {review.author.charAt(0)}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white flex items-center">
                                    {review.author} <VerifiedIcon />
                                </span>
                                <span className="text-xs text-[#FF5722] font-medium uppercase tracking-wide">
                                    {review.model}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Duplicate for CSS loop */}
            <div
                className={`flex gap-6 shrink-0 marquee-track ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
                style={{
                    animationDuration: `${speed}s`,
                    animationPlayState: 'running'
                }}
            >
                {items.map((review, i) => (
                    <div
                        key={i + "dup"}
                        className="group relative w-[300px] md:w-[400px] shrink-0 rounded-xl bg-zinc-900/50 p-6 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-[#FF5722]/50 hover:bg-zinc-800/80 hover:scale-[1.02]"
                    >
                        <div className="absolute top-4 right-6 text-6xl font-serif text-zinc-800 opacity-20 pointer-events-none">
                            &rdquo;
                        </div>
                        <div className="flex mb-3 gap-1">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} />
                            ))}
                        </div>
                        <p className="font-manrope text-white/90 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none min-h-[3rem] mb-4">
                            "{review.text}"
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white/40">
                                {review.author.charAt(0)}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white flex items-center">
                                    {review.author} <VerifiedIcon />
                                </span>
                                <span className="text-xs text-[#FF5722] font-medium uppercase tracking-wide">
                                    {review.model}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Testimonials() {
    return (
        <section className="relative w-full py-24 bg-zinc-950 overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>

            <div className="container mx-auto px-6 relative z-10 mb-16 text-center">
                <h2 className="font-oswald text-5xl md:text-7xl text-white uppercase mb-2 tracking-tight">
                    CONFÍAN EN NOSOTROS
                </h2>
                <p className="font-manrope text-[#FF5722] text-sm md:text-lg tracking-[0.2em] font-bold uppercase">
                    VOCES REALES, RESULTADOS REALES
                </p>
            </div>

            <div className="flex flex-col gap-8 relative z-10 w-full">
                {/* Row 1: Left */}
                <div className="w-full hover:[&_.marquee-track]:pause">
                    <MarqueeRow items={duplicatedReviews} direction="left" speed={40} />
                </div>

                {/* Row 2: Right */}
                <div className="w-full hover:[&_.marquee-track]:pause">
                    <MarqueeRow items={duplicatedReviews} direction="right" speed={50} />
                </div>
            </div>

            {/* CSS for marquee animation and pause */}
            <style jsx global>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-left {
                    animation-name: marquee-left;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
                .animate-marquee-right {
                    animation-name: marquee-right;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
                .pause {
                    animation-play-state: paused !important;
                }
                /* Tailwind arbitrary variant [&_.marquee-track]:pause works if class is present */
                .hover-pause:hover .marquee-track {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
