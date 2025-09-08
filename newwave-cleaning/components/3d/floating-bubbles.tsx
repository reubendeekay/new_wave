"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Bubble({ position, scale, speed }: any) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2
    }
  })

  return (
    <Float
      speed={speed}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#10b981"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
}

export function FloatingBubbles() {
  const bubbles = useMemo(() => [
    { position: [-3, 2, -2], scale: 0.8, speed: 1.2 },
    { position: [3, -1, -3], scale: 0.6, speed: 0.8 },
    { position: [-2, -2, -2], scale: 0.7, speed: 1.0 },
    { position: [2, 1.5, -2.5], scale: 0.5, speed: 1.5 },
    { position: [0, 0, -4], scale: 0.9, speed: 0.7 },
  ], [])

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        {bubbles.map((bubble, index) => (
          <Bubble key={index} {...bubble} />
        ))}
      </Canvas>
    </div>
  )
}