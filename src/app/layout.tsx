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
    <html 
      lang="en" 
      className="dark" 
      style={{ 
        colorScheme: "dark",
        margin: 0,
        padding: 0,
        backgroundColor: "#050505" 
      }}
    >
      <body
        className={`${inter.variable} font-sans antialiased bg-[#050505] text-white selection:bg-[#bcff00] selection:text-black`}
        style={{ 
          margin: 0, 
          padding: 0,
          overflowX: "hidden" // Mencegah scroll horizontal yang merusak layout mobile
        }}
      >
        {/* SmoothScroll membungkus seluruh konten */}
        <SmoothScroll>
          {/* Pembungkus 'relative flex flex-col' memastikan semua section 
            (Hero, About, dll) menempel satu sama lain tanpa gap.
          */}
          <div className="relative flex flex-col min-h-screen w-full">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}