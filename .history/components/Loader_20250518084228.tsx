"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoaderProps {
    onLoadingComplete?: () => void
    duration?: number
}

export default function Loader({ onLoadingComplete, duration = 3000 }: LoaderProps) {
    const [progress, setProgress] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => {
                        setIsComplete(true)
                        onLoadingComplete?.()
                    }, 500)
                    return 100
                }
                return prev + 1
            })
        }, duration / 100)

        return () => clearInterval(interval)
    }, [duration, onLoadingComplete])

    const letterVariants = {
        initial: { y: 20, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.6, 0.05, -0.01, 0.9],
            },
        }),
        exit: (i: number) => ({
            y: -20,
            opacity: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.3,
                ease: [0.6, 0.05, -0.01, 0.9],
            },
        }),
    }

    const letters = "Devistic".split("")

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: isComplete ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative mb-12">
                <div className="flex">
                    {letters.map((letter, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={letterVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="text-7xl font-bold bg-gradient-to-r from-[#1DCBE5] to-[#FF6B35] bg-clip-text text-transparent great-vibes-regular"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="block text-center text-lg text-[#1DCBE5] mt-2"
                >
                    Where Development meets Artistry
                </motion.span>
            </div>

            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-[#1DCBE5] to-[#FF6B35]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeInOut" }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8"
            >
                <div className="relative">
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 8,
                            ease: "linear",
                            repeat: Number.POSITIVE_INFINITY,
                        }}
                    >
                        <div className="w-16 h-16 rounded-full border-t-2 border-b-2 border-[#1DCBE5] opacity-30" />
                    </motion.div>

                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                            rotate: [360, 0],
                        }}
                        transition={{
                            duration: 8,
                            ease: "linear",
                            repeat: Number.POSITIVE_INFINITY,
                        }}
                    >
                        <div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-[#FF6B35] opacity-30" />
                    </motion.div>

                    <motion.div
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-[#1DCBE5] to-[#FF6B35]"
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Number.POSITIVE_INFINITY,
                        }}
                    />
                </div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: progress > 80 ? 1 : 0 }}
                className="mt-8 text-gray-400 text-sm"
            >
                {progress === 100 ? "Ready!" : "Loading assets..."}
            </motion.p>
        </motion.div>
    )
}
