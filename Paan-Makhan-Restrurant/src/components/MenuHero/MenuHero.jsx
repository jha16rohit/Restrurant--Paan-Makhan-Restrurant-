import "./MenuHero.css";
import heroImage from "../../assets/food_2.png";

const MenuHero = () => {
  return (
    <section
      className="menu-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="menu-hero-overlay">
        <div className="menu-hero-content">
          <span className="menu-hero-tag">
            AUTHENTIC MAITHILI & INDIAN CUISINE
          </span>

          <h1 className="menu-hero-title">
            Mithila's Kitchen
          </h1>

          <p className="menu-hero-subtitle">
            Where heritage recipes meet modern elegance.
            Experience the soul of tradition in every bite.
          </p>

          <div className="menu-hero-actions">
            <button className="hero-btn primary">
              Explore Menu
            </button>
            <button className="hero-btn secondary">
              Reserve a Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHero;
