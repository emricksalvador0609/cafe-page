import React from 'react';

const galleryImages = [
  { url: 'https://caafe-bliss.netlify.app/coffee-cup.jpg', alt: 'Coffee in a white ceramic cup' },
  { url: 'https://caafe-bliss.netlify.app/restaurant-interior.jpg', alt: 'Cozy restaurant interior' },
  { url: 'https://caafe-bliss.netlify.app/brunch-table.jpg', alt: 'Brunch items on a table' },
  { url: 'https://caafe-bliss.netlify.app/dessert-cake.jpg', alt: 'Slice of chocolate dessert cake' },
  { url: 'https://caafe-bliss.netlify.app/pizza-cheese.jpg', alt: 'Cheesy pizza slice' },
  { url: 'https://caafe-bliss.netlify.app/cafe-latte-art.jpg', alt: 'Latte with heart-shaped art' },
];

const Gallery = () => (
  <section id="gallery" className="py-24 px-6 bg-white">
    <div className="container mx-auto max-w-6xl text-center">
      <h2
        className="text-4xl font-extrabold text-rose-600 mb-12"
        data-aos="fade-up"
      >
        Gallery
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
