// MenuItems.jsx

import { useState } from "react";
import Navbar from "../NavBar/Navbar";
import "./MenuItems.css";

import heroImage from "../../assets/kitchen/bg.jpg";

import poorialoo from "../../assets/kitchen/poori-aloo.jpg";
import sattuparatha from "../../assets/kitchen/sattu-paratha.jpg";
import dahivada from "../../assets/kitchen/dahi-vada.jpg";
import littichokha from "../../assets/kitchen/litti-chokha.jpg";
import thekua from "../../assets/kitchen/thekua.jpg";
import ghughni from "../../assets/kitchen/ghughni.jpg";
import andacurry from "../../assets/kitchen/anda-curry.jpg";
import muttonkeema from "../../assets/kitchen/mutton-keema.jpg";

import paneerthali from "../../assets/kitchen/paneer-thali.jpg";
import dalbhati from "../../assets/kitchen/dal-bhati.jpg";
import kadhibari from "../../assets/kitchen/kadhi-bari.jpg";
import alookachori from "../../assets/kitchen/aloo-kachori.jpg";
import fishcurry from "../../assets/kitchen/fish-curry.jpg";
import biharichicken from "../../assets/kitchen/bihari-chicken.jpg";

import butternaancombo from "../../assets/kitchen/butter-naan-combo.jpg";
import kadaipaneer from "../../assets/kitchen/kadai-paneer.jpg";
import chokhabhaat from "../../assets/kitchen/chokha-bhaat.jpg";
import malpua from "../../assets/kitchen/malpua.jpg";
import champaranmutton from "../../assets/kitchen/champaran-mutton.jpg";
import biharikebab from "../../assets/kitchen/bihari-kebab.jpg";

import rasmalai from "../../assets/kitchen/rasmalai.jpg";
import gulabjamun from "../../assets/kitchen/gulab-jamun.jpg";
import khajaa from "../../assets/kitchen/khajaa.jpg";
import balushahi from "../../assets/kitchen/balushahi.jpg";

import masalachai from "../../assets/kitchen/masala-chai.jpg";
import mangolassi from "../../assets/kitchen/mango-lassi.jpg";
import sattujuice from "../../assets/kitchen/sattu-juice.jpg";
import belsharbat from "../../assets/kitchen/bel-sharbat.jpg";

/* =========================
   FILTERS
========================= */

const filters = ["All", "Breakfast", "Lunch", "Dinner", "Sweets", "Beverages"];

// =========================
// BREAKFAST
// =========================

const breakfastItems = [
  {
    name: "Poori Aloo",
    price: "₹149",
    image: poorialoo,
    type: "veg",
    description: "Fluffy deep-fried bread served with spiced potato curry",
  },

  {
    name: "Sattu Paratha",
    price: "₹129",
    image: sattuparatha,
    type: "veg",
    description: "Protein-rich stuffed flatbread with authentic Bihar flavors",
  },

  {
    name: "Dahi Vada",
    price: "₹139",
    image: dahivada,
    type: "veg",
    description: "Soft lentil dumplings topped with creamy yogurt and chutneys",
  },

  {
    name: "Litti Chokha",
    price: "₹169",
    image: littichokha,
    type: "veg",
    description:
      "Roasted wheat balls stuffed with sattu served with smoky chokha",
  },

  {
    name: "Ghughni",
    price: "₹119",
    image: ghughni,
    type: "veg",
    description: "Traditional yellow peas curry topped with onions and masala",
  },

  {
    name: "Thekua Platter",
    price: "₹99",
    image: thekua,
    type: "veg",
    description:
      "Crispy jaggery and wheat flour sweet prepared during Chhath Puja",
  },

  {
    name: "Anda Curry",
    price: "₹189",
    image: andacurry,
    type: "nonveg",
    description:
      "Boiled eggs simmered in spicy Mithila-style onion tomato gravy",
  },

  {
    name: "Mutton Keema Paratha",
    price: "₹249",
    image: muttonkeema,
    type: "nonveg",
    description:
      "Layered paratha stuffed with rich spiced minced mutton filling",
  },
];

