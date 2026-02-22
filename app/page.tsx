import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AppOverviewSection from "./components/AppOverviewSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <AppOverviewSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
