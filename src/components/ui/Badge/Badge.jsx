export default function Badge({ children }) {
  return (
    <span
      className="
      px-4
      py-2
      rounded-full
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      text-zinc-300
      text-sm
      hover:border-blue-500/50
      hover:text-white
      transition
      "
    >
      {children}
    </span>
  );
}