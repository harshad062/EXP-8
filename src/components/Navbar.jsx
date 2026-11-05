import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/students", label: "Students" },
  { to: "/register", label: "Register" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-icon"></span>
          <span className="brand-text">Tour<span>Mate</span></span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/login" className="nav-cta" onClick={() => setOpen(false)}>
            Traveller Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
