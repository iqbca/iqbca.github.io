export default function Container({ children }) {
  return (
    <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
      {children}
    </div>
  );
}