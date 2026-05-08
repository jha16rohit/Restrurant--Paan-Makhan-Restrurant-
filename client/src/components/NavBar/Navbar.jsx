import "./Navbar.css";
import logo from "../../assets/logo.png";

import { MdLocationOn } from "react-icons/md";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [showHamburger, setShowHamburger] = useState(true);

  /* =========================================
     NAVBAR SHADOW + HAMBURGER HIDE
  ========================================= */

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      /* NAVBAR SHADOW */

      setScrolled(window.scrollY > 10);

      /* HIDE HAMBURGER WHEN SCROLL DOWN */

      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowHamburger(false);
      } else {
        setShowHamburger(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================================
     LOCK BODY SCROLL WHEN MENU OPEN
  ========================================= */

  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* =========================================
          LOGO
      ========================================= */}

      <div className="logo">
        <img src={logo} alt="Paan & Makhan" />

        <div className="logo-text">
          <span className="brand-name">
            PAAN <span className="symbol">&</span> MAKHAN
          </span>

          <span className="brand-sub">Restaurant</span>
        </div>
      </div>

      {/* =========================================
          NAV LINKS
      ========================================= */}

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/menu" onClick={() => setOpen(false)}>
            Menu
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>

        <li>
          <Link to="/accounts" onClick={() => setOpen(false)}>
            Accounts
          </Link>
        </li>

        {/* MOBILE LOCATION */}

        <li className="mobile-location">
          <button className="location-btn">
            <MdLocationOn className="location-icon" />

            <span>See Locations</span>
          </button>
        </li>
      </ul>

      {/* =========================================
          DESKTOP LOCATION BUTTON
      ========================================= */}

      <button className="location-btn desktop-location">
        <MdLocationOn className="location-icon" />

        <span>See Locations</span>
      </button>

      {/* =========================================
          HAMBURGER
      ========================================= */}

      <div
        className={`hamburger ${open ? "active" : ""} ${
          showHamburger ? "show" : "hide"
        }`}
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
