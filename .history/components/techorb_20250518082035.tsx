"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Html, MeshDistortMaterial, Trail, Float, Sparkles } from "@react-three/drei"
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

function TechIcon({ name, position, orbitRadius, orbitSpeed, orbitOffset }: TechIconProps): JSX.Element {
    const meshRef = useRef<THREE.Mesh>(null)
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    const trailRef = useRef<any>(null)

    useFrame((state) => {
        if (!meshRef.current) return

        // Orbit around the center
        const angle = orbitOffset + state.clock.elapsedTime * orbitSpeed
        meshRef.current.position.x = Math.cos(angle) * orbitRadius
        meshRef.current.position.z = Math.sin(angle) * orbitRadius

        // Always face the camera
        meshRef.current.lookAt(state.camera.position)

        // Scale effect when hovered or clicked
        meshRef.current.scale.lerp(
            new THREE.Vector3(hovered || clicked ? 1.5 : 1, hovered || clicked ? 1.5 : 1, hovered || clicked ? 1.5 : 1),
            0.1,
        )
    })

    return (
        <Trail
            ref={trailRef}
            width={1}
            length={5}
            color={hovered ? COLORS.vibrantOrange : COLORS.electricBlue}
            attenuation={(t) => t * t}
        >
            <mesh
                ref={meshRef}
                position={position}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={() => setClicked(!clicked)}
            >
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshPhysicalMaterial
                    color={hovered ? COLORS.vibrantOrange : COLORS.electricBlue}
                    emissive={hovered ? COLORS.vibrantOrange : COLORS.electricBlue}
                    emissiveIntensity={0.8}
                    metalness={0.9}
                    roughness={0.1}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    transmission={0.2}
                />

                {(hovered || clicked) && (
                    <Html position={[0, 1, 0]} center distanceFactor={10}>
                        <div className="bg-[#0A0A0A]/90 px-4 py-2 rounded-lg text-white font-jetbrains text-sm border border-[#30A0FF]/30 shadow-lg shadow-[#30A0FF]/20">
                            {name}
                        </div>
                    </Html>
                )}
            </mesh>
        </Trail>
    )
}

function CentralOrb() {
    const meshRef = useRef<THREE.Mesh>(null)
    const innerMeshRef = useRef<THREE.Mesh>(null)

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1
            meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1
            meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.4) * 0.1
        }

        if (innerMeshRef.current) {
            innerMeshRef.current.rotation.x = clock.getElapsedTime() * -0.2
            innerMeshRef.current.rotation.y = clock.getElapsedTime() * -0.3
            innerMeshRef.current.rotation.z = clock.getElapsedTime() * -0.1
        }
    })

    return (
        <group>
            {/* Outer glowing orb */}
            <mesh ref={meshRef}>
                <sphereGeometry args={[2.2, 64, 64]} />
                <MeshDistortMaterial
                    color={COLORS.electricBlue}
                    emissive={COLORS.electricBlue}
                    emissiveIntensity={0.6}
                    metalness={0.8}
                    roughness={0.2}
                    distort={0.3}
                    speed={2}
                />
            </mesh>

            {/* Inner core */}
            <mesh ref={innerMeshRef}>
                <icosahedronGeometry args={[1.5, 4]} />
                <meshPhysicalMaterial
                    color={COLORS.vibrantOrange}
                    emissive={COLORS.vibrantOrange}
                    emissiveIntensity={0.8}
                    metalness={1}
                    roughness={0.1}
                    clearcoat={1}
                    transmission={0.5}
                    reflectivity={1}
                />
            </mesh>

            {/* Sparkles */}
            <Sparkles count={100} scale={10} size={2} speed={0.3} color={COLORS.electricBlue} />
        </group>
    )
}

function OrbitRing({ radius, y, color }: { radius: number; y: number; color: string }) {
    const ringRef = useRef<THREE.Mesh>(null)

    useFrame(({ clock }) => {
        if (ringRef.current) {
            // Subtle pulsing effect
            const pulse = Math.sin(clock.getElapsedTime() * 2) * 0.05 + 1
            ringRef.current.scale.set(pulse, pulse, pulse)
        }
    })

    return (
        <mesh ref={ringRef} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius - 0.05, radius + 0.05, 128]} />
            <meshBasicMaterial
                color={color}
                transparent
                opacity={0.4}
                side={THREE.DoubleSide}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    )
}

export default function TechOrb(): JSX.Element {
    const groupRef = useRef<THREE.Group>(null)
    const { viewport } = useThree()
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // Track mouse position for parallax effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse position between -1 and 1
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    useFrame((state) => {
        if (groupRef.current) {
            // Base rotation
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.05

            // Parallax effect - move based on mouse position
            groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mousePosition.x * 2, 0.05)
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mousePosition.y * 1.5, 0.05)

            // Tilt based on mouse position
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mousePosition.y * 0.2, 0.05)
            groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -mousePosition.x * 0.2, 0.05)
        }
    })

    // Generate positions for the tech icons
    const techIcons: (TechStackItem & {
        position: [number, number, number]
        orbitRadius: number
        orbitSpeed: number
        orbitOffset: number
    })[] = (TECH_STACK as TechStackItem[]).map((tech, i) => {
        const orbitRadius = 5 + Math.random() * 3
        const orbitSpeed = 0.1 + Math.random() * 0.15
        const orbitOffset = (i / TECH_STACK.length) * Math.PI * 2
        const y = (Math.random() - 0.5) * 6

        return {
            ...tech,
            position: [orbitRadius, y, 0] as [number, number, number],
            orbitRadius,
            orbitSpeed,
            orbitOffset,
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={groupRef}>
                {/* Central orb */}
                <CentralOrb />

                {/* Orbit trails */}
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
        </Float>
    )
}
