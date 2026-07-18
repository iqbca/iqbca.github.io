import { motion } from "framer-motion";

import Container from "../../../../components/ui/Container/Container";

import projects from "../../data/projects";

export default function ProjectGrid() {
  return (
    <section className="pb-28">

      <Container>

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.items.map((project,index)=>(

            <motion.div

              key={project.title}

              initial={{opacity:0,y:40}}

              whileInView={{opacity:1,y:0}}

              transition={{delay:index*.1}}

              viewport={{once:true}}

              whileHover={{y:-8}}

              className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              "

            >

              <div className="text-blue-400 text-sm mb-3">
                {project.category}
              </div>

              <h2 className="text-3xl font-bold mb-5">
                {project.title}
              </h2>

              <p className="text-zinc-400 leading-8 mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">

                {project.technologies.map((tech)=>(

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

              <button
                className="
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                px-6
                py-3
                font-semibold
                "
              >
                View Project
              </button>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}