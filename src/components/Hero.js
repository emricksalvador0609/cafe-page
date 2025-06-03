import React from 'react';

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center px-6"
    style={{
      backgroundImage:
        "url('https://i.ibb.co/mVxnKbpr/hero-bg.jpg')",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    <div className="relative text-center max-w-3xl z-10">
      <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg mb-6">
        Welcome to <span className="text-rose-400">Café Bliss</span>
      </h1>
      <p className="text-lg md:text-xl mb-8 text-gray-200">
        Experience the warmth of cozy interiors and flavorful delights served fresh daily.
      </p>
      <a
        href="#menu"
        className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out"
      >
        View Menu
      </a>
    </div>
  </section>
);

export default Hero;
