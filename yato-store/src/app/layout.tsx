import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YATO Central Hardware | Professional Grade Tools",
  description: "Your trusted partner for industrial-grade hardware solutions. Quality tools for professionals and enthusiasts. Power Tools, Hand Tools, Safety Equipment, and more.",
  keywords: "YATO, hardware, tools, power tools, hand tools, industrial, construction, professional tools, Bangladesh",
  authors: [{ name: "YATO Central Hardware" }],
  openGraph: {
    title: "YATO Central Hardware | Professional Grade Tools",
    description: "All hardware solutions in one platform. Industrial-grade tools trusted by professionals worldwide.",
    type: "website",
    locale: "en_US",
    siteName: "YATO Central Hardware",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
