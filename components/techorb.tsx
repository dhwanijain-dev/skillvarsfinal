"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Html, MeshDistortMaterial, Sparkles } from "@react-three/drei"
import * as THREE from "three"
import { TECH_STACK, COLORS } from "@/lib/constants"

type TechStackItem = {
    name: string
    // Add other properties if TECH_STACK items have more fields
}

type TechIconProps = {
    name: string
    position: [number, number, number]
    orbitRadius: number
    orbitSpeed: number
    orbitOffset: number
}

// Optimize TechIcon component
function TechIcon({ name, position, orbitRadius, orbitSpeed, orbitOffset }: TechIconProps): JSX.Element {
    const meshRef = useRef<THREE.Mesh>(null)
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)

    // Use a simpler material for better performance
    const material = useRef(
        new THREE.MeshStandardMaterial({
            color: COLORS.electricBlue,
            emissive: COLORS.electricBlue,
            emissiveIntensity: 0.5,
            metalness: 0.8,
            roughness: 0.2,
        }),
    )

    useFrame((state) => {
        if (!meshRef.current) return

        // Orbit around the center
        const angle = orbitOffset + state.clock.elapsedTime * orbitSpeed
        meshRef.current.position.x = Math.cos(angle) * orbitRadius
        meshRef.current.position.z = Math.sin(angle) * orbitRadius

        // Always face the camera
        meshRef.current.lookAt(state.camera.position)

        // Update material only when hover state changes
        if (hovered) {
            material.current.color.set(COLORS.vibrantOrange)
            material.current.emissive.set(COLORS.vibrantOrange)
        } else {
            material.current.color.set(COLORS.electricBlue)
            material.current.emissive.set(COLORS.electricBlue)
        }

        // Use simple scale instead of lerp for better performance
        const scale = hovered || clicked ? 1.3 : 1
        meshRef.current.scale.set(scale, scale, scale)
    })

    return (
        <mesh
            ref={meshRef}
            position={position}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setClicked(!clicked)}
        >
            <sphereGeometry args={[0.5, 16, 16]} />
            <primitive object={material.current} />

            {(hovered || clicked) && (
                <Html position={[0, 1, 0]} center distanceFactor={10}>
                    <div className="bg-[#0A0A0A]/90 px-4 py-2 rounded-lg text-white font-jetbrains text-sm border border-[#30A0FF]/30 shadow-lg shadow-[#30A0FF]/20">
                        {name}
                    </div>
                </Html>
            )}
        </mesh>
    )
}

// Optimize CentralOrb component
function CentralOrb() {
    const meshRef = useRef<THREE.Mesh>(null)
    const innerMeshRef = useRef<THREE.Mesh>(null)

    // Pre-compute rotation speeds for better performance
    const rotationSpeeds = useRef({
        outer: {
            x: 0.1,
            y: 0.08,
            z: 0.12,
        },
        inner: {
            x: -0.1,
            y: -0.15,
            z: -0.05,
        },
    })

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()

        if (meshRef.current) {
            // Simplified rotation calculation
            meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.1
            meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.1
            meshRef.current.rotation.z = Math.sin(time * 0.4) * 0.1
        }

        if (innerMeshRef.current) {
            // Direct rotation assignment for better performance
            innerMeshRef.current.rotation.x += rotationSpeeds.current.inner.x * 0.01
            innerMeshRef.current.rotation.y += rotationSpeeds.current.inner.y * 0.01
            innerMeshRef.current.rotation.z += rotationSpeeds.current.inner.z * 0.01
        }
    })

    return (
        <group>
            {/* Outer glowing orb - reduced distort and speed values */}
            <mesh ref={meshRef}>
                <sphereGeometry args={[2.2, 32, 32]} />
                <MeshDistortMaterial
                    color={COLORS.electricBlue}
                    emissive={COLORS.electricBlue}
                    emissiveIntensity={0.6}
                    metalness={0.8}
                    roughness={0.2}
                    distort={0.2} // Reduced distortion
                    speed={1} // Reduced speed
                />
            </mesh>

            {/* Inner core - simplified geometry */}
            <mesh ref={innerMeshRef}>
                <icosahedronGeometry args={[1.5, 2]} /> {/* Reduced detail level */}
                <meshStandardMaterial
                    color={COLORS.vibrantOrange}
                    emissive={COLORS.vibrantOrange}
                    emissiveIntensity={0.8}
                    metalness={0.9}
                    roughness={0.1}
                />
            </mesh>

            {/* Reduced sparkle count */}
            <Sparkles count={50} scale={10} size={2} speed={0.2} color={COLORS.electricBlue} />
        </group>
    )
}

