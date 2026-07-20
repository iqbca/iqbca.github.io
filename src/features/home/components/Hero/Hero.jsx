import hero from "../../../../data/hero";
import Button from "../../../../components/ui/Button/Button";
import Badge from "../../../../components/ui/Badge/Badge";
import Container from "../../../../components/ui/Container/Container";
import { PROFILE_IMAGE } from "../../../../utils/constants";
import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import AnalyticsOverlay from "../AnimatedBackground/Layers/AnalyticsOverlay";

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

  <AnalyticsOverlay />

</div>

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

         {/* RIGHT */}

<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
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

    <div
      className="
      relative
      w-[500px]
      rounded-[36px]
      border
      border-white/10
      bg-[#111217]/90
      backdrop-blur-2xl
      shadow-[0_30px_80px_rgba(37,99,235,.25)]
      overflow-hidden
      "
    >

      {/* Header */}

      <div className="flex items-center justify-between px-7 py-5 border-b border-white/10">

        <div>

          <p className="text-xs uppercase tracking-[4px] text-blue-400">
            MIZAN Analytics
          </p>

          <h3 className="text-xl font-bold mt-2">
            Portfolio Dashboard
          </h3>

        </div>

        <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

      </div>

      {/* Performance */}

      <div className="px-7 pt-7">

        <div className="flex justify-between text-sm text-zinc-400 mb-3">

          <span>Portfolio Performance</span>

          <span className="text-emerald-400 font-semibold">
            +18.62%
          </span>

        </div>

        <svg
          viewBox="0 0 400 120"
          className="w-full h-36"
        >

          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            points="0,95 40,82 80,88 120,70 160,58 200,66 240,42 280,48 320,26 360,18 400,10"
          />

        </svg>

      </div>

      {/* Bottom */}

      <div className="grid grid-cols-2 gap-6 px-7 py-7">

        <div>

          <p className="text-zinc-500 text-xs uppercase">
            Assets
          </p>

          <h2 className="text-3xl font-bold mt-2">
            ₹100Cr+
          </h2>

        </div>

        <div>

          <p className="text-zinc-500 text-xs uppercase">
            Reporting
          </p>

          <h2 className="text-3xl font-bold mt-2">
            UK Pension
          </h2>

        </div>

      </div>

      {/* Tech */}

      <div className="border-t border-white/10 px-7 py-6 flex flex-wrap gap-2">

        {[
          "Python",
          "SQL",
          "VBA",
          "Power BI",
          "React",
          "PostgreSQL"
        ].map((item) => (

          <span
            key={item}
            className="px-3 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm"
          >
            {item}
          </span>

        ))}

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