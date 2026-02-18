"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";

const services = [
    {
        title: "DIAGNÓSTICO COMPUTARIZADO",
        id: "01",
        img: "/images/servv.jpeg",
        desc: "Escaneo preciso para detectar fallas electrónicas.",
        layout: "w-[35vw] h-[60vh] self-start mt-10", // Grande Vertical
    },
    {
        title: "REPARACIÓN DE MOTORES",
        id: "02",
        img: "/images/serv2.jpeg",
        desc: "Mantenimiento preventivo.",
        layout: "w-[20vw] h-[20vw] self-center mt-32", // Pequeño Cuadrado
    },
    {
        title: "SUSPENSIÓN Y FRENOS",
        id: "03",
        img: "/images/servicio3.jpeg",
        desc: "Seguridad total en cada curva.",
        layout: "w-[28vw] h-[40vh] self-end mb-20", // Mediano Vertical
    },
    {
        title: "CAMBIO DE ACEITE",
        id: "04",
        img: "/images/servicio4.jpeg",
        desc: "Lubricantes de alta gama.",
        layout: "w-[25vw] h-[25vw] self-start mt-20", // Cuadrado Medio
    },
    {
        title: "SISTEMA ELÉCTRICO",
        id: "05",
        img: "/images/servicio5.jpeg",
        desc: "Solución de arranque y luces.",
        layout: "w-[40vw] h-[50vh] self-center", // Grande Horizontalish
    },
    {
        title: "ALINEACIÓN Y BALANCEO",
        color: "#000000ff",
        id: "06",
        img: "/images/servicio6.jpeg",
        desc: "Mayor estabilidad.",
        layout: "w-[22vw] h-[35vh] self-end mb-10", // Vertical Estrecho
    },
    {
        title: "AIRE ACONDICIONADO",
        id: "07",
        color: "#000000ff",
        img: "/images/servicio7.jpeg",
        desc: "Confort climático.",
        layout: "w-[30vw] h-[30vw] self-start mt-32", // Cuadrado Grande
    },
    {
        title: "ENDEREZADA Y PINTURA",
        id: "08",
        img: "/images/servicio8.jpeg",
        color: "#000000ff",
        desc: "Acabados de fábrica.",
        layout: "w-[35vw] h-[45vh] self-center mb-10", // Mediano
    },
    {
        title: "MECÁNICA GENERAL",
        id: "09",
        img: "/images/servicio9.jpeg",
        color: "#000000ff",
        desc: "Soluciones integrales.",
        layout: "w-[30vw] h-[40vh] self-start mt-20", // Vertical
    },
    {
        title: "REPUESTOS ORIGINALES",
        id: "10",
        img: "/images/servicio10.jpeg",
        color: "#000000ff",
        desc: "Garantía asegurada.",
        layout: "w-[35vw] h-[35vw] self-end mb-10", // Cuadrado Grande
    },
];

