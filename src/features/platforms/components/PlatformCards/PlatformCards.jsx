import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../../../../components/ui/Container/Container";
import platforms from "../../data/platforms";

export default function PlatformCards() {
  return (
    <section className="relative pb-28">

      <Container>

        <div className="grid lg:grid-cols-3 gap-8">

          {platforms.platforms.map((platform, index) => (

            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                overflow-hidden
              "
            >

              <div
                className={`h-2 bg-gradient-to-r ${platform.color}`}
              />

              <div className="p-8">

                <div className="flex justify-between items-center mb-5">

                  <span className="text-blue-400 text-sm font-semibold">
                    {platform.status}
                  </span>

                  <span className="text-zinc-500 text-sm">
                    {platform.category}
                  </span>

                </div>

                <h2 className="text-3xl font-bold mb-5">
                  {platform.name}
                </h2>

                <p className="text-zinc-400 leading-8 mb-8">
                  {platform.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">

                  {platform.technologies.map((tech) => (

                    <div
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-blue-500/20
                        bg-blue-500/10
                        px-4
                        py-2
                        text-sm
                      "
                    >
                      {tech}
                    </div>

                  ))}

                </div>

                {platform.route !== "#" && (

                  <Link
                    to={platform.route}
                    className="
                      inline-flex
                      items-center
                      text-blue-400
                      hover:text-cyan-300
                      font-semibold
                    "
                  >
                    View Platform →
                  </Link>

                )}

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}