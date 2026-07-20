export default function Container({ children }) {
  return (
    <div className="max-w-[1250px] mx-auto px-2 xl:px-0 lg:px-5">
      {children}
    </div>
  );
}