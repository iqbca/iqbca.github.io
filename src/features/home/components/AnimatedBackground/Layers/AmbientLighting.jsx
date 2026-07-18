import { motion } from "framer-motion";

export default function AmbientLighting() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"/>

      <motion.div
        animate={{
          x:[0,80,0],
          y:[0,-50,0],
          scale:[1,1.08,1]
        }}
        transition={{
          duration:18,
          repeat:Infinity,
          ease:"easeInOut"
        }}
        className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-blue-500/40 blur-[220px]"
      />

      <motion.div
        animate={{
          x:[0,-70,0],
          y:[0,60,0]
        }}
        transition={{
          duration:24,
          repeat:Infinity,
          ease:"easeInOut"
        }}
        className="absolute -left-52 bottom-0 h-[850px] w-[850px] rounded-full bg-cyan-400/25 blur-[260px]"
      />
    </>
  );
}