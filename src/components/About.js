import React from 'react';

const About = () => (
  <section id="about" className="py-24 px-6 bg-white text-gray-800">
    <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
      
      {/* Image with fade-right animation */}
      <div data-aos="fade-right">
        <img
          src="https://caafe-bliss.netlify.app/cafe-bar.jpg"
          alt="Our Café"
          className="rounded-3xl shadow-lg"
        />
      </div>

      {/* Text with fade-left animation */}
      <div data-aos="fade-left">
        <h2 className="text-4xl font-extrabold mb-6 text-rose-600">About Café Bliss</h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          At Café Bliss, we believe that every meal should be an experience. Our chefs use only the freshest ingredients to craft dishes that are as beautiful as they are delicious. Whether you're here for a quick coffee or a full-course meal, we aim to make every visit memorable.
        </p>
        <p className="text-gray-600">
          Join us for a cozy ambiance, friendly service, and unforgettable flavors. We can’t wait to welcome you!
        </p>
      </div>
    </div>
  </section>
);

export default About;
