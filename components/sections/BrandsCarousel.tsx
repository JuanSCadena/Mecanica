"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

const brands = [
    "/images/brands/boschh.png",
    "/images/brands/manoll.png",
    "/images/brands/mobil.png",
    "/images/brands/ntn.png",
    "/images/brands/valvoline.png",
    "/images/brands/adcelcoo.png",
    "/images/brands/dlb.png",
    "/images/brands/kybb.png",
    "/images/brands/kashimaa.png",
    "/images/brands/valeo.png",
    "/images/brands/ngkk.png",
    "/images/brands/skf.jpg",
    "/images/brands/havoline.png",
];

// Duplicate for seamless loop (4 sets for perfect -50% alignment)
const allBrands = [...brands, ...brands, ...brands, ...brands];

export default function BrandsCarousel() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Horizontal Auto Scroll (Marquee)

            gsap.to(trackRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 100, // Slower for elegance
                repeat: -1,
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative z-40 w-full overflow-hidden py-16 md:py-32 bg-[#f4f4f5]"
        >
            <div className="container mx-auto px-6 md:px-12 mb-20 md:mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Title */}
                    <div className="flex flex-col">
                        <h2 className="text-[#18181b] leading-[0.85] uppercase">
                            <span className="font-galgo text-6xl md:text-9xl block mb-2">
                                MARCAS QUE
                            </span>
                            {/* Combined Typography Effect - Using font-reckless which is aliased to Medio in globals */}
                            <span className="block font-reckless text-6xl md:text-8xl italic text-[#FF5722]">
                                & RESPALDAN
                            </span>
                        </h2>
                    </div>

                    {/* Right: Text */}
                    <div className="flex flex-col justify-center items-start md:items-end text-left md:text-right">
                        <p className={`${GeistSans.className} text-zinc-600 text-sm md:text-base max-w-sm leading-relaxed`}>
                            Proveedora Lagasca se enorgullece de colaborar con los líderes mundiales de la industria automotriz.
                            Garantizamos repuestos originales y un rendimiento superior, ofreciendo la mejor calidad al mejor precio del mercado.
                        </p>

                        {/* Decorator line or small label */}
                        <div className={`mt-6 flex items-center gap-2 ${GeistMono.className} text-xs text-[#18181b] opacity-60`}>
                            <span className="w-12 h-[1px] bg-black/40"></span>
                            <span>PARTNERS & ALLIANCES</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Track */}
            <div className="relative w-full flex overflow-hidden">
                <div
                    ref={trackRef}
                    className="flex gap-16 md:gap-32 items-center whitespace-nowrap pl-16 md:pl-32"
                >
                    {allBrands.map((src, i) => (
                        <div key={i} className="relative w-[100px] h-[50px] md:w-[200px] md:h-[100px] shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            {/* Reverted to grayscale with color on hover for elegance */}
                            <Image
                                src={src}
                                alt="Brand Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual separator at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/5"></div>
        </section>
    );
}
