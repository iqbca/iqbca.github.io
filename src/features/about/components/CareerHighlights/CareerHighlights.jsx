import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";

const stats = [
  {
    value: "6+",
    label: "Years Experience",
  },
  {
    value: "4",
    label: "Financial Institutions",
  },
  {
    value: "100+",
    label: "Automated Reports",
  },
  {
    value: "100 Cr+",
    label: "Managed Wealth",
  },
  {
    value: "UK",
    label: "Institutional Clients",
  },
  {
    value: "10+",
    label: "Technologies",
  },
];

export default function CareerHighlights() {
  return (
    <section className="relative py-28">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-5">
            CAREER IMPACT
          </p>

          <h2 className="text-4xl font-bold mb-16">
            Highlights At A Glance
          </h2>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {stats.map((item, index) => (

            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
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

              <div className="text-5xl font-black text-blue-400 mb-4">
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