export default function ServicesCollage() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const lightBgRef = useRef<HTMLDivElement>(null);
    const dualityTextRef = useRef<HTMLDivElement>(null);
    const leftCarRef = useRef<HTMLDivElement>(null);
    const rightCarRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Master Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1, // Un poco más de suavidad (antes era 0.something o 1)
                    start: "top top",
                    // 🚀 CAMBIO CLAVE 1: De 4000 a 12000 o 15000. 
                    // Entre más alto este número, MÁS LENTO se moverá el scroll horizontal.
                    end: "+=5000",
                    invalidateOnRefresh: true,
                },
            });

            // 1. Horizontal Scroll (Track)
            // 🚀 CAMBIO CLAVE 2: Aumentamos la duración relativa.
            // Antes 25, ahora 100. Esto le dice a GSAP: "Dedica la mayor parte del scroll a mover las fotos".
            tl.to(trackRef.current, {
                xPercent: -100,
                x: () => window.innerWidth,
                ease: "none",
                duration: 100,
            });

            // 2. Background Transition (Dark -> Light)
            tl.to(
                ".light-bg-layer",
                {
                    opacity: 1,
                    ease: "power1.inOut",
                    duration: 50, // Ajustado proporcionalmente
                },
                "10" // Empieza un poco después
            );

            // 3. Duality Animation (Pinza) - Entra al final
            // Mantenemos una duración corta (5) comparada con el scroll (100) para que sea un cierre rápido.
            tl.fromTo(
                leftCarRef.current,
                { x: "-100%", opacity: 0 },
                { x: "0%", opacity: 1, ease: "power2.out", duration: 50 },
                "100"
            );

            tl.fromTo(
                rightCarRef.current,
                { x: "100%", opacity: 0 },
                { x: "0%", opacity: 1, ease: "power2.out", duration: 50 },
                "<"
            );

            tl.fromTo(
                dualityTextRef.current,
                { opacity: 0, scale: 0.8, y: 50 },
                { opacity: 1, scale: 1, y: 0, ease: "back.out(1.7)", duration: 5 },
                "<2"
            );

        }, sectionRef);

        // Floating Effect (Independent run loop - No cambia)
        gsap.to([leftCarRef.current, rightCarRef.current], {
            y: -15,
            duration: 2.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-zinc-900">
            {/* 1. LAYER DARK (Original) - Visible al inicio */}
            <div
                className="absolute inset-0 z-0 opacity-50 animate-drift pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                    backgroundRepeat: "repeat",
                }}
            />

            {/* 2. LAYER LIGHT (Inverted Drift) - Aparece al hacer scroll */}
            <div
                ref={lightBgRef}
                className="light-bg-layer absolute inset-0 z-0 pointer-events-none opacity-0 animate-drift"
                style={{
                    backgroundColor: "#f4f4f5", // Zinc-100 (Blanco hueso/gris muy claro)
                    // Mismo patrón que el dark, pero con fill negro/gris oscuro
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2318181b' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                    backgroundRepeat: "repeat",
                }}
            />

            {/* Track Horizontal */}
            <div ref={trackRef} className="flex h-full w-[500vw] items-center px-10 md:px-20 relative">

                {/* Intro Card */}
                <div className="flex h-full w-[30vw] shrink-0 flex-col justify-center px-6 md:px-10 z-20">
                    <h2 className="font-oswald text-5xl font-bold uppercase text-white md:text-7xl lg:text-8xl leading-[0.85]">
                        NUESTROS <br />
                        <span className="text-[#FF5722]">SERVICIOS</span>
                    </h2>
                    <p className="mt-6 max-w-sm font-manrope text-sm md:text-base text-zinc-400">
                        Ingeniería de precisión aplicada a cada componente.
                    </p>
                </div>

                {/* Services Cards Scattered */}
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`relative mx-6 md:mx-12 shrink-0 flex flex-col group ${service.layout}`}
                    >
                        {/* Imagen */}
                        <div className="relative h-full w-full overflow-hidden grayscale transition-all duration-700 group-hover:grayscale-0">
                            <Image
                                src={service.img}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Borde sutil */}
                            <div className="absolute inset-0 border border-white/20 transition-colors duration-500 group-hover:border-[#FF5722]/60" />
                        </div>

                        {/* Info (Siempre visible, pegada a la imagen) */}
                        <div className="mt-3 flex flex-col items-start">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-mono text-[10px] md:text-xs text-[#FF5722]">
                                    / {service.id}
                                </span>
                                <h3
                                    className="font-oswald text-xl md:text-2xl font-bold uppercase leading-none transition-colors duration-300"
                                    style={{ color: service.color || "#ffffff" }}
                                >
                                    {service.title}
                                </h3>
                            </div>
                            <p
                                className="font-manrope text-xs md:text-sm max-w-[90%] transition-colors duration-300"
                                style={{ color: service.color || "#a1a1aa" }}
                            >
                                {service.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* DUALITY OVERLAY (Mergeado) - Fixed over the section */}
            <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">

                {/* Center Content */}
                <div
                    ref={dualityTextRef}
                    className="relative z-40 flex flex-col items-center justify-center text-center pointer-events-auto opacity-0"
                >
                    <h2 className="mb-8 flex flex-col items-center text-center leading-[0.9] text-[#18181b] drop-shadow-sm">
                        <span className={`${GeistSans.className} text-6xl md:text-8xl font-black uppercase tracking-tighter`}>
                            TU AUTO EN LAS
                        </span>
                        <span className="font-reckless text-5xl md:text-7xl text-[#FF5722] italic mt-2">
                            MEJORES MANOS
                        </span>
                    </h2>

                    <button className={`group relative overflow-hidden rounded-full bg-[#FF5722] px-10 py-4 ${GeistMono.className} text-xl font-bold uppercase tracking-wider text-white transition-all hover:bg-[#18181b] hover:text-white hover:shadow-lg`}>
                        <span className="relative z-10">COTIZAR AHORA</span>
                    </button>
                </div>

                {/* Left Car */}
                <div
                    ref={leftCarRef}
                    className="absolute -left-10 bottom-0 w-[45%] max-w-[600px] pointer-events-none opacity-0"
                >
                    <Image
                        src="/images/car-left.png"
                        alt="Mecánica"
                        width={800}
                        height={600}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Right Car */}
                <div
                    ref={rightCarRef}
                    className="absolute -right-10 bottom-0 w-[45%] max-w-[600px] pointer-events-none opacity-0"
                >
                    <Image
                        src="/images/car-right.png"
                        alt="Ciudad"
                        width={800}
                        height={600}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

        </section>
    );
}
