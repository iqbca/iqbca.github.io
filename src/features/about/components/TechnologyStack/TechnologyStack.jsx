import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";

const tech = [
  "Python",
  "SQL",
  "PostgreSQL",
  "Power BI",
  "Excel",
  "VBA",
  "React",
  "Git",
  "Power Query",
  "Pandas",
  "Chart.js",
  "Framer Motion",
];

export default function TechnologyStack() {
  return (
    <section className="relative py-28">

      <Container>

        <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-5">
          TECHNOLOGY
        </p>

        <h2 className="text-4xl font-bold mb-16">
          Technology Ecosystem
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          {tech.map((item, index) => (

            <motion.div
              key={item}
              initial={{ opacity: 0, scale: .8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                y: -8,
                scale: 1.06,
              }}
              transition={{
                delay: index * .05,
                type: "spring",
                stiffness: 220,
              }}
              viewport={{ once: true }}
              className="
                rounded-full
                border
                border-blue-500/20
                bg-white/[0.03]
                px-8
                py-4
                text-lg
                font-medium
                shadow-lg
                hover:border-cyan-400
                hover:shadow-blue-500/20
                cursor-default
              "
            >
              {item}
            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}