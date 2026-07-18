import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";

const capabilities = [
  {
    title: "Investment Analytics",
    items: [
      "Portfolio Analytics",
      "Performance Reporting",
      "Benchmarking",
      "Attribution",
    ],
  },
  {
    title: "Analytics Engineering",
    items: [
      "Python",
      "SQL",
      "PostgreSQL",
      "Workflow Automation",
    ],
  },
  {
    title: "Business Intelligence",
    items: [
      "Power BI",
      "Executive Dashboards",
      "ETL",
      "KPI Reporting",
    ],
  },
  {
    title: "Automation",
    items: [
      "Excel",
      "VBA",
      "Power Query",
      "Process Automation",
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="py-28">
      <Container>

        <div className="mb-16">
          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-4">
            Capabilities
          </p>

          <h2 className="text-5xl font-black mb-5">
            What I Build
          </h2>

          <p className="text-zinc-400 max-w-2xl leading-8">
            Technical and domain capabilities developed through institutional investment analytics and engineering projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">

          {capabilities.map((section) => (

            <motion.div
              key={section.title}
              whileHover={{ y: -8 }}
              className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              <h3 className="text-2xl font-bold mb-6">
                {section.title}
              </h3>

              <div className="space-y-4">

                {section.items.map((item) => (
                  <div
                    key={item}
                    className="text-zinc-300"
                  >
                    • {item}
                  </div>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}