import TrueFocus from './TrueFocus';

export default function EmpathySection() {
    return (
        <section className="py-20 md:py-28 px-6 bg-white dark:bg-background-dark">
            <div className="max-w-[800px] mx-auto text-center flex flex-col gap-6">
                <span className="material-symbols-outlined text-4xl text-primary/80">spa</span>

                <div className="flex justify-center">
                    <TrueFocus
                        sentence="Do you feel stuck in overthinking or constantly bracing for something to go wrong?"
                        wordClassName="text-2xl md:text-5xl font-bold text-[#141811] dark:text-white"
                        borderColor="#5F8D78"
                        blurAmount={3}
                        pauseBetweenAnimations={1.5}
                        animationDuration={0.8}
                    />
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-normal leading-relaxed">
                    Many high-achieving adults feel like they have to hold it all together. Here, you don't have to. We focus on unhooking from the pressure to perform and finding a grounded sense of calm.
                </p>
            </div>
        </section>
    );
}