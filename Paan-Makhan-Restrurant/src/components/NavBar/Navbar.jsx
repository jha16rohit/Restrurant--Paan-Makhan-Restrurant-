import "./Navbar.css";
import logo from "../../assets/logo.png";
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

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
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>

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

      {/* HAMBURGER (RIGHT SIDE) */}
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
