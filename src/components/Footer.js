import React from 'react';

const Footer = () => (
  <footer className="bg-rose-600 text-indigo-200 py-12 px-6 text-center select-none">
    <p className="mb-2">© {new Date().getFullYear()} Café Bliss</p>
    <div className="flex justify-center space-x-8">
      <a href="#menu" className="hover:text-white transition">
        Menu
      </a>
      <a href="#gallery" className="hover:text-white transition">
        Gallery
      </a>
      <a href="#about" className="hover:text-white transition">
        About
      </a>
    </div>
  </footer>
);

export default Footer;
