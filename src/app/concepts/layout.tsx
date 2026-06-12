import type { Metadata } from "next";
import { Inter, Playfair_Display, Oswald } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const anton = Oswald({
  subsets: ["latin", "cyrillic"],
  variable: "--font-anton",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Epicgram — Концепции",
  description: "Алтернативни дизайн концепции за Epicgram.",
};

export default function ConceptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className={`${inter.variable} ${playfair.variable} ${anton.variable}`}>
      <body>{children}</body>
    </html>
  );
}
