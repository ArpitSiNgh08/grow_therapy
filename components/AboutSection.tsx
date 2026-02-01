/* eslint-disable @next/next/no-img-element */
import TiltedCard from './ui/TiltedCard';
import maya from '../app/assets/maya.png';

export default function AboutSection() {
    return (
        <section className="py-20 bg-sage-light dark:bg-[#1f2918]" id="about">
            <div className="max-w-[1120px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Image */}
                    {/* <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" 
                alt="Portrait of Dr. Maya Reynolds smiling warmly" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-2xl -z-0 hidden md:block"></div>
          </div> */}

                    <TiltedCard
                        imageSrc={maya}
                        altText="Dr. Maya Reynolds"
                        captionText="Dr. Maya Reynolds"
                        containerWidth="300px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={false}
                    />

                    {/* Text */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            About Dr. Reynolds
                        </div>
                        <h2 className="text-[#141811] dark:text-white text-3xl md:text-4xl font-black leading-tight">
                            Warm, Collaborative, and Grounded.
                        </h2>
                        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            <p>
                                I'm Dr. Maya Reynolds. My approach combines the practical tools of CBT with the depth of EMDR and mindfulness.
                            </p>
                            <p>
                                I help you understand your nervous system so you can stop just coping and start living fully. I believe therapy shouldn't just be about venting—it should be about change. Together, we'll create a roadmap to help you navigate life with more ease and authenticity.
                            </p>
                        </div>
                        <div className="pt-4">
                            <button className="flex items-center gap-2 text-[#141811] dark:text-white font-bold hover:text-primary transition-colors group">
                                More About My Approach
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}