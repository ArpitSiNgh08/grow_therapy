import Link from "next/link";
import StarBorder from "./StarBorder";

export default function Footer() {
    return (
        <footer className="bg-background-dark text-white py-16 border-t border-primary/20">
            <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.5fr] gap-12">

                {/* Brand */}
                <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-white">
                        <span className="material-symbols-outlined text-primary">psychology</span>
                        <span className="text-lg font-bold">Dr. Maya Reynolds</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Compassionate, evidence-based therapy for adults navigating anxiety, trauma, and life transitions.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="col-span-1">
                    <h4 className="text-primary font-bold mb-4 uppercase text-xs tracking-wider">Quick Links</h4>
                    <ul className="flex flex-col gap-3 text-sm text-gray-300">
                        <li><Link href="#about" className="hover:text-primary transition-colors">About Me</Link></li>
                        <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
                        <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                    </ul>
                </div>



                {/* CTA */}
                <div className="col-span-1">
                    <h4 className="text-primary font-bold mb-4 uppercase text-xs tracking-wider">Get Started</h4>
                    <p className="text-gray-400 text-sm mb-4">Ready to take the next step? Schedule a free 15-minute phone consultation.</p>
                    <StarBorder
                        as="button"
                        className="w-full text-white cursor-pointer"
                        speed="5s"
                        color="#F7F5F0"
                        thickness={1}
                    >
                        Schedule Now
                    </StarBorder>
                </div>
            </div>


        </footer>
    );
}