// =========================
// LUNCH
// =========================

const lunchItems = [
  {
    name: "Paneer Thali",
    price: "₹299",
    image: paneerthali,
    type: "veg",
    description: "Traditional Indian platter with paneer curry, rice and bread",
  },

  {
    name: "Dal Bati",
    price: "₹249",
    image: dalbhati,
    type: "veg",
    description: "Smoky baked bati served with rich dal and authentic spices",
  },

  {
    name: "Kadhi Bari",
    price: "₹219",
    image: kadhibari,
    type: "veg",
    description: "Tangy yogurt curry served with soft gram flour dumplings",
  },

  {
    name: "Aloo Kachori",
    price: "₹159",
    image: alookachori,
    type: "veg",
    description: "Crispy stuffed kachori served with spicy potato curry",
  },

  {
    name: "Maithili Fish Curry",
    price: "₹349",
    image: fishcurry,
    type: "nonveg",
    description: "Fresh river fish cooked in mustard gravy with local spices",
  },

  {
    name: "Bihari Chicken Masala",
    price: "₹389",
    image: biharichicken,
    type: "nonveg",
    description: "Slow-cooked spicy chicken curry with roasted bihari masala",
  },
];

// =========================
// DINNER
// =========================

const dinnerItems = [
  {
    name: "Butter Naan Combo",
    price: "₹349",
    image: butternaancombo,
    type: "veg",
    description: "Creamy curry paired with soft butter naan and aromatic rice",
  },

  {
    name: "Kadai Paneer",
    price: "₹279",
    image: kadaipaneer,
    type: "veg",
    description: "Spicy paneer tossed in rich tomato gravy with bell peppers",
  },

  {
    name: "Chokha Bhaat",
    price: "₹189",
    image: chokhabhaat,
    type: "veg",
    description: "Simple comforting rice served with smoky mashed vegetables",
  },

  {
    name: "Malpua Rabdi",
    price: "₹169",
    image: malpua,
    type: "veg",
    description: "Soft caramelized pancakes topped with chilled thick rabdi",
  },

  {
    name: "Champaran Mutton",
    price: "₹449",
    image: champaranmutton,
    type: "nonveg",
    description:
      "Authentic handi mutton slow cooked in traditional Bihar spices",
  },

  {
    name: "Bihari Seekh Kebab",
    price: "₹329",
    image: biharikebab,
    type: "nonveg",
    description: "Juicy charcoal grilled kebabs marinated in mustard spices",
  },
];

// =========================
// SWEETS
// =========================

const sweetItems = [
  {
    name: "Rasmalai",
    price: "₹119",
    image: rasmalai,
    type: "veg",
    description: "Soft saffron milk dumplings garnished with pistachios",
  },

  {
    name: "Gulab Jamun",
    price: "₹99",
    image: gulabjamun,
    type: "veg",
    description: "Classic Indian sweet soaked in warm cardamom sugar syrup",
  },

  {
    name: "Silao Khajaa",
    price: "₹129",
    image: khajaa,
    type: "veg",
    description: "Famous flaky layered sweet delicacy from Bihar",
  },

  {
    name: "Balushahi",
    price: "₹109",
    image: balushahi,
    type: "veg",
    description: "Traditional glazed sweet with crispy outside and soft center",
  },
];

// =========================
// BEVERAGES
// =========================

const beverageItems = [
  {
    name: "Masala Chai",
    price: "₹69",
    image: masalachai,
    type: "veg",
    description: "Traditional Indian tea brewed with aromatic spices",
  },

  {
    name: "Mango Lassi",
    price: "₹129",
    image: mangolassi,
    type: "veg",
    description: "Refreshing yogurt drink blended with ripe mangoes",
  },

  {
    name: "Sattu Sharbat",
    price: "₹89",
    image: sattujuice,
    type: "veg",
    description: "Cooling roasted gram drink popular during Bihar summers",
  },

  {
    name: "Bel Sharbat",
    price: "₹79",
    image: belsharbat,
    type: "veg",
    description: "Refreshing wood apple cooler with natural sweetness",
  },
];

