import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import experience from "../../data/experience";

export default function SkillsUsed() {
  return (
    <section className="relative py-28">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-5">
            CORE EXPERTISE
          </p>

          <h2 className="text-4xl font-bold mb-16">
            Professional Capabilities
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {experience.skills.map((skill, index) => (

            <motion.div
              key={skill.title}
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
                p-8
              "
            >

              <div className="flex justify-between items-center mb-6">

                <h3 className="text-xl font-semibold">
                  {skill.title}
                </h3>

                <span className="text-blue-400 font-bold">
                  {skill.value}%
                </span>

              </div>

              <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.value}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}