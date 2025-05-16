import { useState } from "react";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="hamburger" onClick={toggleMenu}>☰</div>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#intro" onClick={closeMenu}>About</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#achievements" onClick={closeMenu}>Achievements</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
