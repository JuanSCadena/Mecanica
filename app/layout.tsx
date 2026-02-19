import type { Metadata } from "next";
import { Oswald, Playfair_Display, Manrope } from "next/font/google"; // Added Manrope
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// import { GeistPixelSquare } from "geist/font/pixel"; 

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

export const metadata: Metadata = {
  title: "PROVEEDORALAGASCA",
  description: "Repuestos y Servicios Automotrices de Alta Gama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${oswald.variable} ${playfair.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
