"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience from "./Experience";

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full bg-[#050505]">
      <Canvas
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance" 
        }}
        dpr={[1, 2]}
        // Menambahkan kamera agar objek 3D berada di posisi yang benar
        camera={{
          position: [0, 0, 5],
          fov: 35,
          near: 0.1,
          far: 1000
        }}
      >
        {/* Pencahayaan dasar agar objek 3D tidak gelap gulita */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#bcff00" />

        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </div>
  );
}