import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 flex flex-col items-center"
    >
      <span className="text-sm tracking-widest uppercase mb-2">
        Scroll
      </span>

      <ChevronDown size={24} />
    </motion.div>
  );
}