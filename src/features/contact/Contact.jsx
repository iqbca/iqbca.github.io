import Navbar from "../../components/layout/Navbar/Navbar";
import AnimatedBackground from "../home/components/AnimatedBackground/AnimatedBackground";
import Footer from "../../components/layout/Footer/Footer";

import ContactHero from "./components/ContactHero/ContactHero";
import ContactInfo from "./components/ContactInfo/ContactInfo";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
<AnimatedBackground />
      <Navbar />
      

      <ContactHero />

      <ContactInfo />

      <Footer />

    </main>
  );
}