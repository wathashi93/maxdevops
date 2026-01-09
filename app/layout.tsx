import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maxdevops - Building the Future of Digital Excellence",
  description: "Award-winning software product engineering company. We deliver bespoke software solutions globally with 8+ years of experience. Web, Enterprise, Cloud, Mobile, and AI Consulting & Implementation.",
  keywords: ["software development", "web development", "mobile apps", "custom software", "AI consulting", "cloud solutions", "enterprise software", "Maxdevops"],
  authors: [{ name: "Maxdevops" }],
  openGraph: {
    title: "Maxdevops - Building the Future of Digital Excellence",
    description: "Award-winning software product engineering company with 8+ years of experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
