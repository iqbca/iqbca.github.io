import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";

const skills = [
  {
    title: "Investment Reporting",
    level: 96,
    tools: "Mercer • UK Pension Schemes • Performance Reporting",
  },
  {
    title: "Portfolio Analytics",
    level: 92,
    tools: "Benchmarking • Attribution • Performance Analysis",
  },
  {
    title: "Python Automation",
    level: 90,
    tools: "Pandas • Automation • APIs • Reporting",
  },
  {
    title: "SQL & PostgreSQL",
    level: 88,
    tools: "Queries • Database Design • Analytics",
  },
  {
    title: "Power BI",
    level: 84,
    tools: "Dashboards • DAX • Visualization",
  },
  {
    title: "Excel / VBA",
    level: 94,
    tools: "Automation • Models • Power Query",
  },
];

export default function CoreExpertise() {
  return (
    <section className="relative py-28">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-5">
            EXPERTISE
          </p>

          <h2 className="text-4xl font-bold mb-16">
            Core Capabilities
          </h2>

        </motion.div>

        <div className="space-y-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >

              <div className="flex justify-between mb-3">

                <h3 className="text-xl font-semibold">
                  {skill.title}
                </h3>

                <span className="text-blue-400 font-bold">
                  {skill.level}%
                </span>

              </div>

              <div className="h-2 rounded-full bg-white/10 overflow-hidden mb-5">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />

              </div>

              <p className="text-zinc-400">
                {skill.tools}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}