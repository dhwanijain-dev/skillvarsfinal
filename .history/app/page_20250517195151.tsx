'use client'

import Navbar from "@/components/navbar"
import { ThreeDCardDemo } from "@/components/showcaseCard";
import { useMobile } from "@/hooks/useMobile"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import TechOrb from "@/components/techorb"
const page = () => {
  const { isMobile, scaleFactor } = useMobile();
  return (
    <div>
      <Navbar />
      <div className="sectionOne h-screen gap-10 flex flex-col items-center justify-center">
        <h1 className="text-7xl great-vibes-regular bg-gradient-to-r from-[#1DCBE5] to-[#FF6B35] pt-2 pr-2 bg-clip-text text-transparent">Devistic</h1>
        <p className="text-3xl text-[#1DCBE5]">Where Development meets Artistry</p>
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
        <div>
          <form className="flex flex-col gap-3 items-center justify-center">
              <input type="text" placeholder="Name" className="border-2 border-[#1DCBE5] rounded-md p-2" />
              <input type="email" placeholder="Email" className="border-2  border-[#1DCBE5] rounded-md p-2" />
            <textarea placeholder="Message" className="border-2 border-[#1DCBE5] w-full rounded-md p-2 h-32"></textarea>
              <button type="submit" className="bg-[#1DCBE5] text-white rounded-md w-full p-2">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page
