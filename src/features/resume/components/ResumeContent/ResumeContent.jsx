import Container from "../../../../components/ui/Container/Container";
import resume from "../../data/resume";

export default function ResumeContent() {

  return (

    <section className="pb-28">

      <Container>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <h2 className="text-3xl font-bold mb-8">
              Professional Summary
            </h2>

            <ul className="space-y-4">

              {resume.summary.map(item=>(

                <li key={item} className="text-zinc-300">
                  • {item}
                </li>

              ))}

            </ul>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <h2 className="text-3xl font-bold mb-8">
              Experience
            </h2>

            <ul className="space-y-4">

              {resume.experience.map(item=>(

                <li key={item} className="text-zinc-300">
                  • {item}
                </li>

              ))}

            </ul>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:col-span-2">

            <h2 className="text-3xl font-bold mb-8">
              Technical Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {resume.skills.map(skill=>(

                <div
                  key={skill}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2"
                >
                  {skill}
                </div>

              ))}

            </div>

            <button
              className="mt-10 rounded-xl bg-blue-600 hover:bg-blue-500 px-8 py-4 font-semibold"
            >
              Download Resume
            </button>

          </div>

        </div>

      </Container>

    </section>

  );

}