"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
    return (
        <div className="flex">

        <CardContainer className="inter-var ">
            <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white-600 dark:text-white"
                >
                    Tipaayi 
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Created  stunning 3D website for client
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src="/images/tipaayi.png"
                        height="500"
                        width="500"
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
                        className="px-4 py-2 rounded-md text-md border-1 border-white  font-normal dark:text-white"
                    >
                        Watch Live
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        View Github Repo
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
        <CardContainer className="inter-var ">
            <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white-600 dark:text-white"
                >
                    Portfolio
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Created  stunning 3D website for client
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src="/images/portfolio.png"
                        height="500"
                        width="500"
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
                        className="px-4 py-2 rounded-md text-md border-1 border-white  font-normal dark:text-white"
                    >
                        Watch Live
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        View Github Repo
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
            <CardContainer className="inter-var ">
                <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-white-600 dark:text-white"
                    >
                        KeyBash
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        Created  stunning 3D website for client
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <img
                            src="/images/keybash.png"
                            height="500"
                            width="500"
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
                            className="px-4 py-2 rounded-md text-md border-1 border-white  font-normal dark:text-white"
                        >
                            Watch Live
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            View Github Repo
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </div>
    );
}
