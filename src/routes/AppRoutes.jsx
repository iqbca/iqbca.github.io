import { Routes, Route } from "react-router-dom";

import Home from "../features/home/Home";
import About from "../features/about/About";
import Experience from "../features/experience/Experience";
import Platforms from "../features/platforms/Platforms";
import Mizan from "../features/platforms/Mizan";
import SignalSystem from "../features/platforms/SignalSystem";
import Projects from "../features/projects/Projects";
import Resume from "../features/resume/Resume";
import Contact from "../features/contact/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/experience" element={<Experience />} />
<Route path="/platforms" element={<Platforms />} />
<Route path="/platforms/mizan" element={<Mizan />} />
<Route path="/platforms/signal-system" element={<SignalSystem />} />
<Route path="/projects" element={<Projects />} />
<Route path="/resume" element={<Resume />} />
<Route path="/contact" element={<Contact />} />
    </Routes>
  );
}