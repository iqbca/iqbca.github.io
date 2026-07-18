import Navbar from "../../components/layout/Navbar/Navbar";
import AnimatedBackground from "../home/components/AnimatedBackground/AnimatedBackground";
import Footer from "../../components/layout/Footer/Footer";
import Container from "../../components/ui/Container/Container";

import { motion } from "framer-motion";

import mizan from "./data/mizan";

export default function Mizan() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">

      <Navbar />
      <AnimatedBackground />

      <section className="pt-36 pb-28">

        <Container>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-6">
              PLATFORM
            </p>

            <h1 className="text-6xl font-black mb-8">
              {mizan.name}
            </h1>

            <p className="text-xl text-zinc-300 leading-9 max-w-4xl mb-14">
              {mizan.description}
            </p>

          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

              <h2 className="text-3xl font-bold mb-8">
                Architecture
              </h2>

              <div className="space-y-4">

                {mizan.modules.map((item) => (

                  <div
                    key={item}
                    className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

              <h2 className="text-3xl font-bold mb-8">
                Technology Stack
              </h2>

              <div className="flex flex-wrap gap-3">

                {mizan.tech.map((item) => (

                  <div
                    key={item}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </Container>

      </section>

      <Footer />

    </main>
  );
}   