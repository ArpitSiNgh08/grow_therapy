import type { Metadata } from "next";
import { Merriweather_Sans, Lato } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import 'material-symbols';

// 1. Configure the Serif font for Headings
const tenor = Merriweather_Sans({
  subsets: ["latin"],
  weight: "300",
  style: "italic",
  variable: "--font-serif", // Matches the variable we will use in CSS
  display: "swap",
});

// 2. Configure the Sans-serif font for Body text
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds - Clinical Psychologist",
  description: "Clinical Psychologist in Santa Monica specializing in Anxiety, Trauma & Burnout.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      
      {/* 3. Apply variables to the body so they are available globally */}
      <body className={`${tenor.variable} ${lato.variable} bg-background-light text-text-main font-sans overflow-x-hidden`}>
        <SmoothScrolling>
        {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}