import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import experience from "../../data/experience";

export default function Achievements() {
  return (
    <section className="relative py-28">

      <Container>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-5">
            PROFESSIONAL IMPACT
          </p>

          <h2 className="text-4xl font-bold mb-16">
            Career Highlights
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {experience.achievements.map((item, index) => (

            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-10
                text-center
              "
            >

              <div className="text-5xl font-black text-blue-400 mb-5">
                {item.value}
              </div>

              <div className="text-zinc-400 tracking-wide">
                {item.label}
              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}