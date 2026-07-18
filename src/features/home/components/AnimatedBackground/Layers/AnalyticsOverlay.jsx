import { motion } from "framer-motion";

export default function AnalyticsOverlay(){

const points=[
[200,180],
[420,250],
[610,150],
[830,220],
[1080,130],
[1320,260]
];

return(

<svg
className="absolute inset-0 w-full h-full opacity-30"
>

<polyline

fill="none"

stroke="#60a5fa"

strokeWidth="2"

points={points.map(p=>p.join(",")).join(" ")}

/>

{points.map(([x,y],i)=>

<motion.circle

key={i}

cx={x}

cy={y}

r="5"

fill="#22d3ee"

animate={{

r:[4,8,4],

opacity:[.4,1,.4]

}}

transition={{

duration:2+i,

repeat:Infinity

}}

/>

)}

</svg>

);

}