import { motion } from "framer-motion";

export default function AnalyticsOverlay() {
  const points = [
    [200, 180],
    [420, 250],
    [610, 150],
    [830, 220],
    [1080, 130],
    [1320, 260],
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-30"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Animated Performance Line */}

      <polyline
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        points={points.map((p) => p.join(",")).join(" ")}
      />

      {points.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="5"
          fill="#22d3ee"
          animate={{
            r: [4, 8, 4],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2 + i,
            repeat: Infinity,
          }}
        />
      ))}

    {/* Analytics Rings */}

{/* OUTER RING */}

<motion.g
  style={{ transformOrigin: "1380px 230px" }}
  animate={{ rotate: 360 }}
  transition={{
    duration: 35,
    repeat: Infinity,
    ease: "linear",
  }}
>
  <circle
    cx="1380"
    cy="230"
    r="240"
    fill="none"
    stroke="#3b82f6"
    strokeWidth="5"
    strokeDasharray="40 15 25 12 55 20 30 10 45 15 20 10"
    strokeLinecap="round"
    opacity="0.45"
  />
</motion.g>

{/* MIDDLE RING */}

<motion.g
  style={{ transformOrigin: "1380px 230px" }}
  animate={{ rotate: -360 }}
  transition={{
    duration: 40,
    repeat: Infinity,
    ease: "linear",
  }}
>
  <circle
    cx="1380"
    cy="230"
    r="215"
    fill="none"
    stroke="#38bdf8"
    strokeWidth="3"
    strokeDasharray="25 10 18 8 35 12 22 8 28 10 40 15"
    strokeDashoffset="-220"
    strokeLinecap="round"
    opacity="0.35"
  />
</motion.g>

{/* INNER RING */}

<motion.g
  style={{ transformOrigin: "1380px 230px" }}
  animate={{ rotate: 360 }}
  transition={{
    duration: 50,
    repeat: Infinity,
    ease: "linear",
  }}
>
  <circle
    cx="1380"
    cy="230"
    r="190"
    fill="none"
    stroke="#64748b"
    strokeWidth="2"
   strokeDasharray="15 8 22 8 18 6 28 10 20 8 15 6"
    strokeDashoffset="-420"
    strokeLinecap="round"
    opacity="0.5  5"
  />
</motion.g>   </svg>
  );
}