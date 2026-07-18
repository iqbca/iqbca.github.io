import hero from "../../../../data/hero";
import Button from "../../../../components/ui/Button/Button";
import Badge from "../../../../components/ui/Badge/Badge";
import Container from "../../../../components/ui/Container/Container";
import { PROFILE_IMAGE } from "../../../../utils/constants";
import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] pt-28 pb-10">

      <Container>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 xl:gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-6">
              {hero.badge}
            </p>

            <h1 className="font-['Space_Grotesk'] font-extrabold leading-[1.05] text-5xl md:text-6xl lg:text-7xl mb-8">

              {hero.title.map((line) => (
                <div key={line}>{line}</div>
              ))}

            </h1>

            <p className="text-zinc-300 text-lg leading-8 max-w-3xl mb-10">
              {hero.description}
            </p>

            <div className="flex gap-5 flex-wrap mb-10">

              <Button>
                {hero.buttons.primary}
              </Button>

              <Button variant="secondary">
                {hero.buttons.secondary}
              </Button>

            </div>

            <div className="flex flex-wrap gap-3">

              {hero.technologies.map((tech)=>(
                <Badge key={tech}>
                  {tech}
                </Badge>
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity:0, scale:.9 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:.8 }}
            className="flex justify-center lg:justify-end"
          >

<motion.div
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative"
>

  <div className="absolute -inset-12 rounded-full bg-blue-600/20 blur-[120px]" />

  <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl" />

  <div
    className="
    relative
    rounded-[36px]
    p-[2px]
    bg-gradient-to-br
    from-blue-500/40
    via-white/20
    to-cyan-500/30
    shadow-[0_30px_80px_rgba(37,99,235,.25)]
    "
  >

    <div
      className="
      rounded-[34px]
      bg-[#111217]/90
      backdrop-blur-2xl
      p-5
      "
    >

      <img
        src={PROFILE_IMAGE}
        alt="Asif Iqbal"
        className="w-[480px] rounded-[28px]"
      />

    </div>

  </div>

</motion.div>

          </motion.div>

        </div>

      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
    <ScrollIndicator />
</div>


    </section>
  );
}