/* =========================
   REUSABLE SECTION
========================= */

const MenuSection = ({ title, items, foodType }) => {
  const [showAll, setShowAll] = useState(false);
  const filteredItems =
    foodType === "all" ? items : items.filter((item) => item.type === foodType);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 4);

  return (
    <div className="menu-section">
      {/* HEADER */}

      <div className="menu-header">
        <h1>{title}</h1>

        <p>Experience authentic flavors crafted with tradition and elegance</p>

        <div className="divider">
          <span></span>

          <div className="dot"></div>

          <span></span>
        </div>
      </div>

      {/* GRID */}

      <div className="menu-grid">
        {filteredItems.length > 0 ? (
          displayedItems.map((item, index) => (
            <div className="food-card" key={index}>
              {/* IMAGE */}

              <div className="image-wrapper">
                <img src={item.image} alt={item.name} />

                <div className="badge-row">
                  {item.type === "veg" ? (
                    <span className="veg-badge">🟢 Veg</span>
                  ) : (
                    <span className="nonveg-badge">🔺 Non Veg</span>
                  )}

                  {index === 0 && (
                    <span className="best-badge">🔥 Bestseller</span>
                  )}
                </div>
              </div>

              {/* CONTENT */}

              <div className="food-content">
                <div className="food-row">
                  <h3>{item.name}</h3>

                  <span>{item.price}</span>
                </div>

                <p>{item.description}</p>

                <button>Add to Order</button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-menu">
            <p>No {foodType} dishes found in this section.</p>
          </div>
        )}
      </div>

      {/* VIEW MORE */}

      {filteredItems.length > 4 && (
        <div className="view-more-wrapper">
          <button
            className="view-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

/* =========================
   MAIN COMPONENT
========================= */

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const [foodType, setFoodType] = useState("all");

  return (
    <>
      <Navbar />

      <section
        className="menu-page"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* FILTER WRAPPER */}

        <div className="menu-filter-wrapper">
          {/* TOP FILTER */}

          <div className="top-filter-row">
            {/* ALL */}

            <button
              className={
                foodType === "all"
                  ? "food-type-btn all-active"
                  : "food-type-btn"
              }
              onClick={() => setFoodType("all")}
            >
              🍽️ All
            </button>

            {/* VEG */}

            <button
              className={
                foodType === "veg" ? "food-type-btn active" : "food-type-btn"
              }
              onClick={() => setFoodType("veg")}
            >
              🟢 Veg Only
            </button>

            {/* NON VEG */}

            <button
              className={
                foodType === "nonveg"
                  ? "food-type-btn active nonveg-active"
                  : "food-type-btn"
              }
              onClick={() => setFoodType("nonveg")}
            >
              🔺 Non Veg Only
            </button>
          </div>

          {/* CATEGORY FILTER */}

          <div className="category-scroll">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={
                  activeFilter === filter
                    ? "category-tab active"
                    : "category-tab"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* SECTIONS */}

        {(activeFilter === "All" || activeFilter === "Breakfast") && (
          <MenuSection
            title="Breakfast"
            items={breakfastItems}
            foodType={foodType}
          />
        )}

        {(activeFilter === "All" || activeFilter === "Lunch") && (
          <MenuSection title="Lunch" items={lunchItems} foodType={foodType} />
        )}

        {(activeFilter === "All" || activeFilter === "Dinner") && (
          <MenuSection title="Dinner" items={dinnerItems} foodType={foodType} />
        )}

        {(activeFilter === "All" || activeFilter === "Sweets") && (
          <MenuSection title="Sweets" items={sweetItems} foodType={foodType} />
        )}

        {(activeFilter === "All" || activeFilter === "Beverages") && (
          <MenuSection
            title="Beverages"
            items={beverageItems}
            foodType={foodType}
          />
        )}
      </section>
    </>
  );
};

export default Menu;
