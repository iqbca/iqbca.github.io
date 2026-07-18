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

      {/* Rotating Donut Chart */}

      <motion.g
        style={{
          transformOrigin: "1260px 620px",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Outer Ring */}

        <circle
          cx="1260"
          cy="620"
          r="95"
          fill="none"
          stroke="#1e293b"
          strokeWidth="22"
          opacity="0.25"
        />

        {/* Blue */}

        <circle
          cx="1260"
          cy="620"
          r="95"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="22"
          strokeDasharray="180 420"
          strokeLinecap="round"
          transform="rotate(-90 1260 620)"
        />

        {/* Cyan */}

        <circle
          cx="1260"
          cy="620"
          r="95"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="22"
          strokeDasharray="120 480"
          strokeDashoffset="-190"
          strokeLinecap="round"
          transform="rotate(-90 1260 620)"
        />

        {/* Emerald */}

        <circle
          cx="1260"
          cy="620"
          r="95"
          fill="none"
          stroke="#10b981"
          strokeWidth="22"
          strokeDasharray="90 510"
          strokeDashoffset="-320"
          strokeLinecap="round"
          transform="rotate(-90 1260 620)"
        />

        {/* Purple */}

        <circle
          cx="1260"
          cy="620"
          r="95"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="22"
          strokeDasharray="70 530"
          strokeDashoffset="-430"
          strokeLinecap="round"
          transform="rotate(-90 1260 620)"
        />

        {/* Center */}

        <circle
          cx="1260"
          cy="620"
          r="55"
          fill="#0f172a"
          opacity="0.9"
        />

        <circle
          cx="1260"
          cy="620"
          r="4"
          fill="#38bdf8"
        />
      </motion.g>
    </svg>
  );
}