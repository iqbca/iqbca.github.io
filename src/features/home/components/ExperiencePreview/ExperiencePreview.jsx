import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import Button from "../../../../components/ui/Button/Button";

const experience = [
  {
    company: "Mercer",
    role: "Senior Specialist",
    period: "2025 - Present",
  },
  {
    company: "InCred Wealth",
    role: "Assistant Manager",
    period: "2023",
  },
  {
    company: "Anand Rathi Wealth",
    role: "Account Manager",
    period: "2021 - 2023",
  },
  {
    company: "ClovekWealth",
    role: "Investment Analyst",
    period: "2019 - 2021",
  },
];

export default function ExperiencePreview() {
  return (
    <section className="py-28">

      <Container>

        <div className="mb-16">

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-4">
            Experience
          </p>

          <h2 className="text-5xl font-black mb-5">
            Career Journey
          </h2>

          <p className="text-zinc-400 max-w-2xl leading-8">
            A progression from investment analytics to institutional portfolio
            reporting and analytics engineering.
          </p>

        </div>

        <div className="relative border-l border-white/10 ml-3">

          {experience.map((item, index) => (

            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-12 pb-14"
            >

              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-500" />

              <p className="text-zinc-500 text-sm mb-2">
                {item.period}
              </p>

              <h3 className="text-3xl font-bold">
                {item.company}
              </h3>

              <p className="text-zinc-400 mt-2">
                {item.role}
              </p>

            </motion.div>

          ))}

        </div>

        <Button>
          View Full Experience
        </Button>

      </Container>

    </section>
  );
}