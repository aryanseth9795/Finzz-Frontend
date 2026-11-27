import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Hero from "./components/sections/Hero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Features } from "./components/sections/Features";
import { Videos } from "./components/sections/Videos";
import { Privacy } from "./components/sections/Privacy";
import { Faq } from "./components/sections/Faq";
import { Download } from "./components/sections/Download";
import AppJsonLd from "./components/ui/AppJsonLd";
import { homeMetadata } from "./lib/metadata";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <AppJsonLd />
      <Navbar variant="overlay" />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Videos />
        <Privacy />
        <Faq />
        <Download />
      </main>
      <Footer />
    </>
  );
}
