import Navbar from "../../components/layout/Navbar/Navbar"; 
import Hero from "./components/Hero/Hero";
import HeroStats from "./components/HeroStats/HeroStats";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import FeaturedPlatform from "./components/FeaturedPlatform/FeaturedPlatform";
import PlatformsPreview from "./components/PlatformsPreview/PlatformsPreview";
import ExperiencePreview from "./components/ExperiencePreview/ExperiencePreview";
import Capabilities from "./components/Capabilities/Capabilities";
import CurrentFocus from "./components/CurrentFocus/CurrentFocus";
import Footer from "../../components/layout/Footer/Footer";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen bg-slate-800 text-white overflow-hidden">
    
 <AnimatedBackground />
      <Navbar />
 
      <Hero />

      <HeroStats />
      <FeaturedPlatform />
      <PlatformsPreview />
      <ExperiencePreview />
      <Capabilities />
      <CurrentFocus />
      <Footer />

       </main>
  );
}