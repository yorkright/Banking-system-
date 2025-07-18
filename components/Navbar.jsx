'use client'
import  { useEffect, useState } from 'react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Accounts', href: '/createAcc' },
    { name: 'Transfer', href: '/transfer' },
    { name: 'Payments', href: '/payments' },
    { name: 'Profile', href: '/profile' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // Track scroll direction and position
    const [scrolledUp, setScrolledUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Listen for scroll events
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolledUp(currentScrollY < lastScrollY || currentScrollY === 0);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`shadow-lg transition-colors duration-300 ${
                scrolledUp
                    ? 'bg-gradient-to-r from-gray-600 to-black'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <span
                            className={`font-bold font-sans text-xl tracking-wide ${
                                scrolledUp ? 'text-green-100' : 'text-blue-700'
                            }`}
                        >
                            Fin
                            <span className='text-amber-500 font-extrabold text-4xl font-serif'>T</span>
                            ech
                        </span>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`hover:bg-blue-600 px-3 py-2 rounded transition ${
                                    scrolledUp ? 'text-white' : 'text-blue-700'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            className={`font-semibold px-4 py-2 rounded shadow transition ${
                                scrolledUp
                                    ? 'bg-white text-blue-700 hover:bg-blue-100'
                                    : 'bg-blue-700 text-white hover:bg-blue-600'
                            }`}
                        >
                            Login
                        </button>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setOpen(!open)}
                            className={`${scrolledUp ? 'text-white' : 'text-blue-700'} focus:outline-none`}
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {open && (
                <div className={`${scrolledUp ? 'bg-blue-600' : 'bg-transparent'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`block hover:bg-blue-700 px-3 py-2 rounded transition ${
                                    scrolledUp ? 'text-white' : 'text-blue-700'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            className={`w-full font-semibold px-4 py-2 rounded shadow transition mt-2 ${
                                scrolledUp
                                    ? 'bg-white text-blue-700 hover:bg-blue-100'
                                    : 'bg-blue-700 text-white hover:bg-blue-600'
                            }`}
                        >
                            Login
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}