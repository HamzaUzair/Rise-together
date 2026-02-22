import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingDonateButton from "@/components/FloatingDonateButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RiseTogether Foundation — Small Actions. Big Impact.",
    template: "%s | RiseTogether Foundation",
  },
  description:
    "RiseTogether Foundation empowers communities through education, food relief, healthcare, women empowerment, and environmental sustainability. Join us in making a lasting difference.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "RiseTogether Foundation",
    title: "RiseTogether Foundation — Small Actions. Big Impact.",
    description:
      "Empowering communities through education, food relief, healthcare, and sustainable development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RiseTogether Foundation",
    description:
      "Empowering communities through education, food relief, healthcare, and sustainable development.",
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
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingDonateButton />
      </body>
    </html>
  );
}