// Optimize OrbitRing component
function OrbitRing({ radius, y, color }: { radius: number; y: number; color: string }) {
    const ringRef = useRef<THREE.Mesh>(null)
    const pulseSpeed = useRef(Math.random() * 0.5 + 0.5) // Randomize pulse speed but keep it low

    useFrame(({ clock }) => {
        if (ringRef.current) {
            // Simplified pulsing with lower frequency
            const pulse = Math.sin(clock.getElapsedTime() * pulseSpeed.current) * 0.03 + 1
            ringRef.current.scale.set(pulse, pulse, pulse)
        }
    })

    return (
        <mesh ref={ringRef} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius - 0.05, radius + 0.05, 64]} /> {/* Reduced segments */}
            <meshBasicMaterial
                color={color}
                transparent
                opacity={0.3} // Reduced opacity
                side={THREE.DoubleSide}
            />
        </mesh>
    )
}

// Main TechOrb component
export default function TechOrb(): JSX.Element {
    const groupRef = useRef<THREE.Group>(null)
    const { viewport } = useThree()
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // Throttle mouse movement updates
    const lastUpdateTime = useRef(0)
    const throttleInterval = 50 // ms

    // Track mouse position for parallax effect with throttling
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now()
            if (now - lastUpdateTime.current < throttleInterval) return

            lastUpdateTime.current = now

            // Normalize mouse position between -1 and 1
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    // Reduce the number of tech icons for better performance
    const techIconsCount = Math.min(TECH_STACK.length, 8) // Limit to 8 icons max

    // Generate positions for the tech icons - only once on component mount
    const techIcons = useRef(
        (TECH_STACK as TechStackItem[]).slice(0, techIconsCount).map((tech, i) => {
            const orbitRadius = 5 + (i % 3) * 1.5 // More structured positioning
            const orbitSpeed = 0.05 + (i % 5) * 0.02 // Slower speeds
            const orbitOffset = (i / techIconsCount) * Math.PI * 2
            const y = ((i % 5) - 2) * 1.2 // More structured vertical positioning

            return {
                ...tech,
                position: [orbitRadius, y, 0] as [number, number, number],
                orbitRadius,
                orbitSpeed,
                orbitOffset,
            }
        }),
    ).current

    // Optimize frame updates
    useFrame((state) => {
        if (groupRef.current) {
            // Slower base rotation
            groupRef.current.rotation.y += 0.002

            // Smoother parallax with reduced intensity
            groupRef.current.position.x = THREE.MathUtils.lerp(
                groupRef.current.position.x,
                mousePosition.x * 1, // Reduced movement range
                0.02, // Slower lerp for smoother movement
            )
            groupRef.current.position.y = THREE.MathUtils.lerp(
                groupRef.current.position.y,
                mousePosition.y * 0.8, // Reduced movement range
                0.02, // Slower lerp for smoother movement
            )

            // Reduced tilt effect
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                mousePosition.y * 0.1, // Reduced tilt
                0.02,
            )
            groupRef.current.rotation.z = THREE.MathUtils.lerp(
                groupRef.current.rotation.z,
                -mousePosition.x * 0.1, // Reduced tilt
                0.02,
            )
        }
    })

    return (
        <group ref={groupRef}>
            {/* Central orb */}
            <CentralOrb />

            {/* Orbit trails - only create for visible tech icons */}
            {techIcons.map((tech, i) => (
                <OrbitRing
                    key={`orbit-${i}`}
                    radius={tech.orbitRadius}
                    y={tech.position[1]}
                    color={i % 2 === 0 ? COLORS.electricBlue : COLORS.vibrantOrange}
                />
            ))}

            {/* Tech icons */}
            {techIcons.map((tech, i) => (
                <TechIcon
                    key={`tech-${i}`}
                    name={tech.name}
                    position={tech.position}
                    orbitRadius={tech.orbitRadius}
                    orbitSpeed={tech.orbitSpeed}
                    orbitOffset={tech.orbitOffset}
                />
            ))}
        </group>
    )
}
