import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import contact from "../../data/contact";

export default function ContactInfo() {
  return (
    <section className="pb-28">

      <Container>

        <div className="grid md:grid-cols-2 gap-8">

          {contact.details.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
              "
            >

              <div className="text-blue-400 text-sm uppercase tracking-[3px] mb-3">
                {item.title}
              </div>

              <div className="text-2xl font-semibold break-all">
                {item.value}
              </div>

            </motion.div>

          ))}

        </div>

        <div className="mt-16 rounded-[32px] border border-blue-500/15 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-12 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Open to Opportunities
          </h2>

          <p className="max-w-3xl mx-auto text-zinc-300 text-lg leading-8">
            I'm interested in opportunities across Investment Analytics,
            Performance Reporting, Financial Technology, Data Analytics and
            Enterprise Automation.
          </p>

        </div>

      </Container>

    </section>
  );
}