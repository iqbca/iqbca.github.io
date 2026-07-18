import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import Badge from "../../../../components/ui/Badge/Badge";

import projects from "../../data/projects";

export default function ProjectsHero() {
  return (
    <section className="pt-36 pb-24">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-6">
            {projects.hero.badge}
          </p>

          <h1 className="text-6xl font-black leading-tight mb-8">

            {projects.hero.title.map((line)=>(

              <div key={line}>{line}</div>

            ))}

          </h1>

          <p className="text-zinc-300 text-lg leading-8 mb-10 max-w-4xl">
            {projects.hero.description}
          </p>

          <div className="flex gap-3 flex-wrap">

            <Badge>Python</Badge>

            <Badge>SQL</Badge>

            <Badge>React</Badge>

            <Badge>Investment Analytics</Badge>

            <Badge>Automation</Badge>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}