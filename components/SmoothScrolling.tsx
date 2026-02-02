"use client";

import { useEffect, useState, ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // We tell ESLint this specific call is intentional for hydration
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
        };
    }, []);

    // During SSR, mounted is false, returning only children.
    // In the browser, it rerenders once and activates Lenis.
    return <>{children}</>;
}