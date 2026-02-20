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
        alt: "Diagnóstico computarizado y escáner automotriz en Quito — Proveedora La Gasca",
        desc: "Escaneo preciso para detectar fallas electrónicas.",
        layout: "w-[85vw] md:w-[35vw] h-[50vh] md:h-[60vh] self-start mt-0 md:mt-10 mb-16 md:mb-0",
    },
    {
        title: "REPARACIÓN DE MOTORES",
        id: "02",
        img: "/images/serv2.jpeg",
        alt: "Reparación de motores a gasolina y diésel en Quito — taller mecánico Proveedora La Gasca",
        desc: "Mantenimiento preventivo.",
        layout: "w-[70vw] md:w-[20vw] h-[45vh] md:h-[20vw] self-end md:self-center mt-0 md:mt-32 mb-16 md:mb-0",
    },
    {
        title: "SUSPENSIÓN Y FRENOS",
        id: "03",
        img: "/images/servicio3.jpeg",
        alt: "Reparación de frenos y suspensión automotriz en Quito — servicio profesional",
        desc: "Seguridad total en cada curva.",
        layout: "w-[90vw] md:w-[28vw] h-[55vh] md:h-[40vh] self-center md:self-end mb-16 md:mb-20",
    },
    {
        title: "CAMBIO DE ACEITE",
        id: "04",
        img: "/images/servicio4.jpeg",
        alt: "Cambio de aceite y lubricantes Mobil, Valvoline en Quito — Proveedora La Gasca",
        desc: "Lubricantes de alta gama.",
        layout: "w-[75vw] md:w-[25vw] h-[45vh] md:h-[25vw] self-start mt-0 md:mt-20 mb-16 md:mb-0",
    },
    {
        title: "BUJIAS Y CABLES",
        id: "05",
        img: "/images/servicio5.jpeg",
        alt: "Reparación de bujias y cables automotriz en Quito",
        desc: "Solución de encendido.",
        layout: "w-[85vw] md:w-[40vw] h-[50vh] md:h-[50vh] self-end md:self-center mb-16 md:mb-0",
    },
    {
        title: "CONTROL DE NEUMÁTICOS",
        color: "#000000ff",
        id: "06",
        img: "/images/servicio6.jpeg",
        alt: "Alineación y control de llantas en Quito — Proveedora La Gasca",
        desc: "Mayor estabilidad.",
        layout: "w-[70vw] md:w-[22vw] h-[40vh] md:h-[35vh] self-center md:self-end mb-16 md:mb-10",
    },
    {
        title: "CAMBIO DE KIT DE EMBRAGUE",
        id: "07",
        color: "#000000ff",
        img: "/images/servicio7.jpeg",
        alt: "Mantenimiento y cambio de kit de embrague en Quito",
        desc: "Transmisión suave.",
        layout: "w-[90vw] md:w-[30vw] h-[55vh] md:h-[30vw] self-start mt-0 md:mt-32 mb-16 md:mb-0",
    },
    {
        title: "CAMBIOS DE BATERIA ",
        id: "08",
        img: "/images/servicio8.jpeg",
        color: "#000000ff",
        alt: "Cambios de bateria automotriz en Quito",
        desc: "Energía confiable.",
        layout: "w-[80vw] md:w-[35vw] h-[50vh] md:h-[45vh] self-end md:self-center mb-16 md:mb-10",
    },
    {
        title: "MECÁNICA GENERAL",
        id: "09",
        img: "/images/servicio9.jpeg",
        color: "#000000ff",
        alt: "Mecánica general y mantenimiento preventivo de autos en Quito, Ecuador",
        desc: "Soluciones integrales.",
        layout: "w-[75vw] md:w-[30vw] h-[45vh] md:h-[40vh] self-center md:self-start mt-0 md:mt-20 mb-16 md:mb-0",
    },
    {
        title: "REPUESTOS ORIGINALES",
        id: "10",
        img: "/images/servicio10.jpeg",
        color: "#000000ff",
        alt: "Venta de repuestos originales Chevrolet, Kia, Toyota en Quito — Proveedora La Gasca",
        desc: "Garantía asegurada.",
        layout: "w-[85vw] md:w-[35vw] h-[50vh] md:h-[35vw] self-start md:self-end mb-0 md:mb-10",
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
                    scrub: 1,
                    start: "top top",
                    end: "+=12000", // Increased scroll distance
                    invalidateOnRefresh: true,
                },
            });

            // 1. Horizontal Scroll (Track)
            tl.to(trackRef.current, {
                xPercent: -100,
                x: () => window.innerWidth,
                ease: "none",
                duration: 150,
            });

            // 2. Background Transition (Dark -> Light) & Text Color
            tl.to(
                ".light-bg-layer",
                {
                    opacity: 1,
                    ease: "power1.inOut",
                    duration: 50,
                },
                "40"
            );

            // Text to Dark for visibility on Light BG
            tl.to(".service-text-title", { color: "#18181b", duration: 50 }, "40");
            tl.to(".service-text-desc", { color: "#52525b", duration: 50 }, "40");

            // Fade out track to prevent overlap with Duality - Delayed to 95 to show all services
            tl.to(trackRef.current, { opacity: 0, duration: 15 }, "155");

            // 3. Duality Animation (Pinza) - Delayed to 105 (after track fade)
            tl.fromTo(
                leftCarRef.current,
                { x: "-100%", opacity: 0 },
                { x: "0%", opacity: 1, ease: "power2.out", duration: 60 },
                "150"
            );

            tl.fromTo(
                rightCarRef.current,
                { x: "100%", opacity: 0 },
                { x: "0%", opacity: 1, ease: "power2.out", duration: 60 },
                "<"
            );

            tl.fromTo(
                dualityTextRef.current,
                { opacity: 0, scale: 0.8, y: 50 },
                { opacity: 1, scale: 1, y: 0, ease: "back.out(1.7)", duration: 40 },
                "<10"
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
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2318181b' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                    backgroundRepeat: "repeat",
                }}
            />

            {/* Track Horizontal */}
            <div ref={trackRef} className="flex h-full w-[1100vw] md:w-[500vw] items-center px-10 md:px-20 relative">

                {/* Intro Card */}
                <div className="flex h-full w-[85vw] md:w-[30vw] shrink-0 flex-col justify-center px-6 md:px-10 z-20 mr-12 md:mr-0">
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
                        <div className="relative h-full w-full overflow-hidden grayscale transition-all duration-700 group-hover:grayscale-0 rounded-lg md:rounded-none">
                            <Image
                                src={service.img}
                                alt={service.alt}
                                fill
                                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 30vw, 400px"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Borde sutil */}
                            <div className="absolute inset-0 border border-white/20 transition-colors duration-500 group-hover:border-[#FF5722]/60 rounded-lg md:rounded-none" />
                        </div>

                        {/* Info (Siempre visible, pegada a la imagen) */}
                        <div className="mt-3 flex flex-col items-start px-2 md:px-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-mono text-[10px] md:text-xs text-[#FF5722]">
                                    / {service.id}
                                </span>
                                <h3
                                    className="service-text-title font-oswald text-xl md:text-2xl font-bold uppercase leading-none transition-colors duration-300 text-white"
                                    style={service.color ? { color: service.color } : {}}
                                >
                                    {service.title}
                                </h3>
                            </div>
                            <p
                                className="service-text-desc font-manrope text-xs md:text-sm max-w-[90%] transition-colors duration-300 text-zinc-400"
                                style={service.color ? { color: service.color } : {}}
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

                    <a
                        href="#contacto"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`group relative overflow-hidden rounded-full bg-[#FF5722] px-10 py-4 ${GeistMono.className} text-xl font-bold uppercase tracking-wider text-white transition-all hover:bg-[#18181b] hover:text-white hover:shadow-lg`}
                        aria-label="Ir al formulario de cotización"
                    >
                        <span className="relative z-10">COTIZAR AHORA</span>
                    </a>
                </div>

                {/* Left Car */}
                <div
                    ref={leftCarRef}
                    className="absolute -left-10 bottom-0 w-[45%] max-w-[600px] pointer-events-none opacity-0"
                >
                    <Image
                        src="/images/car-left.png"
                        alt="Servicio de mecánica automotriz profesional en Quito — Proveedora La Gasca"
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 45vw, 300px"
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
                        alt="Taller automotriz de confianza en Quito, Ecuador — reparación y repuestos"
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 45vw, 300px"
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

        </section>
    );
}
