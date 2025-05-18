import { useEffect, useState } from "react";

const REFERENCE_WIDTH = 1920;
const MOBILE_THRESHOLD = 990;

export const useMobile = () => {
    const getInitialScale = () =>
        typeof window !== "undefined"
            ? window.innerWidth / REFERENCE_WIDTH
            : 1;
    const getInitialMobile = () =>
        typeof window !== "undefined"
            ? window.innerWidth <= MOBILE_THRESHOLD
            : false;

    const [scaleFactor, setScaleFactor] = useState(getInitialScale);
    const [isMobile, setIsMobile] = useState(getInitialMobile);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => {
            setScaleFactor(window.innerWidth / REFERENCE_WIDTH);
            setIsMobile(window.innerWidth <= MOBILE_THRESHOLD);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        scaleFactor,
        isMobile,
    };
};