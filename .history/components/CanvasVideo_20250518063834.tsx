'use client';
import React from 'react';
export const CanvasVideo = () => {
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
    const canvasFrame ={
        currentIndex:0,
        maxIndex:311,
    }
    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let imagesLoaded = 0;
        const image:HTMLImageElement[]=[]
        const preLoadImages = () => {
            for (let i = 0; i < canvasFrame.maxIndex; i++) {
                const imgUrl = `/frames/${i}.jpg`
                const img = new window.Image();
                img.src = imgUrl;
                img.onload = () => {
                    imagesLoaded++;
                    console.log(`Loaded: ${imgUrl}`);
                    if (imagesLoaded === canvasFrame.maxIndex) {
                        console.log('All images loaded');
                    }
                }
                img.onerror = () => {
                    imagesLoaded++;
                    console.error(`Failed to load: ${imgUrl}`);
                    if (imagesLoaded === canvasFrame.maxIndex) {
                        console.log('All images loaded (with errors)');
                    }
                }
                image.push(img)

            }
          }
          const loadImageOnCanvas =(index:number)=>{
            if(index>=0 && index<=canvasFrame.maxIndex && canvas &&ctx){
                let img = image[index]

                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
                const scaleX = canvas.width / img.width;    
                const scaleY = canvas.height / img.height;
                const scale = Math.max(scaleX, scaleY);

                const newWidth = img.width * scale;
                const newHeight = img.height * scale;
                const offsetX = (canvas.width - newWidth) / 2;
                const offsetY = (canvas.height - newHeight) / 2;
                
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
            
                }   
          }
          preLoadImages();

        }, [])
    return (
        <div className="bg-slate-500">
            <div className="parent relative h-[1600vh]">
                <div className="w-full sticky top-0 left-0 h-screen bg-red-500">
                    <canvas ref={canvasRef} className="w-full h-screen bg-blue-500" id="canvas">


                    </canvas>



                </div>
            </div>
        </div>
    )
}