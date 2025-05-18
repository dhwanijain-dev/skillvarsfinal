'use client'

import Navbar from "@/components/navbar"

const page = () => {
  return (
    <div>
      <Navbar/>
        <div className="sectionOne h-screen gap-1flex flex-col items-center justify-center">
        <h1 className="text-7xl">DEVISTIC</h1>
        <p>Where Development meets Artistry</p>
        </div>
    </div>
  )
}

export default page
