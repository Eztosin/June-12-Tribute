import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import VoicesOfResistance from "./components/VoicesOfResistance";
import LearnMore from "./components/LearnMore";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-charcoal-black">
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <Gallery />
        <VoicesOfResistance />
        <LearnMore />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;