import { useEffect, useRef, useState, CSSProperties } from "react";
import Image from "next/image";

interface ImageSequenceProps {
    imageCount: number;
    imagePrefix: string;
    imageSuffix: string;
    containerStyle?: CSSProperties;
    imageStyle?: CSSProperties;
}

const ImageSequence: React.FC<ImageSequenceProps> = ({
    imageCount,
    imagePrefix,
    imageSuffix,
    containerStyle,
    imageStyle,
}) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const scrollTop = window.pageYOffset - container.offsetTop;
                const scrollHeight = container.scrollHeight - window.innerHeight;
                const progress = Math.min(1, Math.max(0, scrollTop / scrollHeight));
                setScrollProgress(progress);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initialize on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const frameIndex = Math.floor(scrollProgress * (imageCount - 1));
    const imagePath = `/${imagePrefix}${frameIndex.toString().padStart(4, "0")}.${imageSuffix}`;

    return (
        <div ref={containerRef} style={containerStyle}>
            <Image
                src={imagePath}
                alt={`Image sequence frame ${frameIndex}`}
                fill
                style={imageStyle}
                quality={100}
                priority
                sizes="100vw"
            />
        </div>
    );
};

export default ImageSequence;