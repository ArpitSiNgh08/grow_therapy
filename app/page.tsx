import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EmpathySection from "@/components/EmpathySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <EmpathySection />
      <AboutSection />
      <ServicesSection />
      <LocationSection />
      <Footer />
    </main>
  );
}