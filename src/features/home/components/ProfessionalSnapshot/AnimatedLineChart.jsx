import { motion } from "framer-motion";

const points = [
  [0, 140],
  [40, 128],
  [80, 135],
  [120, 102],
  [160, 110],
  [200, 82],
  [240, 88],
  [280, 58],
  [320, 64],
  [360, 36],
  [400, 20],
];

export default function AnimatedLineChart() {
  return (
    <div className="relative">

      <svg
        viewBox="0 0 400 160"
        className="w-full h-44"
      >

        <defs>

          <linearGradient
            id="performanceGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >

            <stop
              offset="0%"
              stopColor="#3b82f6"
              stopOpacity=".45"
            />

            <stop
              offset="100%"
              stopColor="#3b82f6"
              stopOpacity="0"
            />

          </linearGradient>

        </defs>

        <polyline
          fill="url(#performanceGradient)"
          points={[
            ...points,
            [400, 160],
            [0, 160],
          ]
            .map((p) => p.join(","))
            .join(" ")}
        />

        <polyline
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          points={points.map((p) => p.join(",")).join(" ")}
        />

        {points.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill="#60a5fa"
            animate={{
              r: [4, 6, 4],
              opacity: [.5, 1, .5],
            }}
            transition={{
              duration: 2,
              delay: i * .12,
              repeat: Infinity,
            }}
          />
        ))}

        <motion.circle
          r="7"
          fill="#22d3ee"
          animate={{
            cx: points.map((p) => p[0]),
            cy: points.map((p) => p[1]),
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
          }}
        />

      </svg>

    </div>
  );
}