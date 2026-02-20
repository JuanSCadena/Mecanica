import type { Metadata } from "next";
import { Oswald, Playfair_Display, Manrope } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import JsonLd from "@/components/JsonLd";

import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

/* ───────────────────────────────────────────────
   SEO: Metadata agresiva para Quito completo
   ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.proveedoralagasca.com"),

  title: {
    default:
      "Taller Mecánico en Quito | Repuestos Automotrices | Proveedora La Gasca",
    template: "%s | Proveedora La Gasca — Taller Mecánico en Quito",
  },

  description:
    "Taller mecánico y venta de repuestos automotrices en Quito, Ecuador. Reparación de motores, escáner computarizado, frenos, suspensión y repuestos originales Chevrolet, Kia, Toyota. Más de 20 años de experiencia. Atención en todo el Distrito Metropolitano de Quito: Norte, Centro, Sur y Valles.",

  keywords: [
    "taller mecánico Quito",
    "repuestos automotrices Quito",
    "mecánica automotriz Quito",
    "reparación de motores Quito",
    "escáner automotriz Quito",
    "repuestos originales Quito",
    "taller mecánico norte de Quito",
    "taller mecánico sur de Quito",
    "repuestos Chevrolet Quito",
    "repuestos Kia Quito",
    "repuestos Toyota Quito",
    "frenos y suspensión Quito",
    "cambio de aceite Quito",
    "alineación y balanceo Quito",
    "diagnóstico computarizado Quito",
    "mecánica general Quito",
    "Proveedora La Gasca",
    "taller automotriz La Gasca",
    "mecánico de confianza Quito",
    "repuestos automotrices Ecuador",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://www.proveedoralagasca.com",
    siteName: "Proveedora La Gasca",
    title:
      "Taller Mecánico en Quito | Repuestos Automotrices | Proveedora La Gasca",
    description:
      "El taller mecánico de confianza en Quito. Reparación de motores, escáner computarizado, repuestos originales Chevrolet, Kia, Toyota. Servicio experto con más de 20 años en todo el Distrito Metropolitano de Quito.",
    images: [
      {
        url: "/images/img_header.png",
        width: 1200,
        height: 630,
        alt: "Proveedora La Gasca — Taller mecánico y repuestos automotrices en Quito, Ecuador",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Taller Mecánico en Quito | Repuestos Automotrices | Proveedora La Gasca",
    description:
      "Reparación de motores, escáner computarizado y repuestos originales en Quito. Más de 20 años de experiencia. Servicio en todo el Distrito Metropolitano.",
    images: ["/images/img_header.png"],
  },

  alternates: {
    canonical: "https://www.proveedoralagasca.com",
  },

  category: "Automotriz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${oswald.variable} ${playfair.variable} ${manrope.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
