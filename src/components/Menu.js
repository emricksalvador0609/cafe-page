import React from 'react';

const menuItems = [
  {
    title: 'Classic Espresso',
    description: 'Rich, smooth espresso made with premium beans.',
    price: '₱120',
  },
  {
    title: 'Avocado Toast',
    description: 'Sourdough toast topped with smashed avocado and chili flakes.',
    price: '₱250',
  },
  {
    title: 'Pasta Carbonara',
    description: 'Creamy pasta with bacon, parmesan, and fresh herbs.',
    price: '₱350',
  },
  {
    title: 'Iced Caramel Latte',
    description: 'Cold brew espresso with milk and caramel syrup.',
    price: '₱150',
  },
  {
    title: 'Grilled Panini',
    description: 'Toasted sandwich with ham, cheese, and pesto.',
    price: '₱280',
  },
  {
    title: 'Chocolate Lava Cake',
    description: 'Warm, gooey chocolate cake with vanilla ice cream.',
    price: '₱180',
  },
];

const Menu = () => (
  <section id="menu" className="py-24 bg-rose-50 px-6">
    <div className="container mx-auto max-w-5xl text-center">
      <h2
        className="text-4xl font-extrabold text-rose-600 mb-12"
        data-aos="fade-up"
      >
        Our Menu
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 shadow hover:shadow-lg transition duration-300 text-left"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              <span className="text-rose-500 font-semibold">{item.price}</span>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Menu;
