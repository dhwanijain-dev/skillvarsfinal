'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRef, useState } from "react"
import emailjs from "emailjs-com";
import Navbar from "@/components/navbar"
import { ThreeDCardDemo } from "@/components/showcaseCard";
import { useMobile } from "@/hooks/useMobile"
import { Canvas } from "@react-three/fiber"
import { Environment, Float, OrbitControls, Stars, Trail } from "@react-three/drei"
import TechOrb from "@/components/techorb"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { useLoader } from "@react-three/fiber"
import Loader from "@/components/Loader"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { useEffect } from "react"
import { useFrame } from "@react-three/fiber"
const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const serviceId = "service_a55nzlo"; // Replace with your EmailJS service ID
      const templateId = "template_89ompej"; // Replace with your EmailJS template ID
      const userId = "T8O3IKJ0gClO9d1a8"; // Replace with your EmailJS user ID

      await emailjs.send(serviceId, templateId, formData, userId);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      setErrorMessage("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const { isMobile, scaleFactor } = useMobile();


const paintbrush = useLoader(GLTFLoader, "/paintbrush.glb")
const keyboard = useLoader(GLTFLoader, "/keyboard.glb")
  const ParticlesParallax = () => {
    const group = useRef<THREE.Group>(null)
    const [mouse, setMouse] = useState({ x: 0, y: 0 })

    // Generate random positions for 200 particles
    const positions = useRef(
      Float32Array.from({ length: 200 * 3 }, () => THREE.MathUtils.randFloatSpread(30))
    )

    // Parallax effect
    useFrame(() => {
      if (group.current) {
        group.current.position.x += ((mouse.x * 2) - group.current.position.x) * 0.05
        group.current.position.y += ((-mouse.y * 2) - group.current.position.y) * 0.05
      }
    })

    // Listen for mouse move on window
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setMouse({
          x: (e.clientX / window.innerWidth) - 0.5,
          y: (e.clientY / window.innerHeight) - 0.5,
        })
      }
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
      <group ref={group}>
        <Points positions={positions.current} stride={3}>
          <PointMaterial
            color="#ffffff"
            size={0.1}
            sizeAttenuation
            transparent
            depthWrite={false}
          />
        </Points>
      </group>
    )
  }
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Force the loader to show for at least 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div>
      {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}
      <div className={isLoading ? "hidden" : "block"}>
      <Navbar />
      <div className={`sectionOne relative h-screen gap-10 flex flex-col items-center justify-center ${isMobile ? "px-2 py-8" : ""}`}>
  <Canvas
    className="w-full h-screen absolute"
    camera={{ position: [0, 0, 15], fov: 50 }}
    style={isMobile ? { minHeight: 300 } : {}}
  >
    <ParticlesParallax />
    <Trail
      width={0.2}
      color={'hotpink'}
      length={1}
      decay={1}
      local={false}
      stride={0}
      interval={1}
      target={undefined}
    />
    <Float>
      <primitive object={paintbrush.scene} position={isMobile ? [4, 0, 0] : [8, 0, 0]} rotation={[0, Math.PI, -Math.PI / 4]} />
    </Float>
    <Float>
      <primitive object={keyboard.scene} position={isMobile ? [-4, 0, 0] : [-8, 0, 0]} rotation={[0, 0, -Math.PI / 4]} />
    </Float>
    <Environment preset="city" />
  </Canvas>
  <h1 className={`great-vibes-regular absolute -translate-y-1/2 bg-gradient-to-r from-[#1DCBE5] to-[#FF6B35] pt-2 pr-2 bg-clip-text text-transparent ${isMobile ? "text-4xl top-20 left-1/2 w-full text-center" : "text-7xl"}`}>
    Devistic
  </h1>
  <p className={`absolute ${isMobile ? "text-lg top-36 left-1/2 w-full text-center" : "text-3xl translate-y-1/2"}`} style={isMobile ? { maxWidth: "90vw" } : {}}>
    Where Development meets Artistry
  </p>
</div>
      <div className={`sectionTwo overflow-hidden h-screen relative flex flex-col items-end ${isMobile ? "pr-0" : "pr-50"} justify-center`}>
        <h1 className={`text-5xl md:text-7xl absolute top-10 left-1/2 -translate-x-1/2 great-vibes-regular`}>
          About Us
        </h1>
        <div className={`flex relative w-full h-screen gap-4 md:gap-10 justify-center items-center ${isMobile ? "flex-col px-4" : "flex-row px-50"}`}>
          <div className={`${isMobile ? "w-full h-64" : "w-1/2 h-full"}`}>
            <iframe
              src="https://my.spline.design/genkubgreetingrobot-vF5wr14MHrE7chv3zCNBjOzW/"
              width="100%"
              height={isMobile ? "100%" : "100%"}
              style={{ minHeight: isMobile ? 200 : 400, border: "none" }}
              allowFullScreen
            />
          </div>
          <p className={`text-lg md:text-2xl ${isMobile ? "w-full mt-4 text-center" : "w-3/4"}`}>
            At DEVSITC, we blend the art of creativity with the science of code to craft digital experiences that captivate and perform. Our DNA is a unique fusion of imaginative design and robust development, ensuring that every project we undertake is not only visually stunning but also functionally superior.
          </p>
          <div className={`w-40 h-10 md:w-60 md:h-20 bg-black absolute bottom-0 left-1/2 -translate-x-1/2`} />
        </div>
      </div>
      <div className={`sectionThree h-screen relative w-full flex flex-col items-center justify-center ${isMobile ? "px-2 py-8" : ""}`}>
        <h1 className={`text-4xl md:text-7xl absolute top-10 left-1/2 -translate-x-1/2 great-vibes-regular ${isMobile ? "text-center w-full px-2" : ""}`}>
          Showcase
        </h1>
        <div
          className={`w-full mt-24 flex ${isMobile ? "flex-col gap-8 items-center" : "flex-row gap-10 justify-center items-start"}`}
        >
          <ThreeDCardDemo />
        </div>
      </div>
      <div className="sectionFour h-screen relative w-full  flex flex-col items-center  justify-center">
        <h1 className="text-7xl absolute top-10 left-1/2 -translate-x-1/2 great-vibes-regular">Our services</h1>
        <div className="h-[600px] w-full">
          <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <TechOrb />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      </div>
      <div className="sectionFive h-screen relative w-full flex flex-col items-center justify-center" >
        <h1 className="text-7xl absolute top-10 left-1/2 -translate-x-1/2 great-vibes-regular">Contact Us</h1>
        <div className="flex relative w-full h-screen justify-center items-center px-50  ">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-700/50 border-gray-600 focus:border-purple-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-700/50 border-gray-600 focus:border-purple-500"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
                className="bg-gray-700/50 border-gray-600 focus:border-purple-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-700/50 border-gray-600 focus:border-purple-500"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
          </form>
          <iframe height='80%' width='80%' src='https://my.spline.design/nexbotrobotcharacterconcept-3c2e5832dc847143bda8952d230b49ee/' ></iframe>
        </div>
        <div className="bg-black h-20 w-50 absolute bottom-20 right-50">

        </div>
      </div>

         </div>
    </div>
  ) 
}

export default page
