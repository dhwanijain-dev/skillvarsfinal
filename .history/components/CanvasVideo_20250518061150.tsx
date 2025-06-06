'use client';
import React from 'react';
export const CanvasVideo = () =>{
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const video = document.createElement('video');
        video.src = '/video.mp4';
        video.crossOrigin = 'anonymous';
        video.loop = true;
        video.muted = true;

        video.play();
        
    return (
        <div  className="bg-slate-500">
            <div className="parent relative h-[1600vh]">
                <div className="w-full sticky top-0 left-0 h-screen bg-red-500">
                    <canvas ref={canvasRef} className="w-full h-screen bg-blue-500" id="canvas">


                    </canvas>

                    

                </div>
                </div>
              </div>  
    )
}