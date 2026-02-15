'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMobileMenu();
    if (pathname === '/') {
      // If on homepage, just scroll to services
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, go to homepage first, then scroll
      window.location.href = '/#services';
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 flex items-center ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
            <a href={pathname === '/' ? '#services' : '/#services'} onClick={handleServicesClick} className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
            <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 transition-colors">Pricing</Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors">Portfolio</Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</Link>
            <Link href="/work" className="text-gray-700 hover:text-indigo-600 transition-colors">Work</Link>
            <Link href="/contact" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}>
          <div className="flex flex-col py-4">
            <Link
              href="/"
              className="px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <a
              href={pathname === '/' ? '#services' : '/#services'}
              className="px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              onClick={handleServicesClick}
            >
              Services
            </a>
            <Link
              href="/pricing"
              className="px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/work"
              className="px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="mx-6 mt-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors text-center"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
