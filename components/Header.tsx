'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (isHomePage) {
                const heroSection = document.querySelector('section');
                if (heroSection) {
                    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                    setIsScrolled(window.scrollY > heroBottom - 80);
                }
            }
        };

        if (isHomePage) {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check initial position
            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            setIsScrolled(true); // Always show solid background on other pages
        }
    }, [isHomePage]);

    const isTransparent = isHomePage && !isScrolled;

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
            ${isTransparent ? 'bg-transparent' : 'bg-white shadow-md'}`}>
            <div className={`container mx-auto px-6 py-4 ${isTransparent ? 'text-white' : 'text-bg'}`}>
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                        <span className="text-xl font-bold">Jarvis Safety</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/services" className="hover:opacity-80 transition-opacity">
                            Services
                        </Link>
                        <Link href="/about" className="hover:opacity-80 transition-opacity">
                            About
                        </Link>
                        <Link href="/contact" className="hover:opacity-80 transition-opacity">
                            Contact
                        </Link>
                        <Link href="/blog" className="hover:opacity-80 transition-opacity">
                            Blog
                        </Link>
                        <Link href="/team" className="hover:opacity-80 transition-opacity">
                            Team
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
