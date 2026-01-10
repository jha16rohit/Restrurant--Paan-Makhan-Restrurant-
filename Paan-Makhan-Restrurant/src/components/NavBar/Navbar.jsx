import "./Navbar.css";
import logo from "../../assets/logo.png";
import { MdLocationOn } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Paan & Makhan" />
        <div className="logo-text">
          <span className="brand-name">PAAN & MAKHAN</span>
          <span className="brand-sub">RESTAURANT</span>
        </div>
      </div>

      <ul className="nav-links">
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="location-btn">
        <MdLocationOn className="location-icon" />
        <span>See Locations</span>
      </button>
    </nav>
  );
};

export default Navbar;
