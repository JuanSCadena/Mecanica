"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";

interface BentoCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    colors: string[];
    delay: number;
}

const BentoCard: React.FC<BentoCardProps> = ({
    title,
    value,
    subtitle,
    colors,
    delay,
}) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay + 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="relative overflow-hidden h-full bg-background dark:bg-background/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay }}
        >
            <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
            <motion.div
                className="relative z-10 p-5 sm:p-6 md:p-10 text-foreground backdrop-blur-sm h-full flex flex-col justify-center"
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.h3
                    className="text-sm sm:text-base md:text-lg text-foreground"
                    variants={item}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-3xl sm:text-5xl md:text-6xl font-medium mb-4 text-foreground"
                    variants={item}
                >
                    {value}
                </motion.p>
                {subtitle && (
                    <motion.p
                        className="text-sm md:text-base text-foreground/80"
                        variants={item}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </motion.div>
        </motion.div>
    );
};

export default function StatsSection() {
    return (
        <section className="w-full dark">
            <div className="w-full bg-background min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen">
                    <div className="md:col-span-2 min-h-[220px] md:min-h-[33vh]">
                        <BentoCard
                            title="Vehículos Atendidos"
                            value="13000+"
                            subtitle="Más de dos décadas confiando en nosotros"
                            colors={["#3B82F6", "#60A5FA", "#93C5FD"]}
                            delay={0.2}
                        />
                    </div>
                    <div className="min-h-[220px] md:min-h-[33vh]">
                        <BentoCard
                            title="Años de Experiencia"
                            value="25+"
                            subtitle="Trayectoria profesional en el sector automotriz"
                            colors={["#60A5FA", "#34D399", "#93C5FD"]}
                            delay={0.4}
                        />
                    </div>
                    <div className="min-h-[220px] md:min-h-[33vh]">
                        <BentoCard
                            title="Tasa de Retorno"
                            value="92%"
                            subtitle="De nuestros clientes regresan por servicio"
                            colors={["#F59E0B", "#A78BFA", "#FCD34D"]}
                            delay={0.6}
                        />
                    </div>
                    <div className="md:col-span-2 min-h-[220px] md:min-h-[33vh]">
                        <BentoCard
                            title="Servicios Completados"
                            value="15,000+"
                            subtitle="Reparaciones y ventas exitosas en todas nuestras áreas"
                            colors={["#3B82F6", "#A78BFA", "#FBCFE8"]}
                            delay={0.8}
                        />
                    </div>
                    <div className="md:col-span-3 min-h-[220px] md:min-h-[34vh]">
                        <BentoCard
                            title="Satisfacción del Cliente"
                            value="4.9 / 5"
                            subtitle="Basado en más de 2,000 reseñas de clientes verificados en diagnóstico, mecánica y mantenimiento"
                            colors={["#EC4899", "#F472B6", "#3B82F6"]}
                            delay={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
