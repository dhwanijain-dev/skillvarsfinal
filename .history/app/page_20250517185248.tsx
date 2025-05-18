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
      <div className="sectionTwo h-screen relative  flex flex-col items-end pr-50 justify-center">
          <h1 className="text-7xl absolute top-10 left-1/2 -translate-x-1/2 great-vibes-regular">About Us</h1>
        <div className="w-1/4">
          <p className="text-2xl">
            At DEVSITC, we blend the art of creativity with the science of code to craft digital experiences that captivate and perform. Our DNA is a unique fusion of imaginative design and robust development, ensuring that every project we undertake is not only visually stunning but also functionally superior.

          </p>
        </div>
      </div>
      <div className="sectionThree h-screen relative  flex flex-col items-center pr-50 justify-center">
        <h1 className="text-7xl absolute top-10 left-1/2 -translate-x-1/2 great-vibes-regular">Showcase</h1>
        "use client";

        import React from "react";
        import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";

        export function ThreeDCardDemo() {
  return (
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="a"
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        );
}

      </div>
    </div>
  )
}

export default page
