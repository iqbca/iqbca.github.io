import { motion } from "framer-motion";

export default function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-white/10
      bg-gradient-to-b
      from-white/5
      to-white/[0.03]
      backdrop-blur-xl
      p-8
      text-center
      group
      "
    >
      {/* Top Accent */}

      <motion.div
        className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      />

      {/* Glow */}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/5" />

      <motion.h2
        className="relative text-5xl font-black mb-4"
        whileHover={{
          scale: 1.05,
        }}
      >
        {number}
      </motion.h2>

      <p className="relative text-zinc-400 leading-7">
        {label}
      </p>
    </motion.div>
  );
}