"use client";

import React, { useState } from "react";

import {
    Navbar,
    NavBody,
    NavItems,
    NavbarButton,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
} from "./ui/resizable-navbar";

const items = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "FAQ", link: "#faq" },
    { name: "Contact", link: "#contact" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar className="fixed top-0 px-0 overflow-visible">
            {/* Desktop Navbar */}
            <NavBody className="shadow-none border-b border-gray-100">
                <div className="flex items-center gap-2 px-4">
                    <span className="material-symbols-outlined text-primary text-2xl">psychology</span>
                    <span className="font-bold text-lg text-text-main dark:text-white whitespace-nowrap">
                        Dr. Maya Reynolds
                    </span>
                </div>

                <NavItems items={items} />

                <div className="flex items-center gap-4 px-4">
                    <NavbarButton
                        href="#contact"
                        className="!bg-primary !text-white border-none shadow-lg rounded-full px-6"
                    >
                        Consultation
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navbar */}
            <MobileNav className="mt-2">
                <MobileNavHeader className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-100">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">psychology</span>
                        <span className="font-bold text-sm text-text-main dark:text-white">
                            Dr. Maya Reynolds
                        </span>
                    </div>
                    <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                </MobileNavHeader>

                <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)} className="rounded-3xl border border-gray-100 shadow-2xl">
                    <div className="flex flex-col gap-2 w-full">
                        {items.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-neutral-600 dark:text-neutral-300 px-6 py-3 hover:bg-sage-light/50 rounded-2xl transition-all"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="px-2 pt-4">
                            <NavbarButton
                                href="#contact"
                                className="!bg-primary !text-white w-full rounded-2xl py-4 shadow-xl"
                                onClick={() => setIsOpen(false)}
                            >
                                Schedule Consultation
                            </NavbarButton>
                        </div>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
