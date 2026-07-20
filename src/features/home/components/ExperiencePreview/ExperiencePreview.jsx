import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import Button from "../../../../components/ui/Button/Button";

const experience = [
{
company:"Mercer",
role:"Senior Specialist - Investments",
subtitle:"Promoted from Specialist (2025)",
period:"2024 – Present",
description:"UK Institutional Performance Reporting • Investment Analytics • Performance Reporting • Benchmark Analytics • Performance Attribution"
},
{
company:"InCred Wealth",
role:"Assistant Manager",
subtitle:"Portfolio Analytics",
period:"2023",
description:"Portfolio Analytics • Client Portfolio Management• Client Advisory • Investment Research • Portfolio Reporting"
},
{
company:"Anand Rathi Wealth",
role:"Account Manager",
subtitle:"Investment Operations",
period:"2021 – 2023",
description:"Investment Operations • Portfolio Management • Client Servicing • Market Research • Investment Analytics"
},
{
company:"ClovekWealth",
role:"Investment Analyst",
subtitle:"Research & Analytics",
period:"2019 – 2021",
description:"Equity Research • Investment Analytics • Portfolio Reporting"
}
];

export default function ExperiencePreview() {
return (
<section className="py-24">
<Container>

<div className="mb-14">

<p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-4">
Professional Experience
</p>

<h2 className="text-5xl font-black mb-5">
Career Progression
</h2>

<p className="text-zinc-400 max-w-3xl leading-8">
Progressing from investment research and portfolio operations to institutional investment analytics, performance reporting and enterprise reporting automation.
</p>

</div>

<div className="relative">

<div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent opacity-40"/>

<div className="space-y-7">

{experience.map((item,index)=>(

<motion.div
key={item.company}
initial={{opacity:0,x:-25}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:.5,delay:index*.12}}
whileHover={{x:8}}
className="flex gap-6 items-start"
>

<motion.div
animate={{
scale:[1,1.2,1]
}}
transition={{
duration:2,
delay:index*.3,
repeat:Infinity
}}
className="relative mt-4 flex-shrink-0"
>

<div className="h-4 w-4 rounded-full bg-blue-500"/>

<div className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-60"/>

</motion.div>

<div className="flex-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500/20 transition">



<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">

<div>

<h3 className="text-2xl font-bold">
{item.company}
</h3>

<p className="text-blue-400 mt-2 font-medium">
{item.role}
</p>

<p className="text-sm text-zinc-500 mt-1">
{item.subtitle}
</p>

</div>

<div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 whitespace-nowrap">
{item.period}
</div>

</div>

<p className="mt-5 text-zinc-400 leading-7">
{item.description}
</p>

</div>

</motion.div>

))}

</div>

</div>

<div className="mt-12 flex justify-center">

<Button>
Explore Professional Journey
</Button>

</div>

</Container>

</section>

);
}