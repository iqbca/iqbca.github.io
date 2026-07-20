  import stats from "../../../../data/stats";
  import StatCard from "../../../../components/ui/StatCard/StatCard";
  import Container from "../../../../components/ui/Container/Container";

  export default function HeroStats() {
    return (
      <section className="pb-24">

        <Container>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                number={stat.number}
                label={stat.label}
              />
            ))}

          </div>

        </Container>

      </section>
    );
  }