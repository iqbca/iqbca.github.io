import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  onClick,
}) {
  const styles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40",

    secondary:
      "bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10",
  };

  return (
    <button
      onClick={onClick}
      className={`
        group
        px-10
        py-5 
        
        rounded-2xl
        font-semibold
        inline-flex
        items-center
        gap-3
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-[1.02]
        ${styles[variant]}
      `}
    >
      {children}

      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}