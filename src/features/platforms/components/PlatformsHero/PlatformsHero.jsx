import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import Badge from "../../../../components/ui/Badge/Badge";
import platforms from "../../data/platforms";

export default function PlatformsHero() {
  return (
    <section className="relative pt-36 pb-24">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-4xl"
        >

          <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-6">
            {platforms.hero.badge}
          </p>

          <h1 className="font-['Space_Grotesk'] font-extrabold text-6xl leading-tight mb-8">

            {platforms.hero.title.map((line) => (

              <div key={line}>
                {line}
              </div>

            ))}

          </h1>

          <p className="text-zinc-300 text-lg leading-8 mb-10">
            {platforms.hero.description}
          </p>

          <div className="flex gap-3 flex-wrap">

            <Badge>Investment Analytics</Badge>

            <Badge>Enterprise Software</Badge>

            <Badge>Automation</Badge>

            <Badge>Artificial Intelligence</Badge>

            <Badge>Python</Badge>

            <Badge>React</Badge>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}