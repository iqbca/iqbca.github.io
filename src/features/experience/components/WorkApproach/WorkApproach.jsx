import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import experience from "../../data/experience";

export default function WorkApproach() {
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
          "
        >

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-6 text-center">
            WORK APPROACH
          </p>

          <h2 className="text-4xl font-bold text-center mb-12">
            {experience.philosophy.title}
          </h2>

          <p className="max-w-5xl mx-auto text-center text-xl leading-10 text-zinc-300 mb-16">
            {experience.philosophy.description}
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <motion.div
              whileHover={{ y: -8 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >

              <div className="text-blue-400 text-4xl mb-5">
                01
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Understand
              </h3>

              <p className="text-zinc-400 leading-8">
                Analyse existing investment workflows, reporting processes and
                operational challenges before proposing technical solutions.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >

              <div className="text-blue-400 text-4xl mb-5">
                02
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Automate
              </h3>

              <p className="text-zinc-400 leading-8">
                Replace repetitive manual work with scalable automation using
                Python, SQL, VBA, Power Query and modern reporting tools.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >

              <div className="text-blue-400 text-4xl mb-5">
                03
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Improve
              </h3>

              <p className="text-zinc-400 leading-8">
                Deliver faster reporting, higher accuracy and better decision
                support through robust analytical systems and continuous
                process optimisation.
              </p>

            </motion.div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}