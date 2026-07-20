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
            className="
relative
rounded-[36px]
overflow-hidden
border
border-white/10
bg-gradient-to-br
from-white/[0.06]
to-white/[0.03]
backdrop-blur-2xl
shadow-[0_30px_90px_rgba(37,99,235,.18)]
"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

<motion.div

className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]"

animate={{

scale:[1,1.15,1],

opacity:[.2,.45,.2]

}}

transition={{

duration:8,

repeat:Infinity

}}

/>

<motion.div

className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"

animate={{

scale:[1.1,1,1.1],

opacity:[.15,.35,.15]

}}

transition={{

duration:10,

repeat:Infinity

}}

/>

</div>

            <div className="grid lg:grid-cols-[1.28fr_0.72fr]">

              {/* Dashboard */}
              {/* Dashboard */}

<div className="bg-gradient-to-br from-slate-950 via-[#0f172a] to-slate-900 p-6">

  <div className="rounded-3xl border border-white/10 bg-[#0b1018] p-6 shadow-[0_25px_70px_rgba(37,99,235,.15)]">

    {/* Header */}

    <div className="flex justify-between items-start mb-7">

      <div>

        <div className="flex items-center gap-3 mb-2">

          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"/>

          <span className="text-xs uppercase tracking-[4px] text-blue-400">
            Prototype
          </span>

        </div>

        <h3 className="text-2xl font-bold">
          MIZAN Analytics
        </h3>

        <p className="text-zinc-500 text-sm mt-2">
          Institutional Investment Analytics Platform
        </p>

      </div>

      <div className="text-right">

        <p className="text-xs uppercase tracking-[3px] text-zinc-500">
          Reference Index
        </p>

        <p className="mt-2 font-semibold">
          MSCI World
        </p>

      </div>

    </div>

    {/* PERFORMANCE */}

    <div className="mb-6">

      <div className="flex justify-between items-end mb-5">

        <div>

          <p className="text-zinc-500 text-xs uppercase tracking-[3px]">
            YTD Performance
          </p>

          <motion.h2
            animate={{
              opacity:[.85,1,.85]
            }}
            transition={{
              duration:2,
              repeat:Infinity
            }}
            className="text-3xl font-black text-emerald-400 mt-2"
          >
            +12.84%
          </motion.h2>

        </div>

        <div className="text-right">

          <p className="text-zinc-500 text-xs uppercase tracking-[3px]">
            Status
          </p>

          <p className="text-emerald-400 font-semibold mt-2">
            Operational
          </p>

        </div>

      </div>

     

    </div>

    {/* KPI GRID */}

    <div className="grid grid-cols-2 gap-2">

      <motion.div whileHover={{ scale:0.95, y:-2}} transition={{ duration:.25 }} className="rounded-2xl bg-white/5 border border-white/10 p-2">

        <p className="text-[11px] uppercase tracking-[3px] text-zinc-500">
          Tracking Error
        </p>

        <h3 className="text-1xl font-bold mt-3">
          1.72%
        </h3>

</motion.div>
      <motion.div

whileHover={{

scale:0.95,

y:-4

}}

transition={{

duration:.25

}}

className="rounded-2xl bg-white/5 border border-white/10 p-4"
>

        <p className="text-[11px] uppercase tracking-[3px] text-zinc-500">
          Information Ratio
        </p>

        <h3 className="text-1xl font-bold mt-3">
          0.84
        </h3>

      </motion.div>

      <motion.div

whileHover={{

scale:0.95,

y:-4

}}

transition={{

duration:.25

}}

className="rounded-2xl bg-white/5 border border-white/10 p-4"
>

        <p className="text-[11px] uppercase tracking-[3px] text-zinc-500">
          Sharpe Ratio
        </p>

        <h3 className="text-1xl font-bold mt-3">
          1.31
        </h3>

     </motion.div>

      <motion.div

whileHover={{

scale:0.95,

y:-4

}}

transition={{

duration:.25

}}

className="rounded-2xl bg-white/5 border border-white/10 p-4"
>

        <p className="text-[11px] uppercase tracking-[3px] text-zinc-500">
          Alpha
        </p>

        <h3 className="text-1xl font-bold mt-3 text-blue-400">
          +2.18%
        </h3>

      </motion.div>

    </div>

    {/* ALLOCATION */}

    <div className="mt-7">

      <p className="text-[11px] uppercase tracking-[3px] text-zinc-500 mb-4">
        Asset Allocation
      </p>

      <div className="flex justify-between items-center">

        <AllocationChart/>

        <div className="space-y-3 text-sm">

          <div className="flex items-center gap-3">
            <div className="h-2 w-3 rounded-full bg-blue-500"/>
            Equity
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2 w-3 rounded-full bg-cyan-500"/>
            Fixed Income
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2 w-3 rounded-full bg-emerald-500"/>
            Alternatives
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2 w-3 rounded-full bg-slate-500"/>
            Cash
          </div>

        </div>

      </div>

    </div>
 <PerformanceChart/>
  </div>

</div>

{/* Content */}

<div className="p-7 flex flex-col justify-center">

  <Badge>
    Flagship Platform
  </Badge>

  <h2 className="text-5xl font-black mt-4">
    MIZAN Analytics
  </h2>

  <p className="text-blue-400 uppercase tracking-[5px] mt-3 mb-5">

    Institutional Investment Analytics &
    Reporting Platform

  </p>

  <p className="text-zinc-400 leading-6">

    MIZAN is a modular investment analytics platform inspired by institutional reporting workflows used by global consulting and asset management firms.

    <br/><br/>

    It automates portfolio performance reporting, benchmark comparison, risk analytics, attribution-ready calculations, workflow automation and executive dashboards through a scalable architecture built using Python, SQL, PostgreSQL, React and Power BI.

  </p>

 
  {/* TECHNOLOGY */}

  <div className="flex flex-wrap gap-3 mt-10">

    {[
      "Python",
      "SQL",
      "PostgreSQL",
      "Power BI",
      "React",
      "VBA",
      "Excel"
    ].map((tech)=>(

      <Badge key={tech}>
        {tech}
      </Badge>

    ))}

  </div>

  {/* ARCHITECTURE */}

  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 mt-10 p-5">

    <p className="text-xs uppercase tracking-[3px] text-blue-400">

      Architecture

    </p>

    <p className="text-zinc-300 mt-3 leading-7">

      Enterprise-grade modular architecture
      designed for institutional investment
      reporting, analytics, automation and
      scalable dashboard development.

    </p>

  </div>

  {/* BUTTONS */}

  <div className="flex gap-4 mt-6 flex-wrap">

    <Button>

      Explore

    </Button>

    <Button variant="secondary">

      github

    </Button>

  </div>
        </div>

            </div>

          </motion.div>

        </Container>

      </section>
    );
  }