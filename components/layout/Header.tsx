"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GeistMono } from "geist/font/mono";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Historia", href: "#historia" },
    { label: "Servicios", href: "#servicios" },
    { label: "Cuidados", href: "#cuidados" },
    { label: "Marcas", href: "#marcas" },
    { label: "Contacto", href: "#contacto" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("inicio");

    // Track active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
        );

        navItems.forEach(({ href }) => {
            const id = href.replace("#", "");
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = useCallback((href: string) => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    }, []);

    return (
        <>
            {/* Wrapper: button + nav panel share onMouseLeave (desktop only) */}
            <div
                className="fixed top-6 right-6 z-[60] flex flex-col items-end gap-4"
                onMouseLeave={() => {
                    if (window.innerWidth >= 768) setIsOpen(false);
                }}
            >
                {/* Trigger button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    onMouseEnter={() => {
                        if (window.innerWidth >= 768) setIsOpen(true);
                    }}
                    className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/80 backdrop-blur-md text-white cursor-pointer transition-all duration-300",
                        isOpen && "bg-[#FF5722] border-[#FF5722]/30"
                    )}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={20} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={20} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>

                {/* Desktop dropdown nav panel */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            className="hidden md:flex flex-col items-end gap-1 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4"
                        >
                            {navItems.map(({ label, href }, i) => {
                                const isActive = activeSection === href.replace("#", "");
                                return (
                                    <motion.button
                                        key={href}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.03, duration: 0.2 }}
                                        onClick={() => scrollTo(href)}
                                        className={cn(
                                            `${GeistMono.className} text-sm uppercase tracking-[0.2em] px-4 py-2 rounded-full transition-all duration-300 cursor-pointer`,
                                            isActive
                                                ? "bg-[#FF5722] text-white"
                                                : "text-zinc-400 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        {label}
                                    </motion.button>
                                );
                            })}
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile fullscreen overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-xl flex items-center justify-center md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-3">
                            {navItems.map(({ label, href }, i) => {
                                const isActive = activeSection === href.replace("#", "");
                                return (
                                    <motion.button
                                        key={href}
                                        initial={{ opacity: 0, y: 25 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ delay: i * 0.04, duration: 0.3 }}
                                        onClick={() => scrollTo(href)}
                                        className={cn(
                                            `${GeistMono.className} text-xl uppercase tracking-[0.25em] px-8 py-3 rounded-full transition-all duration-300 cursor-pointer`,
                                            isActive
                                                ? "bg-[#FF5722] text-white"
                                                : "text-zinc-500 hover:text-white"
                                        )}
                                    >
                                        {label}
                                    </motion.button>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
