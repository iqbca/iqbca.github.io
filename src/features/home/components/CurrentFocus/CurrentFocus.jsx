import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import Button from "../../../../components/ui/Button/Button";

export default function CurrentFocus() {
  return (
    <section className="py-28">

      <Container>

        <motion.div
          whileHover={{ y: -6 }}
          className="
          rounded-[32px]
          border
          border-white/10
          bg-gradient-to-r
          from-blue-950/40
          to-zinc-900
          p-16
          "
        >

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-4">
            Current Focus
          </p>

          <h2 className="text-5xl font-black mb-6">
            Building MIZAN
          </h2>

          <p className="text-zinc-400 max-w-3xl leading-8 mb-10">
            I'm currently developing MIZAN, an institutional-grade portfolio
            analytics platform designed for performance reporting,
            benchmark analytics, risk measurement, reporting automation
            and investment intelligence.
          </p>

          <div className="flex flex-wrap gap-4">

            <Button>
              View MIZAN
            </Button>

            <Button variant="secondary">
              GitHub Repository
            </Button>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}