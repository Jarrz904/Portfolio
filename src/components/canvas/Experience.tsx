"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function Experience() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.003;
      // Hovering effect
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#bcff00" />
      
      {/* Objek Wireframe 3D Utama */}
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.2}>
        <meshBasicMaterial 
          color="#bcff00" 
          wireframe 
          transparent 
          opacity={0.15} 
        />
      </Sphere>

      {/* Inti Distorsi */}
      <Sphere args={[1, 64, 64]} scale={2.1}>
        <MeshDistortMaterial
          color="#111"
          speed={2}
          distort={0.3}
        />
      </Sphere>
    </>
  );
}