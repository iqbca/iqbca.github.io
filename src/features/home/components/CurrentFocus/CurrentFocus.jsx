import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import Button from "../../../../components/ui/Button/Button";

const focusItems=[
"Building MIZAN Analytics — Institutional Investment Analytics Platform",
"Developing an AI-powered Trading Signal System",
"Expanding expertise in React & Enterprise Frontend Development",
"Open to opportunities in Institutional Finance or FinTech in UAE & Europe"
];

export default function CurrentFocus(){
return(
<section className="py-24">
<Container>

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.6}}
whileHover={{y:-6}}
className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-blue-950/30 via-slate-900 to-[#0f172a] p-12 backdrop-blur-xl shadow-[0_30px_80px_rgba(37,99,235,.18)]"
>

<div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]"/>

<p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-4">
Current Focus
</p>

<h2 className="text-5xl font-black mb-6">
Building the Future of Investment Analytics
</h2>

<p className="max-w-8xl text-zinc-400 leading-8 mb-10">
My current focus is building enterprise-grade analytics platforms, automating institutional reporting workflows and developing scalable financial technology solutions that combine investment analytics with modern software engineering.
</p>

<div className="grid md:grid-cols-2 gap-5 mb-12">

{focusItems.map((item,index)=>(

<motion.div
key={item}
initial={{opacity:0,x:-20}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{delay:index*.08}}
className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
>

<div className="mt-1 h-3 w-3 rounded-full bg-blue-500"/>

<p className="text-zinc-300 leading-7">
{item}
</p>

</motion.div>

))}

</div>

<div className="flex flex-wrap gap-4">

<Button>
Explore MIZAN
</Button>

<Button variant="secondary">
View GitHub
</Button>

</div>

</motion.div>

</Container>
</section>
);
}