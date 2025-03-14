import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">CH - AI consultancy</div>
        <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#ai-consultancy">AI Consultancy</a></li>
          <li><a href="#ai-art">AI Art</a></li>
          <li><a href="#scientific-output">Scientific Output</a></li>
          <li><a href="#music">Music</a></li>
        </ul>
      </div>
    </>
  );
}
