'use client'

import Navbar from "@/components/navbar"
import { useMobile } from "@/hooks/useMobile"
const page = () => {
  const { isMobile, scaleFactor } = useMobile();
  return (
    <div>
      <Navbar/>
        <div className="sectionOne h-screen gap-10 flex flex-col items-center justify-center">
            <h1 className="text-7xl great-vibes-regular bg-gradient-to-r from-[#1DCBE5] to-[#FF6B35] pt-2 pr-2 bg-clip-text text-transparent">Devistic</h1>
            <p className="text-3xl text-[#1DCBE5]">Where Development meets Artistry</p>
        </div>
        <divclas>

        </div>
    </div>
  )
}

export default page
