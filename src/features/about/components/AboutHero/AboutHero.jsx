import { motion } from "framer-motion";

import Container from "../../../../components/ui/Container/Container";
import Badge from "../../../../components/ui/Badge/Badge";

import about from "../../../../data/about";
import { PROFILE_IMAGE } from "../../../../utils/constants";

export default function AboutHero() {
  return (
    <section className="relative z-10 pt-36 pb-24">

      <Container>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-6">
              {about.badge}
            </p>

            <h1 className="font-['Space_Grotesk'] font-extrabold leading-tight text-5xl md:text-6xl mb-8">

              {about.title.map(line => (
                <div key={line}>{line}</div>
              ))}

            </h1>

            <p className="text-zinc-300 leading-8 text-lg max-w-2xl mb-12">
              {about.description}
            </p>

            <div className="grid grid-cols-2 gap-4">

              {about.stats.map(stat => (

                <Badge key={stat.label}>

                  <div className="text-center">

                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>

                    <div className="text-sm text-zinc-400">
                      {stat.label}
                    </div>

                  </div>

                </Badge>

              ))}

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="flex justify-center lg:justify-end"
          >

            <div className="relative">

              <div className="absolute -inset-12 rounded-full bg-blue-500/20 blur-[140px]" />

              <img
                src={PROFILE_IMAGE}
                alt="Asif Iqbal"
                className="w-[420px] rounded-[32px] border border-white/10"
              />

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}