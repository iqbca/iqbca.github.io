import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MetricCard({
  title,
  value,
  suffix = "",
  color = "text-blue-400",
  pulse = false,
}) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const interval = setInterval(() => {
      const variance = (Math.random() - 0.5) * 0.8;

      if (typeof value === "number") {
        setDisplay((value + variance).toFixed(2));
      }
    }, 2200);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      className="
      relative
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-5
      overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5" />

      <div className="relative">

        <div className="flex items-center justify-between">

          <p className="text-xs uppercase tracking-[3px] text-zinc-500">
            {title}
          </p>

          {pulse && (
            <motion.div
              className="h-2.5 w-2.5 rounded-full bg-emerald-400"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          )}

        </div>

        <motion.h3
          key={display}
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .35,
          }}
          className={`text-3xl font-black mt-4 ${color}`}
        >
          {display}
          {suffix}
        </motion.h3>

      </div>
    </motion.div>
  );
}