import Navbar from "../../components/layout/Navbar/Navbar";
import AnimatedBackground from "../home/components/AnimatedBackground/AnimatedBackground";
import Footer from "../../components/layout/Footer/Footer";

import ExperienceHero from "./components/ExperienceHero/ExperienceHero";
import CompanyTimeline from "./components/CompanyTimeline/CompanyTimeline";
import SkillsUsed from "./components/SkillsUsed/SkillsUsed";
import Achievements from "./components/Achievements/Achievements";
import WorkApproach from "./components/WorkApproach/WorkApproach";

export default function Experience() {
  return (
    <main className="relative min-h-screen bg-slate-900 text-white overflow-hidden">

      <Navbar />
      <AnimatedBackground />

      <ExperienceHero />

      <CompanyTimeline />

      <SkillsUsed />

      <Achievements />

      <WorkApproach />

      <Footer />

    </main>
  );
}