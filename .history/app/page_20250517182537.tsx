'use client'

import Navbar from "@/components/navbar"

const page = () => {
  return (
    <div>
      <Navbar/>
        <div className="sectionOne h-screen gap-10 flex flex-col items-center justify-center">
        <h1 className="text-7xl great-vibes-regular bg-gradient-to-r from-[#1DCBE5] to-[#FF6B35] bg-clip=">Devistic</h1>
        <p className="text-3xl">Where Development meets Artistry</p>
        </div>
    </div>
  )
}

export default page
