import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function ProfessionalSnapshot() {
const [aum,setAum]=useState(128.46);
const [alpha,setAlpha]=useState(2.84);
const [sharpe,setSharpe]=useState(1.78);
const [tracking,setTracking]=useState(3.11);
useEffect(()=>{
const interval=setInterval(()=>{
setAum(v=>+(v+(Math.random()-.5)*1.2).toFixed(2));
setAlpha(v=>+(v+(Math.random()-.5)*0.08).toFixed(2));
setSharpe(v=>+(v+(Math.random()-.5)*0.04).toFixed(2));
setTracking(v=>+(v+(Math.random()-.5)*0.06).toFixed(2));
},2200);
return()=>clearInterval(interval);
},[]);
return(
<motion.div
initial={{opacity:0,x:60}}
animate={{opacity:1,x:0}}
transition={{duration:.8}}
className="relative"
>
<motion.div
animate={{
y:[0,-10,0]
}}
transition={
{
duration:6,
repeat:Infinity,
ease:"easeInOut"
}
}
className="relative w-[520px] rounded-[36px] overflow-hidden"
>
<div
className="absolute inset-0 rounded-[36px] bg-blue-500/20 blur-[120px]"
/>
<div
className="relative rounded-[36px] border border-white/10 bg-[#0f1118]/90 backdrop-blur-3xl shadow-[0_40px_100px_rgba(37,99,235,.25)] overflow-hidden"
>
<div className="px-8 pt-8 pb-6 border-b border-white/10">
<div className="flex justify-between items-center">
<div>
<p className="uppercase tracking-[5px] text-xs text-blue-400">
Investment Analytics
</p>
<h2 className="text-3xl font-black mt-2">
Professional Workspace
</h2>
</div>
<motion.div
animate={{
scale:[1,1.4,1],
opacity:[.4,1,.4]
}}
transition={{
duration:2,
repeat:Infinity
}}
className="h-3 w-3 rounded-full bg-emerald-400"
/>
</div>
</div>
{/* PERFORMANCE */}
<div className="px-8 py-7">
<div className="flex items-center justify-between mb-5">
<div>
<p className="text-sm text-zinc-400">
Performance
</p>
<h3 className="text-2xl font-bold mt-1">
+18.74%
</h3>
</div>
<div className="text-right">
<p className="text-xs uppercase tracking-[3px] text-zinc-500">
Last Update
</p>
<p className="text-emerald-400 font-semibold mt-2">
Live
</p>
</div>
</div>
<svg
viewBox="0 0 420 180"
className="w-full h-52 overflow-visible"
>
<defs>
<linearGradient
id="performanceFill"
x1="0%"
y1="0%"
x2="0%"
y2="100%"
>
<stop
offset="0%"
stopColor="#3b82f6"
stopOpacity=".35"
/>
<stop
offset="100%"
stopColor="#3b82f6"
stopOpacity="0"
/>
</linearGradient>
</defs>
<polyline
fill="url(#performanceFill)"
points="0,165
35,150
70,154
105,132
140,120
175,126
210,96
245,102
280,76
315,82
350,50
385,36
420,24
420,180
0,180"
/>
<polyline
fill="none"
stroke="#3b82f6"
strokeWidth="3"
strokeLinecap="round"
strokeLinejoin="round"
points="0,165
35,150
70,154
105,132
140,120
175,126
210,96
245,102
280,76
315,82
350,50
385,36
420,24"
/>
{[
[0,165],
[35,150],
[70,154],
[105,132],
[140,120],
[175,126],
[210,96],
[245,102],
[280,76],
[315,82],
[350,50],
[385,36],
[420,24]
].map(([x,y],i)=>(
<motion.circle
key={i}
cx={x}
cy={y}
r="4"
fill="#60a5fa"
animate={{
r:[4,6,4],
opacity:[.5,1,.5]
}}
transition={{
duration:2,
delay:i*.08,
repeat:Infinity
}}
/>
))}
<motion.circle
r="7"
fill="#22d3ee"
animate={{
cx:[
0,
35,
70,
105,
140,
175,
210,
245,
280,
315,
350,
385,
420
],
cy:[
165,
150,
154,
132,
120,
126,
96,
102,
76,
82,
50,
36,
24
]
}}
transition={{
duration:8,
repeat:Infinity,
ease:"linear"
}}
/>
</svg>
</div>
{/* ALLOCATION + KPIs */}
<div className="grid grid-cols-[180px_1fr] gap-8 px-8 pb-8">
{/* DONUT */}
<div className="flex items-center justify-center">
<motion.div
animate={{rotate:360}}
transition={{
duration:35,
repeat:Infinity,
ease:"linear"
}}
className="relative h-40 w-40"
>
<div
className="absolute inset-0 rounded-full"
style={{
background:
"conic-gradient(#3b82f6 0deg 150deg,#06b6d4 150deg 250deg,#10b981 250deg 310deg,#8b5cf6 310deg 360deg)"
}}
/>
<div className="absolute inset-[22px] rounded-full bg-[#0f1118]" />
<div className="absolute inset-0 flex flex-col items-center justify-center">
<p className="text-xs uppercase tracking-[3px] text-zinc-500">
Allocation
</p>
<motion.h3
key={aum}
initial={{opacity:0,y:6}}
animate={{opacity:1,y:0}}
transition={{duration:.3}}
className="text-xl font-black mt-2"
>
{aum}
</motion.h3>
<p className="text-xs text-zinc-400">
AUM
</p>
</div>
</motion.div>
</div>
{/* KPIs */}
<div className="grid grid-cols-2 gap-4">
<motion.div
whileHover={{scale:1.03}}
className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
>
<p className="text-xs uppercase tracking-[3px] text-zinc-500">
Alpha
</p>
<motion.h3
key={alpha}
initial={{opacity:0,y:6}}
animate={{opacity:1,y:0}}
className="text-3xl font-black text-blue-400 mt-4"
>
{alpha}
</motion.h3>
</motion.div>
<motion.div
whileHover={{scale:1.03}}
className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
>
<p className="text-xs uppercase tracking-[3px] text-zinc-500">
Sharpe
</p>
<motion.h3
key={sharpe}
initial={{opacity:0,y:6}}
animate={{opacity:1,y:0}}
className="text-3xl font-black text-cyan-400 mt-4"
>
{sharpe}
</motion.h3>
</motion.div>
<motion.div
whileHover={{scale:1.03}}
className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
>
<p className="text-xs uppercase tracking-[3px] text-zinc-500">
Tracking Error
</p>
<motion.h3
key={tracking}
initial={{opacity:0,y:6}}
animate={{opacity:1,y:0}}
className="text-3xl font-black text-emerald-400 mt-4"
>
{tracking}
</motion.h3>
</motion.div>
<motion.div
whileHover={{scale:1.03}}
className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
>
<p className="text-xs uppercase tracking-[3px] text-zinc-500">
Status
</p>
<div className="flex items-center gap-3 mt-5">
<motion.div
className="h-3 w-3 rounded-full bg-emerald-400"
animate={{
opacity:[.4,1,.4],
scale:[1,1.5,1]
}}
transition={{
duration:2,
repeat:Infinity
}}
/>
<p className="font-semibold">
Operational
</p>
</div>
</motion.div>
</div>
</div>
{/* TECHNOLOGIES */}
<div className="px-8 pb-7">
<p className="text-xs uppercase tracking-[4px] text-zinc-500 mb-5">
Technology Stack
</p>
<div className="flex flex-wrap gap-3">
{[
"Python",
"SQL",
"VBA",
"Power BI",
"React",
"PostgreSQL"
].map((tech,index)=>(
<motion.div
key={tech}
animate={{
y:[0,-4,0]
}}
transition={{
duration:3,
delay:index*.25,
repeat:Infinity,
ease:"easeInOut"
}}
className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm"
>
{tech}
</motion.div>
))}
</div>
</div>
{/* LIVE ACTIVITY */}
<div className="px-8 pb-8">
<p className="text-xs uppercase tracking-[4px] text-zinc-500 mb-5">
Live Activity
</p>
<div className="space-y-4">
{[
"Performance Calculated",
"Benchmark Updated",
"Risk Metrics Refreshed",
"Portfolio Synced"
].map((item,index)=>(
<motion.div
key={item}
initial={{
opacity:0,
x:-15
}}
animate={{
opacity:1,
x:0
}}
transition={{
delay:index*.15
}}
className="flex items-center justify-between"
>
<div className="flex items-center gap-3">
<motion.div
className="h-2.5 w-2.5 rounded-full bg-emerald-400"
animate={{
opacity:[.3,1,.3],
scale:[1,1.6,1]
}}
transition={{
duration:2,
delay:index*.4,
repeat:Infinity
}}
/>
<p className="text-sm text-zinc-300">
{item}
</p>
</div>
<span className="text-xs text-zinc-500">
Just now
</span>
</motion.div>
))}
</div>
</div>
{/* FOOTER */}
<div className="relative border-t border-white/10 overflow-hidden">
<motion.div
className="absolute inset-0"
animate={{
x:["-120%","120%"]
}}
transition={{
duration:8,
repeat:Infinity,
ease:"linear"
}}
style={{
background:
"linear-gradient(90deg,transparent,rgba(59,130,246,.08),transparent)"
}}
/>
<div className="relative px-8 py-6 flex justify-between items-center">
<div>
<p className="text-xs uppercase tracking-[3px] text-zinc-500">
Current Focus
</p>
<h3 className="font-bold text-lg mt-2">
Institutional Investment Analytics
</h3>
</div>
<div className="text-right">
<p className="text-xs uppercase tracking-[3px] text-zinc-500">
Environment
</p>
<p className="text-emerald-400 font-semibold mt-2">
Live Workspace
</p>
</div>
</div>
</div>
{/* AMBIENT LIGHT */}
<motion.div
className="absolute -right-28 -bottom-28 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]"
animate={{
scale:[1,1.15,1],
opacity:[.25,.45,.25]
}}
transition={{
duration:6,
repeat:Infinity,
ease:"easeInOut"
}}
/>
<motion.div
className="absolute -left-20 top-32 h-52 w-52 rounded-full bg-cyan-400/10 blur-[100px]"
animate={{
scale:[1.1,1,1.1],
opacity:[.15,.35,.15]
}}
transition={{
duration:7,
repeat:Infinity,
ease:"easeInOut"
}}
/>
</div>
</motion.div>
{/* MICRO METRICS */}
<div className="px-8 pb-8">
  <div className="grid grid-cols-3 gap-4">
    {[
      {
        label: "Return",
        value: "+18.74%"
      },
      {
        label: "Volatility",
        value: "8.42%"
      },
      {
        label: "Active",
        value: "+2.11%"
      }
    ].map((item,index)=>(
      <motion.div
        key={item.label}
        whileHover={{scale:1.04}}
        className="rounded-xl bg-white/5 border border-white/10 p-4"
      >
        <p className="text-[10px] uppercase tracking-[3px] text-zinc-500">
          {item.label}
        </p>
        <motion.h4
          animate={{
            opacity:[.7,1,.7]
          }}
          transition={{
            duration:2,
            delay:index*.4,
            repeat:Infinity
          }}
          className="text-xl font-bold mt-3"
        >
          {item.value}
        </motion.h4>
      </motion.div>
    ))}
  </div>
</div>
{/* WORKSPACE STATUS */}
<div className="px-8 pb-8">
  <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 p-5">
    <div className="flex justify-between items-center">
      <div>
        <p className="text-xs uppercase tracking-[3px] text-zinc-500">
          Workspace Status
        </p>
        <h3 className="text-xl font-bold mt-2">
          Analytics Engine Operational
        </h3>
      </div>
      <motion.div
        animate={{
          rotate:360
        }}
        transition={{
          duration:12,
          repeat:Infinity,
          ease:"linear"
        }}
        className="relative h-12 w-12"
      >
        <div className="absolute inset-0 rounded-full border-[3px] border-blue-500 border-t-transparent"/>
      </motion.div>
    </div>
  </div>
</div>
{/* REFLECTION */}
<motion.div
className="absolute inset-0 pointer-events-none"
animate={{
opacity:[0,.08,0]
}}
transition={{
duration:5,
repeat:Infinity
}}
>
<div
className="absolute -left-40 top-0 h-full w-40 rotate-[25deg] bg-white"
/>
</motion.div>
{/* BOTTOM STATUS BAR */}
<div className="border-t border-white/10">
  <div className="px-8 py-5 flex justify-between items-center">
    <div className="flex gap-6 text-xs text-zinc-500">
      <div className="flex items-center gap-2">
        <motion.div
          className="h-2 w-2 rounded-full bg-emerald-400"
          animate={{
            opacity:[.4,1,.4]
          }}
          transition={{
            duration:2,
            repeat:Infinity
          }}
        />
        Live Data
      </div>
      <div className="flex items-center gap-2">
        <motion.div
          className="h-2 w-2 rounded-full bg-blue-400"
          animate={{
            opacity:[.4,1,.4]
          }}
          transition={{
            duration:2,
            delay:.5,
            repeat:Infinity
          }}
        />
        Automation Ready
      </div>
    </div>
    <motion.div
      animate={{
        opacity:[.5,1,.5]
      }}
      transition={{
        duration:3,
        repeat:Infinity
      }}
      className="text-xs text-zinc-500"
    >
      Investment Analytics • Automation • Financial Technology
    </motion.div>
  </div>
</div>
</div>
</motion.div>
</motion.div>
);
}
