"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GeistSans } from 'geist/font/sans';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Fade in text on load (Delayed for Preloader)
        gsap.fromTo(
            textContainerRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 1.2 }
        );

        // Initial Ken Burns Effect (Zoom Out)
        gsap.fromTo(".hero-bg",
            { scale: 1.1 },
            { scale: 1.0, duration: 10, ease: "power1.out" }
        );

        // Parallax effect for background
        gsap.to(".hero-bg", {
            y: '20%',
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-black"
        >
            {/* Background Image — Next.js optimizado para LCP */}
            <div className="hero-bg absolute inset-0">
                <Image
                    src="/images/img_header.webp"
                    alt="Taller mecánico Proveedora La Gasca en Quito, Ecuador — reparación de motores, escáner automotriz y repuestos originales"
                    fill
                    priority={true}
                    sizes="100vw"
                    className="object-cover"
                    quality={80}
                />
            </div>

            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.06] z-[5] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Content */}
            <div
                ref={textContainerRef}
                className="relative z-20 flex h-full w-full flex-col items-center justify-center text-center text-white"
            >
                <h1 className={`${GeistSans.className} font-black uppercase text-[16vw] sm:text-[14vw] md:text-[12vw] leading-[0.85] tracking-tighter px-4 w-full flex flex-col items-center`}>                    <div>PROVEEDORA</div>
                    <div>LA GASCA</div>
                </h1>
                <p className="mt-6 max-w-lg text-xs sm:text-sm uppercase tracking-widest text-zinc-300 md:text-base font-sans px-4">
                    Repuestos &middot; Mecánica &middot; Calidad
                </p>
                <h2 className="sr-only">Taller mecánico y repuestos automotrices en Quito — Diagnóstico computarizado, reparación de motores, frenos, suspensión y repuestos originales Chevrolet, Kia, Toyota</h2>
            </div>
        </section>
    );
}
