import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import experience from "../../data/experience";

export default function CompanyTimeline() {
  return (
    <section className="relative py-28">

      <Container>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-5">
            CAREER JOURNEY
          </p>

          <h2 className="text-4xl font-bold mb-20">
            Companies & Roles
          </h2>

        </motion.div>

        <div className="relative">

          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-500/20 -translate-x-1/2" />

          {experience.companies.map((company, index) => (

            <motion.div
              key={company.company}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .6,
                delay: index * .12,
              }}
              viewport={{ once: true }}
              className={`
                relative
                flex
                mb-20
                ${index % 2 === 0
                  ? "justify-start pr-[52%]"
                  : "justify-end pl-[52%]"
                }
              `}
            >

              <div className="max-w-md w-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">

                <div className="text-blue-400 font-semibold mb-3">
                  {company.year}
                </div>

                <h3 className="text-3xl font-bold mb-2">
                  {company.company}
                </h3>

                <div className="text-lg mb-1">
                  {company.role}
                </div>

                <div className="text-zinc-500 mb-6">
                  {company.location}
                </div>

                <p className="text-zinc-400 leading-8 mb-8">
                  {company.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {company.technologies.map((tech) => (

                    <div
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-blue-500/20
                        bg-blue-500/10
                        px-4
                        py-2
                        text-sm
                      "
                    >
                      {tech}
                    </div>

                  ))}

                </div>

              </div>

              <div
                className="
                  absolute
                  left-1/2
                  top-10
                  -translate-x-1/2
                  h-5
                  w-5
                  rounded-full
                  bg-blue-500
                  shadow-[0_0_20px_rgba(59,130,246,.8)]
                  border-4
                  border-slate-900
                "
              />

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}