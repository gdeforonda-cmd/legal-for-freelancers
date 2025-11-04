import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PricingPlans from "./components/PricingPlans";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <PricingPlans />  {/* 👈 acá aparece */}
    </main>
  );
}
