import Navbar from "../../components/layout/Navbar/Navbar";
import AnimatedBackground from "../home/components/AnimatedBackground/AnimatedBackground";
import Footer from "../../components/layout/Footer/Footer";

import ResumeHero from "./components/ResumeHero/ResumeHero";
import ResumeContent from "./components/ResumeContent/ResumeContent";

export default function Resume() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">

      <Navbar />
      <AnimatedBackground />

      <ResumeHero />

      <ResumeContent />

      <Footer />

    </main>
  );
}