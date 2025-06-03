import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position + some offset to trigger a bit before section top
      const scrollPosition = window.scrollY + 150;

      let current = 'home'; // default active

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = link.href.substring(1); // remove '#' from href
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-rose-600">
          Café Bliss
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`hover:text-rose-600 ${
                activeSection === href.substring(1)
                  ? 'text-rose-600 font-bold border-b-2 border-rose-600'
                  : ''
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-2 text-gray-700 font-medium shadow">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={toggleMenu}
              className={`block hover:text-rose-600 ${
                activeSection === href.substring(1)
                  ? 'text-rose-600 font-bold border-l-4 border-rose-600 pl-2'
                  : ''
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
