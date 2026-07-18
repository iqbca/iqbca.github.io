  import { motion } from "framer-motion";
  import Container from "../../../../components/ui/Container/Container";
  import Button from "../../../../components/ui/Button/Button";
  import Badge from "../../../../components/ui/Badge/Badge";
  import AllocationChart from "../MizanDashboard/AllocationChart";
  import PerformanceChart from "../../../../components/charts/PerformanceChart";

  export default function FeaturedPlatform() {
    return (
      <section className="py-32">

        <Container>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
          >

            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

              {/* Dashboard */}

              <div className="bg-gradient-to-br from-slate-950 via-[#111827] to-slate-900 p-8">

  <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-6">

    <div className="flex justify-between items-center mb-6">

      <div>
        <div className="flex justify-between items-center mb-8">

    <h3 className="font-semibold tracking-wide">
        MIZAN Analytics
    </h3>

    <div className="text-xs text-emerald-400">
        ● LIVE
    </div>

</div>

        <p className="text-zinc-500 text-sm">Portfolio Return</p>

        <h2 className="text-4xl font-black text-emerald-400">
          +12.84%
        </h2>

      </div>

      <div className="text-right">

        <p className="text-zinc-500 text-sm">Benchmark</p>

        <p className="text-white font-semibold">
          MSCI World
        </p>

      </div>

    </div>

    <div className="grid grid-cols-2 gap-3 mb-5">

      <div className="rounded-xl bg-white/5 p-3">
        <p className="text-zinc-500 text-xs">Tracking Error</p>
        <p className="text-2xl font-bold mt-2">1.72%</p>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <p className="text-zinc-500 text-xs">Information Ratio</p>
        <p className="text-2xl font-bold mt-2">0.84</p>
      </div>

    </div>

    <div className="mb-6">

      <p className="text-zinc-500 text-xs mb-3">
        Asset Allocation
      </p>

      <div className="flex items-center justify-between mb-6">

    <AllocationChart/>

    <div className="space-y-3 text-sm">

        <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-500"/>
            Equity
        </div>

        <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-500"/>
            Fixed Income
        </div>

        <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500"/>
            Alternatives
        </div>

        <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-slate-500"/>
            Cash
        </div>

    </div>

</div>
    </div>

    <p className="text-zinc-500 text-xs mb-3">
      Performance
    </p>
    <PerformanceChart />
    </div>
</div> 

              {/* Content */}

              <div className="p-12">

                <Badge>
                  Active Development
                </Badge>

                <h2 className="text-5xl font-black mt-6 mb-4">
                  MIZAN
                </h2>

                <p className="text-blue-400 uppercase tracking-[4px] mb-6">
                  Institutional Portfolio Analytics Platform
                </p>

                <p className="text-zinc-400 leading-8 mb-10">
                  Enterprise-grade investment analytics platform
                  for portfolio performance reporting,
                  benchmark analysis, risk analytics and
                  reporting automation built using Python,
                  PostgreSQL, Power BI and React.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">

                  <Badge>Python</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>SQL</Badge>
                  <Badge>Power BI</Badge>
                  <Badge>React</Badge>

                </div>

                <div className="flex gap-4 flex-wrap">

                  <Button>
                    View Platform
                  </Button>

                  <Button variant="secondary">
                    GitHub
                  </Button>

                </div>

              </div>

            </div>

          </motion.div>

        </Container>

      </section>
    );
  }