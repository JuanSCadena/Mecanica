"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
            <nav
                className={cn(
                    "flex items-center gap-8 rounded-full border border-white/10 bg-black/80 px-8 py-3 text-sm text-white backdrop-blur-md transition-all duration-300",
                    isScrolled && "bg-black/90 py-2"
                )}
            >
                <Link href="/" className="font-medium hover:text-zinc-300 transition-colors">
                    Inicio
                </Link>
                <Link href="#servicios" className="font-medium hover:text-zinc-300 transition-colors">
                    Servicios
                </Link>
                <Link href="#contacto" className="font-medium hover:text-zinc-300 transition-colors">
                    Contacto
                </Link>
            </nav>
        </header>
    );
}
