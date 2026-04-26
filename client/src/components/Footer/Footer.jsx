import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaStar } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { useState } from "react";

const Footer = () => {
  const [rating, setRating] = useState(0);
  const [food, setFood] = useState("");
  const [message, setMessage] = useState("");

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="brand-logo">
            <img src={logo} alt="Paan & Makhan" className="footer-logo" />
            <div className="footer-text">
              <span className="footer-title">PAAN & MAKHAN</span>
              <span className="footer-subtitle footer-1">RESTAURANT</span>
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

        {/* LINKS */}
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

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><MdLocationOn /> 123 Gourmet Street, Food City</p>
          <p><MdPhone /> +1 (555) 123-4567</p>
          <p><MdEmail /> hello@paanmakhan.com</p>
        </div>

        {/* ⭐ FEEDBACK SECTION */}
        <div className="footer-feedback">
          <h3>Feedback</h3>

          <select value={food} onChange={(e) => setFood(e.target.value)}>
            <option value="">Select Food Item</option>
            <option>Butter Chicken</option>
            <option>Paan Kulfi</option>
            <option>Dal Makhani</option>
            <option>Veg Thali</option>
            <option>Biryani</option>
          </select>

          <div className="star-rating">
            {[1,2,3,4,5].map((num) => (
              <FaStar
                key={num}
                className={num <= rating ? "star active" : "star"}
                onClick={() => setRating(num)}
              />
            ))}
          </div>

          <textarea
            placeholder="Write your feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="feedback-btn">SUBMIT</button>
        </div>

      </div>

      <div className="footer-bottom">
        © 2024 PAAN & MAKHAN Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
