export default function SectionTitle({
  label,
  title,
  description,
}) {
  return (
    <div className="max-w-3xl mb-16">
      <p className="uppercase tracking-[5px] text-blue-500 mb-3 font-semibold">
        {label}
      </p>

      <h2 className="text-5xl font-bold mb-6">
        {title}
      </h2>

      <p className="text-zinc-400 text-lg leading-8">
        {description}
      </p>
    </div>
  );
}