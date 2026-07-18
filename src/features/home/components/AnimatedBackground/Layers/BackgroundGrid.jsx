import { motion } from "framer-motion";

export default function BackgroundGrid() {
  return (
    <motion.svg
      animate={{
        x: [0, -40, 0],
        y: [0, -40, 0],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      viewBox="0 0 12000 12000"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full opacity-20"
    >
      {/* Vertical Lines */}
      {Array.from({ length: 200 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 60}
          y1="0"
          x2={i * 60}
          y2="12000"
          stroke="#3b82f6"
          strokeWidth="0.5"
        />
      ))}

      {/* Horizontal Lines */}
      {Array.from({ length: 200 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 60}
          x2="12000"
          y2={i * 60}
          stroke="#3b82f6"
          strokeWidth="0.5"
        />
      ))}
    </motion.svg>
  );
}