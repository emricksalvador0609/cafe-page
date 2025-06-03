import React from 'react';

const testimonials = [
  {
    name: 'Sophia Lee',
    role: 'Food Blogger',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    quote: 'The ambiance and flavors here are just amazing. A must-visit café!',
  },
  {
    name: 'Carlos Rivera',
    role: 'Chef, Culinary Co.',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote: 'Their attention to detail is exceptional. You can taste the passion in every bite.',
  },
  {
    name: 'Mia Chen',
    role: 'Local Guide',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'This place brings warmth and flavor together. Highly recommended!',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-rose-50 px-6">
    <div className="container mx-auto max-w-5xl text-center">
      <h2 className="text-4xl font-extrabold text-rose-600 mb-12">Customer Love</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map(({ name, role, photo, quote }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-rose-700 italic mb-6">&quot;{quote}&quot;</p>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={photo}
                alt={name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-rose-900">{name}</p>
                <p className="text-rose-600 text-sm">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
