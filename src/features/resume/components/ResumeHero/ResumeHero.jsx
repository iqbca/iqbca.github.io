import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import resume from "../../data/resume";

export default function ResumeHero() {

  return (

    <section className="pt-36 pb-24">

      <Container>

        <motion.div
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
        >

          <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-6">
            {resume.hero.badge}
          </p>

          <h1 className="text-6xl font-black leading-tight mb-8">

            {resume.hero.title.map(line=>(

              <div key={line}>{line}</div>

            ))}

          </h1>

          <p className="text-zinc-300 text-lg leading-8 max-w-4xl">
            {resume.hero.description}
          </p>

        </motion.div>

      </Container>

    </section>

  );

}