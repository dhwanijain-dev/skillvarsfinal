'use client'
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import emailjs from "emailjs-com";
import Navbar from "@/components/navbar"
import { ThreeDCardDemo } from "@/components/showcaseCard";
import { useMobile } from "@/hooks/useMobile"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import TechOrb from "@/components/techorb"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useLoader } from "@react-three/fiber"
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
  const paintbrush = useLoader(GLTFLoader, "/paintbrush.glb");


  return (
    <div>
      <Navbar />
      <div className="sectionOne relative h-screen gap-10 flex flex-col items-center justify-center">
        <Canvas className="w-full h-screen absolute" camera={{ position: [0, 0, 15], fov: 50 }}>
        <primitive object={paintbrush.scene}  position={[3, 0, 0]} rot />
        <Environment preset="city" ambientIntensity={0.2}/>
        </Canvas>
        <h1 className="text-7xl great-vibes-regular absolute -translate-y-1/2 bg-gradient-to-r from-[#1DCBE5] to-[#FF6B35] pt-2 pr-2 bg-clip-text text-transparent">Devistic</h1>
        <p className="text-3xl text-[#1DCBE5] translate-y-1/2 absolute">Where Development meets Artistry</p>
      </div>
      <div className="sectionTwo h-screen relative  flex flex-col items-end pr-50 justify-center">
          <h1 className="text-7xl absolute top-10 left-1/2 -translate-x-1/2 great-vibes-regular">About Us</h1>
        <div className="w-1/4">
          <p className="text-2xl">
            At DEVSITC, we blend the art of creativity with the science of code to craft digital experiences that captivate and perform. Our DNA is a unique fusion of imaginative design and robust development, ensuring that every project we undertake is not only visually stunning but also functionally superior.
          </p>
        </div>
      </div>
      <div className="sectionThree h-screen relative w-full  flex flex-col items-center  justify-center">
        <h1 className="text-7xl absolute top-10 left-1/2 -translate-x-1/2 great-vibes-regular">Showcase</h1>
        <ThreeDCardDemo/> 
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
      <div className="sectionFour h-screen relative w-full flex flex-col items-center justify-center" >
        <h1 className="text-7xl absolute top-10 left-1/2 -translate-x-1/2 great-vibes-regular">Contact Us</h1>
        <div className="flex relative w-full px-50  ">
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
          <iframe src='https://my.spline.design/nexbotrobotcharacterconcept-3c2e5832dc847143bda8952d230b49ee/' width='100%' height='100%'></iframe>
        </div>
        <div className="bg-black h-20 w-50 absolute bottom-60 right-50">

        </div>
      </div>

         </div>
  )
}

export default page
