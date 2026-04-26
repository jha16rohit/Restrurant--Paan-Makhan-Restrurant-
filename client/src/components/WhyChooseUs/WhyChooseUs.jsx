import "./WhyChooseUs.css";
import { FaLeaf, FaHeart } from "react-icons/fa";
import { MdRestaurant, MdAutoAwesome } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <section className="why-choose">
      <div className="why-container">

        {/* HEADER */}
        <span className="why-pill">✨Why Paan & Makhan</span>

        <h2>Why Choose Us</h2>

        <p className="why-subtitle">
          Rooted in Maithili tradition, we focus on authenticity, purity, and
          soulful flavors in every meal we prepare.
        </p>

        {/* CARDS */}
        <div className="why-cards">

          <div className="why-card">
            <span className="why-icon">
              <MdAutoAwesome />
            </span>
            <h4>Authentic Maithili Recipes</h4>
            <p>
              Recipes inspired by Mithila’s culinary heritage, prepared using
              traditional methods and time-honored techniques.
            </p>
          </div>

          <div className="why-card">
            <span className="why-icon">
              <FaLeaf />
            </span>
            <h4>Fresh, Handpicked Ingredients</h4>
            <p>
              We use carefully selected ingredients sourced daily to ensure
              purity, freshness, and natural taste in every dish.
            </p>
          </div>

          <div className="why-card">
            <span className="why-icon">
              <MdRestaurant />
            </span>
            <h4>Made Fresh, Every Day</h4>
            <p>
              Every meal is prepared fresh in our kitchen, just like at home —
              no shortcuts, no compromises.
            </p>
          </div>

          <div className="why-card">
            <span className="why-icon">
              <FaHeart />
            </span>
            <h4>Cooked with Care & Passion</h4>
            <p>
              From preparation to plating, every dish is crafted with
              dedication, love, and respect for tradition.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
