import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="brand-logo">
  <img src={logo} alt="Paan & Makhan" className="footer-logo" />
  <div className="footer-text">
    <span className="footer-title">PAAN & MAKHAN</span>
    <span className="footer-subtitle">RESTAURANT</span>
  </div>
</div>


          <p>
            Authentic Maithili & Indian flavors, crafted with tradition and fresh ingredients.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Menu</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>Reservations</p>
        </div>

        <div className="footer-links">
          <h3>Our Menu</h3>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
          <p>Drinks</p>
          <p>Desserts</p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><MdLocationOn /> 123 Gourmet Street, Food City, FC 12345</p>
          <p><MdPhone /> +1 (555) 123-4567</p>
          <p><MdEmail /> hello@paanmakhan.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2024 PAAN & MAKHAN Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
