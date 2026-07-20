import { motion } from "framer-motion";
import { LineChart, Database, BarChart3, Cpu } from "lucide-react";
import Container from "../../../../components/ui/Container/Container";

const capabilities=[
{
title:"Investment Analytics",
icon:LineChart,
items:[
"Portfolio Performance",
"Benchmark Analysis",
"Performance Attribution",
"Risk Analytics"
]
},
{
title:"Analytics Engineering",
icon:Database,
items:[
"Python Development",
"SQL & PostgreSQL",
"Workflow Automation",
"Data Pipelines"
]
},
{
title:"Business Intelligence",
icon:BarChart3,
items:[
"Power BI Dashboards",
"Executive Reporting",
"KPI Visualization",
"ETL Processes"
]
},
{
title:"Automation",
icon:Cpu,
items:[
"Excel & VBA",
"Power Query",
"Reporting Automation",
"Process Optimization"
]
}
];

export default function Capabilities(){
return(
<section className="py-24">
<Container>

<div className="mb-14">

<p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-4">
Capabilities
</p>

<h2 className="text-5xl font-black mb-5">
Core Expertise
</h2>

<p className="text-zinc-400 max-w-8xl leading-8">
A combination of institutional investment analytics, enterprise automation and modern software engineering used to build scalable reporting and analytics solutions.
</p>

</div>

<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">

{capabilities.map((section,index)=>(

<motion.div
key={section.title}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.5,delay:index*.08}}
whileHover={{
y:-10,
scale:1.02
}}
className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] backdrop-blur-xl p-7"
>

<div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"/>

<div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
<section.icon size={28} strokeWidth={2}/>
</div>

<h3 className="text-2xl font-bold mb-6">
{section.title}
</h3>

<div className="space-y-4">

{section.items.map(item=>(

<div
key={item}
className="flex items-center gap-3 text-zinc-300 group-hover:text-white transition"
>

<div className="h-2 w-2 rounded-full bg-blue-500"/>

<span>{item}</span>

</div>

))}

</div>

</motion.div>

))}

</div>

</Container>
</section>
);
}