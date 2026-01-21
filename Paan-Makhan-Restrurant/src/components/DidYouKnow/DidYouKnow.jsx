import "./DidYouKnow.css";
import foodImg from "../../assets/food.png";
import { FiMessageCircle } from "react-icons/fi";

const DidYouKnow = () => {
  return (
    <section className="didyouknow">
      <div className="didyouknow-container">

        {/* Left Content */}
        <div className="didyouknow-content">
          <h2 className="title">Did you know?</h2>

          <p className="description">
            Mithila cuisine is known for its use of sattu (roasted gram flour)
            and makhana (fox nuts), traditional in every Mithila household
            for their nutritional value and unique taste.
          </p>

          <div className="cta-wrapper">
            <div className="chat-box">
              <div className="chat-icon">
                <FiMessageCircle />
              </div>
              <div>
                <span>Need more info?</span>
                <strong>Chat with us!</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="didyouknow-image">
          <img src={foodImg} alt="Mithila Food" />
        </div>

      </div>
    </section>
  );
};

export default DidYouKnow;
