"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
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

function TechIcon({
    name,
    position,
    orbitRadius,
    orbitSpeed,
    orbitOffset,
}: TechIconProps): JSX.Element {
    const meshRef = useRef<THREE.Mesh>(null)
    const [hovered, setHovered] = useState(false)

    useFrame((state) => {
        if (!meshRef.current) return

        // Orbit around the center
        const angle = orbitOffset + state.clock.elapsedTime * orbitSpeed
        meshRef.current.position.x = Math.cos(angle) * orbitRadius
        meshRef.current.position.z = Math.sin(angle) * orbitRadius

        // Always face the camera
        meshRef.current.lookAt(state.camera.position)
    })

    return (
        <mesh
            ref={meshRef}
            position={position}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial
                color={hovered ? COLORS.vibrantOrange : COLORS.electricBlue}
                emissive={hovered ? COLORS.vibrantOrange : COLORS.electricBlue}
                emissiveIntensity={0.5}
                metalness={0.8}
                roughness={0.2}
            />

            {hovered && (
                <Html position={[0, 1, 0]} center>
                    <div className="bg-[#0A0A0A]/80 px-3 py-1 rounded-md text-white font-jetbrains text-sm">
                        {name}
                    </div>
                </Html>
            )}
        </mesh>
    )
}

type TechIconWithOrbit = TechStackItem & {
    position: [number, number, number]
    orbitRadius: number
    orbitSpeed: number
    orbitOffset: number
}

export default function TechOrb(): JSX.Element {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
        }
    })

    // Generate positions for the tech icons
    const techIcons: TechIconWithOrbit[] = (TECH_STACK as TechStackItem[]).map((tech, i) => {
        const orbitRadius = 5 + Math.random() * 2
        const orbitSpeed = 0.1 + Math.random() * 0.2
        const orbitOffset = (i / TECH_STACK.length) * Math.PI * 2
        const y = (Math.random() - 0.5) * 5

        return {
            ...tech,
            position: [orbitRadius, y, 0] as [number, number, number],
            orbitRadius,
            orbitSpeed,
            orbitOffset,
        }
    })

    return (
        <group ref={groupRef}>
            {/* Central orb */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial
                    color={COLORS.electricBlue}
                    emissive={COLORS.electricBlue}
                    emissiveIntensity={0.5}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Orbit trails */}
            {techIcons.map((tech, i) => (
                <mesh key={`orbit-${i}`} position={[0, tech.position[1], 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[tech.orbitRadius - 0.05, tech.orbitRadius + 0.05, 64]} />
                    <meshBasicMaterial color={COLORS.vibrantOrange} transparent opacity={0.2} side={THREE.DoubleSide} />
                </mesh>
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