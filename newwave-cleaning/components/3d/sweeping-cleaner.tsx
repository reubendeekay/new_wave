"use client"

import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations, PerspectiveCamera, Float } from '@react-three/drei'
import { useScroll, useTransform, MotionValue } from 'framer-motion'
import * as THREE from 'three'

// 3D Broom Component
function Broom({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const meshRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      // Get scroll value
      const scroll = scrollProgress.get()
      
      // Sweeping motion
      meshRef.current.rotation.z = Math.sin(scroll * 10) * 0.3
      meshRef.current.position.x = Math.sin(scroll * 5) * 2
      
      // Bob up and down
      meshRef.current.position.y = Math.sin(scroll * 8) * 0.2 - 1
    }
  })

  return (
    <group ref={meshRef} position={[0, -1, 0]}>
      {/* Broom handle */}
      <mesh position={[0, 1, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.05, 0.05, 3]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>
      
      {/* Broom bristles */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[0.8, 0.3, 0.2]} />
        <meshStandardMaterial color="#D2691E" roughness={1} />
      </mesh>
      
      {/* Bristle details */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[i * 0.1 - 0.35, -0.7, 0]}>
          <boxGeometry args={[0.05, 0.2, 0.15]} />
          <meshStandardMaterial color="#8B4513" roughness={1} />
        </mesh>
      ))}
    </group>
  )
}

// Animated Dust Particles
function DustParticles({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 50
  
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = Math.random() * 2 - 2
    positions[i * 3 + 2] = (Math.random() - 0.5) * 3
    
    const color = new THREE.Color(`hsl(${30 + Math.random() * 30}, 30%, ${40 + Math.random() * 20}%)`)
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  useFrame((state) => {
    if (particlesRef.current) {
      const scroll = scrollProgress.get()
      particlesRef.current.rotation.y = scroll * 0.5
      
      // Move particles away as if being swept
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3
        positions[idx] += Math.sin(scroll * 10 + i) * 0.02
        positions[idx + 1] += Math.abs(Math.sin(scroll * 5 + i)) * 0.01
        
        // Reset particles that go too far
        if (positions[idx] > 5) positions[idx] = -5
        if (positions[idx + 1] > 2) positions[idx + 1] = -2
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} vertexColors transparent opacity={0.6} />
    </points>
  )
}

// Sparkle Effects
function Sparkles({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const sparkleRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (sparkleRef.current) {
      const scroll = scrollProgress.get()
      sparkleRef.current.children.forEach((child, i) => {
        child.position.x = Math.sin(scroll * 10 + i) * 3
        child.position.y = Math.cos(scroll * 8 + i) * 1
        child.rotation.z = scroll * 5 + i
        ;(child as THREE.Mesh).scale.setScalar(0.5 + Math.sin(scroll * 15 + i) * 0.3)
      })
    }
  })

  return (
    <group ref={sparkleRef}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[i - 2, 0, 0]}>
          <octahedronGeometry args={[0.1]} />
          <meshStandardMaterial 
            color="#10b981" 
            emissive="#10b981" 
            emissiveIntensity={0.5}
            metalness={1}
            roughness={0}
          />
        </mesh>
      ))}
    </group>
  )
}

// Clean Floor Effect
function CleanFloor({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const floorRef = useRef<THREE.Mesh>(null)
  
  useFrame(() => {
    if (floorRef.current) {
      const scroll = scrollProgress.get()
      // Reveal clean floor as scroll progresses
      const material = floorRef.current.material as THREE.MeshStandardMaterial
      material.opacity = Math.min(scroll * 2, 1)
    }
  })

  return (
    <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 10]} />
      <meshStandardMaterial 
        color="#e0f2fe" 
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0}
      />
    </mesh>
  )
}

export function SweepingCleaner() {
  const { scrollY } = useScroll()
  const scrollProgress = useTransform(scrollY, [0, 2000], [0, 1])

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#10b981" />
        
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <Broom scrollProgress={scrollProgress} />
        </Float>
        
        <DustParticles scrollProgress={scrollProgress} />
        <Sparkles scrollProgress={scrollProgress} />
        <CleanFloor scrollProgress={scrollProgress} />
        
        {/* Animated cleaning text */}
        <group position={[0, 2, 0]}>
          <Float speed={3} floatIntensity={0.3}>
            <mesh>
              <boxGeometry args={[3, 0.5, 0.1]} />
              <meshStandardMaterial 
                color="#10b981" 
                emissive="#10b981"
                emissiveIntensity={0.2}
                transparent
                opacity={0.8}
              />
            </mesh>
          </Float>
        </group>
      </Canvas>
    </div>
  )
}