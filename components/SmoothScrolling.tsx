"use client";

import { useEffect, useState, ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
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

    /** * By checking 'mounted' here, we ensure that during the 'next build' 
     * (server-side), we only output plain HTML. 
     * The Lenis logic only triggers once the browser takes over.
     */
    return (
        <div style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.5s' }}>
            {children}
        </div>
    );
}