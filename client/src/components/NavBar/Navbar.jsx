import "./Navbar.css";
import logo from "../../assets/logo.png";
import { MdLocationOn } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      
      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="Paan & Makhan" />
        <div className="logo-text">
          <span className="brand-name">PAAN & MAKHAN</span>
          <span className="brand-sub">RESTAURANT</span>
        </div>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/menu" onClick={() => setOpen(false)}>Menu</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        <li>
  <Link to="/accounts" onClick={() => setOpen(false)}>
    Accounts
  </Link>
</li>

        {/* Mobile Location Button */}
        <li className="mobile-location">
          <button className="location-btn">
            <MdLocationOn className="location-icon" />
            <span>See Locations</span>
          </button>
        </li>
        
      </ul>

      {/* Desktop Location Button */}
      <button className="location-btn desktop-location">
        <MdLocationOn className="location-icon" />
        <span>See Locations</span>
      </button>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
};

export default Navbar;
