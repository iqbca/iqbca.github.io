import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import Badge from "../../../../components/ui/Badge/Badge";
import experience from "../../data/experience";
import { PROFILE_IMAGE } from "../../../../utils/constants";

export default function ExperienceHero() {
  return (
    <section className="relative pt-36 pb-24">

      <Container>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-6">
              {experience.hero.badge}
            </p>

            <h1 className="font-['Space_Grotesk'] font-extrabold text-6xl leading-tight mb-8">

              {experience.hero.title.map((line) => (

                <div key={line}>
                  {line}
                </div>

              ))}

            </h1>

            <p className="text-zinc-300 text-lg leading-8 max-w-3xl mb-10">
              {experience.hero.description}
            </p>

            <div className="flex gap-3 flex-wrap">

              <Badge>Investment Analytics</Badge>

              <Badge>Institutional Reporting</Badge>

              <Badge>Portfolio Analytics</Badge>

              <Badge>Automation</Badge>

              <Badge>Python</Badge>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute -inset-12 rounded-full bg-blue-600/20 blur-[130px]" />

              <img
                src={PROFILE_IMAGE}
                alt="Asif Iqbal"
                className="w-[430px] rounded-[34px] border border-white/10"
              />

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}