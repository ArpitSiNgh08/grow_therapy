import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f2f4f0] dark:border-[#2a3323] bg-white/95 dark:bg-[#192111]/95 backdrop-blur-sm">
      <div className="px-4 md:px-10 py-3 max-w-[1280px] mx-auto flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center gap-4">
          <div className="size-8 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">psychology</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-[#141811] dark:text-white">
            Dr. Maya Reynolds
          </h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-8">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300">About</Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300">Services</Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300">FAQ</Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300">Contact</Link>
          </nav>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-[#141811] text-sm font-bold shadow-sm">
            <span className="truncate">Schedule Consultation</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-gray-600 dark:text-gray-300">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}