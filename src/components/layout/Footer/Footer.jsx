import Container from "../../ui/Container/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">

      <Container>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

          <div>

            <h2 className="text-2xl font-bold">
              ASIF IQBAL
            </h2>

            <p className="text-zinc-500 mt-2">
              Investment Analytics • Analytics Engineering
            </p>

          </div>

          <div className="flex gap-8 text-zinc-400">

            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Resume</a>

          </div>

        </div>

      </Container>

    </footer>
  );
}