import Navbar from "../../components/layout/Navbar/Navbar";
import AnimatedBackground from "../home/components/AnimatedBackground/AnimatedBackground";
import Footer from "../../components/layout/Footer/Footer";

import ProjectsHero from "./components/ProjectsHero/ProjectsHero";
import ProjectGrid from "./components/ProjectGrid/ProjectGrid";

export default function Projects() {
  return (
    <main className="relative min-h-screen bg-slate-900 text-white overflow-hidden">

      <Navbar />
      <AnimatedBackground />

      <ProjectsHero />

      <ProjectGrid />

      <Footer />

    </main>
  );
}