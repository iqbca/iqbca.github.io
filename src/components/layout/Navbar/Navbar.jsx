import { NavLink } from "react-router-dom";

const navigation = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Experience", path: "/experience" },
  { title: "Platforms", path: "/platforms" },
  { title: "Projects", path: "/projects" },
  { title: "Resume", path: "/resume" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#09090B]/60 backdrop-blur-2xl border-b border-white/5">

      <div className="max-w-7xl mx-auto h-16 px-8 flex items-center justify-between">

        <NavLink
          to="/"
          className="font-bold tracking-[7px] text-lg"
        >
          ASIF IQBAL
        </NavLink>

        <div className="hidden lg:flex gap-8">

          {navigation.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {item.title}
            </NavLink>

          ))}

        </div>

      </div>

    </nav>
  );
}