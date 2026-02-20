"use client";

import React from "react";
import { motion } from "framer-motion";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { WebGLShader } from "@/components/ui/web-gl-shader";

const contactInfo = [
    {
        icon: MapPin,
        label: "Dirección",
        value: "Av. de las cipres",
        detail: "Quito, Ecuador",
    },
    {
        icon: Phone,
        label: "Teléfono",
        value: "+593 000000",
        detail: "Lun – Sáb",
    },
    {
        icon: Mail,
        label: "Email",
        value: "xxxxxx@gmail.com",
        detail: "Respuesta en 24h",
    },
    {
        icon: Clock,
        label: "Horario",
        value: "Lun – Vie: 8:00 – 18:00",
        detail: "Sáb: 8:00 – 15:00",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    }),
};

export default function ContactSection() {
    return (
        <section
            id="contacto"
            className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-center"
        >
            {/* Fondo dinámico WebGL */}
            <div className="absolute -top-[87%] left-0 w-full h-[180%] z-0">
                <WebGLShader />
            </div>
            {/* Overlay oscuro para legibilidad */}
            <div className="absolute inset-0 z-[1] bg-black/70" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-20 md:mb-28"
                >
                    <p className={`${GeistMono.className} text-xs md:text-sm uppercase tracking-[0.3em] text-[#FF5722] mb-4`}>
                        / Encuéntranos
                    </p>
                    <h2 className="flex flex-col leading-[0.9]">
                        <span className={`${GeistSans.className} text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-white`}>
                            VISÍTANOS
                        </span>
                        <span className="font-reckless text-4xl md:text-6xl lg:text-8xl text-[#FF5722] italic mt-2">
                            en nuestro taller
                        </span>
                    </h2>
                </motion.div>

                {/* Grid de contacto */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] mb-20 md:mb-28">
                    {contactInfo.map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="group bg-zinc-950 p-8 md:p-10 hover:bg-zinc-900/50 transition-colors duration-500"
                        >
                            <item.icon className="w-5 h-5 text-[#FF5722] mb-6" strokeWidth={1.5} />
                            <p className={`${GeistMono.className} text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3`}>
                                {item.label}
                            </p>
                            <p className={`${GeistSans.className} text-sm md:text-base font-semibold text-white mb-1 leading-snug break-all`}>
                                {item.value}
                            </p>
                            <p className="text-sm text-zinc-500">{item.detail}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA final */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 border-t border-white/10 pt-16"
                >
                    <div className="max-w-xl">
                        <p className={`${GeistSans.className} text-xl md:text-2xl font-medium text-white leading-relaxed`}>
                            Trae tu vehículo y déjalo en manos de expertos.
                        </p>
                        <p className="text-sm text-zinc-500 mt-4">
                            Más de 15 años cuidando lo que te mueve.
                        </p>
                    </div>

                    <a
                        href="https://wa.me/593995054220"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Agendar cita por WhatsApp"
                        className={`group flex items-center gap-3 rounded-full bg-[#FF5722] px-10 py-5 ${GeistMono.className} text-base md:text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-zinc-900 hover:shadow-[0_0_40px_rgba(255,87,34,0.3)] shrink-0`}
                    >
                        <span>AGENDAR CITA</span>
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                </motion.div>

                {/* Footer mínimo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-24 md:mt-32 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600"
                >
                    <p className={`${GeistMono.className} text-[10px] md:text-xs uppercase tracking-[0.3em]`}>
                        © 2026 Proveedora Lagasca — Todos los derechos reservados
                    </p>
                    <p className={`${GeistMono.className} text-[10px] md:text-xs uppercase tracking-[0.3em]`}>
                        Diseñado con amor
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
