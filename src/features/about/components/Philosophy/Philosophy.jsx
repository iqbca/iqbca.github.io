import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";

export default function Philosophy() {
  return (
    <section className="relative py-28">

      <Container>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            rounded-[40px]
            border
            border-blue-500/15
            bg-gradient-to-br
            from-blue-500/5
            to-cyan-500/5
            p-16
            text-center
          "
        >

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-6">
            PHILOSOPHY
          </p>

          <h2 className="text-4xl font-bold mb-10">
            Building Better Investment Systems
          </h2>

          <p className="max-w-4xl mx-auto text-xl leading-10 text-zinc-300">
            I believe investment professionals should spend their time making
            decisions—not preparing spreadsheets. My focus is building reliable,
            scalable analytics platforms that automate repetitive reporting,
            improve transparency and help investment teams work more efficiently.
          </p>

        </motion.div>

      </Container>

    </section>
  );
}