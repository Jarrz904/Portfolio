import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Menggunakan Inter dengan weight yang kuat untuk headline estetik
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ["400", "700", "900"] 
});

export const metadata: Metadata = {
  title: "Creative Developer | UMKM Digital Transformation",
  description: "Modern landing page with Next.js, Three.js, and GSAP by Gemini Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${inter.variable} font-sans antialiased bg-[#050505] text-white selection:bg-[#bcff00] selection:text-black`}
      >
        {/* SmoothScroll membungkus seluruh konten untuk efek scrolling mewah */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}