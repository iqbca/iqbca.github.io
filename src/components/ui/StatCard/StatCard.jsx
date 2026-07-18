import { motion } from "framer-motion";

export default function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
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
      p-10
      text-center
      "
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400" />

      <h2 className="text-6xl font-black mb-4">
        {number}
      </h2>

      <p className="text-zinc-400">
        {label}
      </p>
    </motion.div>
  );
}