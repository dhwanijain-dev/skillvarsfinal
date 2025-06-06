'use client';
import React from 'react';
export const CanvasVideo = () =>{
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
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