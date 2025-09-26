import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <Link to="/" className="hover:text-[#06B6D4] transition" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-[#06B6D4] transition" to="/education" onClick={() => setMenuOpen(false)}>
          Education
        </Link>
      </li>
      <li>
        <Link className="hover:text-[#06B6D4] transition" to="/certifications" onClick={() => setMenuOpen(false)}>
          Certifications
        </Link>
      </li>
      <li>
        <Link className="hover:text-[#06B6D4] transition" to="/skills" onClick={() => setMenuOpen(false)}>
          Skills
        </Link>
      </li>
      <li>
        <Link to="/projects" className="hover:text-[#06B6D4] transition" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-[#06B6D4] transition" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-slate-900 text-white shadow-md relative overflow-visible">
      <h1 className="text-lg sm:text-2xl font-bold">
        <Link to="/" className="hover:text-blue-200 transition">
          Mohd Sufyaanuddin Khan&apos;s Portfolio
        </Link>
      </h1>
      {/* Hamburger Icon */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-opacity ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>
      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-6">{navLinks}</ul>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-slate-900 flex flex-col gap-4 py-4 px-6 sm:hidden shadow-md z-10">
          {navLinks}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
