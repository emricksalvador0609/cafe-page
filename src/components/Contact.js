import React from 'react';

const Contact = () => (
  <section id="contact" className="py-24 bg-rose-100 px-6">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-extrabold text-rose-700 mb-12 text-center">Get in Touch</h2>
      <form className="bg-white rounded-3xl p-10 shadow-md max-w-2xl mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block text-rose-700 font-semibold mb-2">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-rose-700 font-semibold mb-2">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-rose-700 font-semibold mb-2">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Your message"
            className="w-full px-4 py-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>
        <button
          type="submit"
          className="bg-rose-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-rose-700 transition duration-300 ease-in-out w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
