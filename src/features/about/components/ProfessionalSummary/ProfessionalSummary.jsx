import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";

const points = [
  {
    title: "Institutional Investment Reporting",
    text: "Delivering performance reporting, attribution analysis and benchmark evaluation for UK pension and institutional investment clients.",
  },
  {
    title: "Process Automation",
    text: "Designing scalable reporting workflows using Python, SQL, VBA, Power Query and Power BI to eliminate repetitive manual work.",
  },
  {
    title: "Portfolio Analytics",
    text: "Building analytical solutions covering portfolio performance, benchmark comparison, risk analysis and investment dashboards.",
  },
  {
    title: "Technology Driven Finance",
    text: "Combining financial domain knowledge with software engineering principles to build modern analytics platforms.",
  },
];

export default function ProfessionalSummary() {
  return (
    <section className="relative z-10 py-24">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-5">
            PROFESSIONAL SUMMARY
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Building Better Investment Workflows
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {points.map((item) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
              "
            >

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-8">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}