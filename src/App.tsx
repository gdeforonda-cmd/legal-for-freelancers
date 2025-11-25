import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PricingPlans from "./components/PricingPlans";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <PricingPlans />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
