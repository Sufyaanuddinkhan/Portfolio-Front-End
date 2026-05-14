import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Certifications", path: "/certifications" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="
          fixed
          top-0
          left-0
          w-full
          z-50
          px-4
          md:px-8
          py-4
        "
      >
        {/* Outer Glow */}
        <div className="absolute inset-0 bg-cyan-500/5 blur-3xl pointer-events-none"></div>

        <div
          className="
            max-w-7xl
            mx-auto
            flex
            items-center
            justify-between
            px-6
            py-4
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            shadow-[0_8px_32px_rgba(0,0,0,0.35)]
          "
        >
          {/* Logo */}
          <Link
            to="/"
            className="
              relative
              text-lg
              sm:text-xl
              md:text-2xl
              font-black
              tracking-wide
              text-white
              group
            "
          >
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-purple-400
                bg-clip-text
                text-transparent
              "
            >
              Sufyaan
            </span>

            <span className="text-white ml-2">Portfolio</span>

            <div
              className="
                absolute
                -bottom-1
                left-0
                w-0
                h-[2px]
                bg-cyan-400
                transition-all
                duration-500
                group-hover:w-full
              "
            ></div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="
                      relative
                      text-sm
                      uppercase
                      tracking-widest
                      font-medium
                      text-gray-300
                      hover:text-white
                      transition-colors
                      duration-300
                    "
                  >
                    {item.name}

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="
                          absolute
                          -bottom-2
                          left-0
                          right-0
                          h-[2px]
                          rounded-full
                          bg-cyan-400
                        "
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              flex
              items-center
              justify-center
              w-11
              h-11
              rounded-xl
              bg-white/10
              border
              border-white/10
              text-white
              backdrop-blur-xl
            "
          >
            {menuOpen ? (
              <FaTimes className="text-lg" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                md:hidden
                mt-4
                overflow-hidden
              "
            >
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/40
                  backdrop-blur-2xl
                  shadow-2xl
                  p-6
                "
              >
                <ul className="flex flex-col gap-5">
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <motion.li
                        key={item.name}
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.08,
                        }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setMenuOpen(false)}
                          className={`
                            flex
                            items-center
                            justify-between
                            text-lg
                            font-medium
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "text-cyan-400"
                                : "text-gray-300 hover:text-white"
                            }
                          `}
                        >
                          {item.name}

                          {isActive && (
                            <motion.div
                              layoutId="mobile-indicator"
                              className="
                                w-2
                                h-2
                                rounded-full
                                bg-cyan-400
                              "
                            />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
