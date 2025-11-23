import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import AlumniSpotlight from './components/AlumniSpotlight';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Events />
        <Gallery />
        <AlumniSpotlight />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;