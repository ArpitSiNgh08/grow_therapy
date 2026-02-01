import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";

export default function ServicesSection() {
    const services = [
        {
            title: "Anxiety & Burnout",
            icon: "sentiment_worried",
            desc: "Break the cycle of constant worry and exhaustion. Learn tools to regulate your nervous system and reclaim your energy.",
            color: "bg-[#F7F5F0] dark:bg-sage-dark",
            textColor: "text-[#2D332F]"
        },
        {
            title: "Trauma & EMDR",
            icon: "psychology_alt",
            desc: "Process past experiences that are holding you back. EMDR offers a structured way to heal without reliving the pain.",
            color: "bg-[#E6EBE8] dark:bg-[#2F3E37]",
            textColor: "text-[#2D332F]"
        },
        {
            title: "Perfectionism",
            icon: "verified",
            desc: "Shift from self-criticism to self-compassion. Achieve your goals without the crushing weight of unrealistic expectations.",
            color: "bg-[#5F8D78] dark:bg-primary",
            textColor: "text-white"
        }
    ];

    return (
        <section className="relative z-0 py-24 bg-white dark:bg-background-dark overflow-visible" id="services">
            <div className="max-w-[1120px] mx-auto px-6">
                <div className="text-center max-w-[600px] mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-4">
                        <span className="w-8 h-[2px] bg-primary"></span>
                        Specialties
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#141811] dark:text-white mb-6">Areas of Focus</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Specialized clinical support tailored to high-achievers navigating the complexities of modern life.
                    </p>
                </div>

                <div className="relative ">
                    <ScrollStack
                        useWindowScroll={true}
                        itemDistance={80}
                        itemStackDistance={30}
                        baseScale={0.8}
                        itemScale={0.06}
                        className="!overflow-visible"
                    >
                        {services.map((service, index) => (
                            <ScrollStackItem
                                key={index}
                                itemClassName={`${service.color} ${service.textColor} border border-black/5 flex flex-col items-center justify-center text-center`}
                            >
                                <div className={`size-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm ${index === 2 ? 'bg-white/20 text-white' : 'bg-primary/20 text-primary-dark dark:text-primary'}`}>
                                    <span className="material-symbols-outlined text-5xl">{service.icon}</span>
                                </div>
                                <h3 className="text-3xl font-black mb-4">{service.title}</h3>
                                <p className="max-w-[500px] opacity-90 text-xl leading-relaxed">
                                    {service.desc}
                                </p>
                            </ScrollStackItem>
                        ))}
                    </ScrollStack>
                </div>
            </div>
        </section>
    );
}