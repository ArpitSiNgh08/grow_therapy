import office2 from '../app/assets/office2.jpeg'
import Image from 'next/image';

import StarBorder from './StarBorder';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src={office2}
                alt="Modern and calm therapy office in Santa Monica"
                fill
                priority
                className="object-cover object-center"
            />
            {/* Greenish Overlay to match the aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#192111]/50 to-[#192111]/70 z-0" />

            <div className="relative z-10 w-full max-w-[960px] px-6 py-20 text-center md:text-left">
                <div className="max-w-[720px] mx-auto md:mx-0">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-[-0.033em] mb-6 drop-shadow-sm">
                        Clinical Psychologist in Santa Monica: Therapy for Anxiety, Trauma & Burnout
                    </h1>
                    <h2 className="text-gray-100 text-lg md:text-xl font-sans leading-relaxed mb-10 max-w-[600px] drop-shadow-sm">
                        Practical, depth-oriented therapy for high-achievers who feel functional on the outside, but exhausted on the inside.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
                        <StarBorder 
                            as="button"
                            className="text-white cursor-pointer"
                            speed="5s" // Slower, more elegant
                            color="#F7F5F0" // Warm Sand
                            thickness={1}
                        >
                            Schedule Your Free Consultation
                        </StarBorder>

                        <button className="h-12 px-8 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold transition-all cursor-pointer">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}