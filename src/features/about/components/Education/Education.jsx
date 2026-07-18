import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";

const education = [
  {
    title: "Master of Business Administration",
    institute: "University of Delhi (School of Open Learning)",
    year: "2024",
    details:
      "Finance • Investment Management • Financial Markets • Strategy • Artificial Intelligence",
  },
  {
    title: "Bachelor of Science(Physics Hons.)",
    institute: "VKS University, Ara",
    year: "2016",
    details:
      "Advanced Mathematical Physics • Mathematics • Statistics • Computational Physics Programming",
  },
];

const certifications = [
  "Python",
  "SQL",
  "Power BI",
  "PostgreSQL",
  "VBA",
  "Power Query",
  "Git",
];

export default function Education() {
  return (
    <section className="relative py-28">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-5">
            EDUCATION
          </p>

          <h2 className="text-4xl font-bold mb-16">
            Academic Foundation
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

          <div className="space-y-8">

            {education.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                "
              >

                <div className="flex justify-between items-start mb-4">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-blue-400 mt-2">
                      {item.institute}
                    </p>

                  </div>

                  <span className="text-zinc-400">
                    {item.year}
                  </span>

                </div>

                <p className="text-zinc-400 leading-8">
                  {item.details}
                </p>

              </motion.div>

            ))}

          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              h-fit
            "
          >

            <h3 className="text-2xl font-bold mb-8">
              Technologies Studied
            </h3>

            <div className="flex flex-wrap gap-3">

              {certifications.map((item) => (

                <div
                  key={item}
                  className="
                    rounded-full
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    px-5
                    py-2
                  "
                >
                  {item}
                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}