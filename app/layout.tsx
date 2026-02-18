import type { Metadata } from "next";
import { Oswald, Playfair_Display } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// import { GeistPixelSquare } from "geist/font/pixel"; // User asked for specific imports, let's try to include what they asked if possible or just stick to Sans/Mono first as they seem most relevant for text. Actually user listed all pixel fonts. Let's start with Sans and Mono which are critical.

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
        className={`${GeistSans.variable} ${GeistMono.variable} ${oswald.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
