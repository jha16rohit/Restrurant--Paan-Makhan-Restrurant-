import "./OurStory.css";
import storyImg from "../../assets/home_1.png";
import { FaLeaf, FaHeart } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

const OurStory = () => {
  return (
    <section className="our-story">
      <div className="our-story-container">

        {/* LEFT IMAGE */}
        <div className="story-image">
          <img src={storyImg} alt="Our Story" />

          <div className="experience-badge">
            
            <span >From Our Kitchen to You</span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="story-content">
          <span className="story-pill">🏠About Us</span>

          <h2>Our Story</h2>

          <p>
            Born from a love for Maithili food and tradition, our journey began with a simple idea — to bring the warmth of home-cooked Mithila flavors to every plate we serve.
          
            Each recipe is inspired by age-old traditions, prepared using carefully chosen ingredients and time-honored techniques.
          </p>

          <p>
            As we begin this journey, we invite you to be a part of our story — one meal, one memory, and one tradition at a time.
          </p>

          {/* FEATURES */}
          <div className="story-features">
            <div className="feature-item">
              <span className="feature-icon"><MdRestaurantMenu /></span>
              <h4>Authentic Recipes</h4>
             
            </div>

            <div className="feature-item">
              <span className="feature-icon"><FaLeaf /></span>
              <h4>Fresh Ingredients</h4>
              
            </div>

            <div className="feature-item">
              <span className="feature-icon"><FaHeart /></span>
              <h4>Made with Care</h4>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
