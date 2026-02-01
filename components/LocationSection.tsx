import office1 from '@/app/assets/office1.jpeg';
import Image from 'next/image';

export default function LocationSection() {
    return (
        <section className="relative z-10 py-32 overflow-hidden">
            <Image
                src={office1}
                alt="Sanctuary in Santa Monica"
                fill
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 max-w-[1120px] mx-auto px-6 flex justify-center">
                <div className="bg-background/95 dark:bg-sage-dark/95 backdrop-blur shadow-2xl p-10 md:p-14 rounded-xl max-w-[600px] text-center border-t-4 border-primary">
                    <h2 className="text-3xl font-black text-[#141811] dark:text-white mb-4">A Quiet Sanctuary in Santa Monica</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        My office is designed to be a safe haven from the noise of the city. Whether you prefer the connection of in-person sessions or the convenience of telehealth, I offer a space where you can truly be yourself.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <div className="flex items-center gap-2 text-sm font-bold text-[#141811] dark:text-white bg-sage-light dark:bg-sage-dark px-4 py-2 rounded-full">
                            <span className="material-symbols-outlined text-primary">location_on</span>
                            Santa Monica, CA
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-[#141811] dark:text-white bg-sage-light dark:bg-sage-dark px-4 py-2 rounded-full">
                            <span className="material-symbols-outlined text-primary">videocam</span>
                            Telehealth Available
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}