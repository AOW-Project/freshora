import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/style.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";

// Load and assign font variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProLaundry - Professional Laundry & Dry Cleaning Services",
  description: "Professional laundry and dry cleaning services with free pickup and delivery. Quality care for your clothes with 25+ years of experience.",
  keywords: "laundry, dry cleaning, pickup, delivery, professional cleaning",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main id="tt-pageContent">{children}
        <WhatsAppFloatingButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}
