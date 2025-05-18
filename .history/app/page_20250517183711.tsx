'use client'

import Navbar from "@/components/navbar"
import { useMobile } from "@/hooks/useMobile"
const page = () => {
  const { isMobile, scaleFactor } = useMobile();
  return (
    <div>
      <Navbar />
      <div className="sectionOne h-screen gap-10 flex flex-col items-center justify-center">
        <h1 className="text-7xl great-vibes-regular bg-gradient-to-r from-[#1DCBE5] to-[#FF6B35] pt-2 pr-2 bg-clip-text text-transparent">Devistic</h1>
        <p className="text-3xl text-[#1DCBE5]">Where Development meets Artistry</p>
      </div>
      <div className="sectionTwo h-screen flex items-center justify-center">
        <div className="w-31">
          <h1 className="text-5xl great-vibes-regular">About Us</h1>
          <p className="text-2xl">
            At DEVSITC, we blend the art of creativity with the science of code to craft digital experiences that captivate and perform. Our DNA is a unique fusion of imaginative design and robust development, ensuring that every project we undertake is not only visually stunning but also functionally superior.

          </p>
        </div>
      </div>
    </div>
  )
}

export default page
