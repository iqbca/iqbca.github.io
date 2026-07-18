import Navbar from "../../components/layout/Navbar/Navbar";
import AnimatedBackground from "../home/components/AnimatedBackground/AnimatedBackground";
import Footer from "../../components/layout/Footer/Footer";

import PlatformsHero from "./components/PlatformsHero/PlatformsHero";
import PlatformCards from "./components/PlatformCards/PlatformCards";

export default function Platforms() {
  return (
    <main className="relative min-h-screen bg-slate-900 text-white overflow-hidden">

      <Navbar />
      <AnimatedBackground />

      <PlatformsHero />

      <PlatformCards />

      <Footer />

    </main>
  );
}