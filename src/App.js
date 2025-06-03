import React, { useEffect }  from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // only animate once
    });
  }, []);
  return (
    <>
      <Header />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="menu">
        <Menu />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
};

export default App;
