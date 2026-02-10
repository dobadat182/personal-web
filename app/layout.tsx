import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "100 900",
});

const cabinet = localFont({
  src: "../fonts/CabinetGrotesk-Variable.ttf",
  variable: "--font-cabinet",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Draco Do — Frontend Developer",
  description:
    "Draco is Frontend Developer with 3 years of experience in web development. I am passionate about creating beautiful and functional websites. I am a quick learner and I am always looking to improve my skills.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Draco",
    description:
      "Draco is a modern and responsive website template built with Next.js and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${cabinet.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
