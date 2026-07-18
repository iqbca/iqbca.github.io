import Navbar from "../../components/layout/Navbar/Navbar";
import AnimatedBackground from "../home/components/AnimatedBackground/AnimatedBackground";
import Footer from "../../components/layout/Footer/Footer";

import AboutHero from "./components/AboutHero/AboutHero";
import ProfessionalSummary from "./components/ProfessionalSummary/ProfessionalSummary";
import CareerTimeline from "./components/CareerTimeline/CareerTimeline";
import CoreExpertise from "./components/CoreExpertise/CoreExpertise";
import TechnologyStack from "./components/TechnologyStack/TechnologyStack";
import Education from "./components/Education/Education";
import Philosophy from "./components/Philosophy/Philosophy";
import CareerHighlights from "./components/CareerHighlights/CareerHighlights";

export default function About() {
  return (
    <main className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      <Navbar />
      <AnimatedBackground />
      <AboutHero />
      <ProfessionalSummary />
      <CareerTimeline />
      <CoreExpertise />
      <TechnologyStack />
      <Education />
      <Philosophy />
      <CareerHighlights />
      <Footer />
    </main>
  );
}
