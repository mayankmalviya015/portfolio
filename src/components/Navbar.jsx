import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
const navItems = [
{ name: "Home", path: "/" },
{ name: "Projects", path: "/projects" },
{ name: "Education", path: "/education" },
{ name: "Contact", path: "/contact" },
];

return ( <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f19]/85 backdrop-blur-xl border-b border-white/10"> <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

    <div className="h-20 flex items-center justify-between">

      {/* ================= LOGO ================= */}
      <NavLink
        to="/"
        className="group flex items-center gap-3"
      >

        {/* Logo */}
        <div
          className="
            relative
            w-10
            h-10
            rounded-xl
            flex
            items-center
            justify-center
            bg-gradient-to-br
            from-cyan-400
            to-blue-500
            text-[#0b0f19]
            font-black
            text-lg
            shadow-lg
            shadow-cyan-400/20
            group-hover:scale-110
            group-hover:rotate-3
            transition-all
            duration-300
          "
        >
          M

          <span
            className="
              absolute
              -top-1
              -right-1
              w-2
              h-2
              rounded-full
              bg-white
              shadow-[0_0_8px_rgba(255,255,255,0.8)]
            "
          ></span>
        </div>

        {/* Name */}
        <div className="hidden sm:block leading-tight">
          <h1 className="text-lg font-bold text-white tracking-wide">
            Mayank
          </h1>

          <p className="text-[9px] text-cyan-400 tracking-[0.3em] font-medium">
            DEVELOPER
          </p>
        </div>

      </NavLink>


      {/* ================= NAV LINKS ================= */}
      <div className="hidden md:flex items-center gap-8">

        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `relative py-2 text-sm font-medium transition-all duration-300 group ${
                isActive
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.name}

                {/* Active underline */}
                <span
                  className={`
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    bg-cyan-400
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                ></span>
              </>
            )}
          </NavLink>
        ))}

      </div>


      {/* ================= RESUME ================= */}
      <a
        href="/mayank.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          relative
          flex
          items-center
          gap-2
          px-5
          py-2.5
          rounded-xl
          bg-cyan-400
          text-[#0b0f19]
          text-sm
          font-bold
          overflow-hidden
          hover:bg-cyan-300
          hover:-translate-y-0.5
          shadow-lg
          shadow-cyan-400/10
          transition-all
          duration-300
        "
      >
        <span>Resume</span>

        <span
          className="
            text-base
            group-hover:translate-x-1
            transition-transform
            duration-300
          "
        >
          ↗
        </span>
      </a>

    </div>

  </div>
</nav>


);
};

export default Navbar;
