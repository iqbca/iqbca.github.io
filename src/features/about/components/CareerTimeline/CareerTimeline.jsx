import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import about from "../../../../data/about";

export default function CareerTimeline() {
  return (
    <section className="relative z-10 py-28">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-5">
            CAREER JOURNEY
          </p>

          <h2 className="text-4xl font-bold mb-20">
            Professional Growth
          </h2>

        </motion.div>

        <div className="relative">

          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-500/20 -translate-x-1/2" />

          {about.timeline.map((item, index) => (

            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              className={`
                relative
                mb-20
                flex
                ${index % 2 === 0
                  ? "justify-start pr-[52%]"
                  : "justify-end pl-[52%]"
                }
              `}
            >

              <div className="w-full max-w-md">

                <div
                  className="
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  "
                >

                  <div className="text-blue-400 text-sm font-semibold mb-3">
                    {item.year}
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    {item.company}
                  </h3>

                  <div className="text-lg mb-2">
                    {item.role}
                  </div>

                  <div className="text-zinc-400">
                    {item.subtitle}
                  </div>

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