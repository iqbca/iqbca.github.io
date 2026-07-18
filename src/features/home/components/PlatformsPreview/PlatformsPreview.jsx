import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import Badge from "../../../../components/ui/Badge/Badge";
import Button from "../../../../components/ui/Button/Button";

const platforms = [
  {
    title: "Signal System",
    subtitle: "AI Trading Signals",
    description:
      "Automated market signal generation, analytics and notification platform.",
    status: "Active",
  },
  {
    title: "Workflow Automation",
    subtitle: "Reporting Automation",
    description:
      "Automates institutional reporting workflows using Python, SQL and VBA.",
    status: "Planned",
  },
];

export default function PlatformsPreview() {
  return (
    <section className="py-28">

      <Container>

        <div className="mb-16">

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-4">
            Platforms
          </p>

          <h2 className="text-5xl font-black mb-5">
            More Platforms
          </h2>

          <p className="text-zinc-400 max-w-2xl leading-8">
            Beyond Mizan, I'm building a suite of analytics and automation
            platforms focused on institutional investment operations.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {platforms.map((item) => (

            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              <Badge>{item.status}</Badge>

              <h3 className="text-3xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-blue-400 uppercase tracking-[4px] mt-3 mb-6">
                {item.subtitle}
              </p>

              <p className="text-zinc-400 leading-8 mb-8">
                {item.description}
              </p>

              <Button variant="secondary">
                View Details
              </Button>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}