import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text:
      "The food reminded me of home. Simple, authentic, and full of traditional flavors. Litti Chokha was especially comforting.",
    name: "Amit Kumar",
    role: "Local Guest",
  },
  {
    text:
      "You can taste the care in every dish. Fresh ingredients and genuine Maithili flavors. A place I’d happily visit again.",
    name: "Neha Singh",
    role: "First-time Visitor",
  },
  {
    text:
      "A calm, welcoming place with food that feels honest and traditional. Makhana Kheer was perfectly balanced.",
    name: "Rahul Mishra",
    role: "Food Lover",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        {/* HEADER */}
        <span className="testimonials-pill">💬Customer Reviews</span>

        <h2>What Our Guests Say</h2>

        <p className="testimonials-subtitle">
          Early experiences from guests who’ve shared a meal with us and felt
          the taste of Mithila.
        </p>

        {/* CARDS */}
        <div className="testimonial-cards">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              {/* STARS */}
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* REVIEW */}
              <p className="review-text">“{item.text}”</p>

              {/* USER */}
              <div className="reviewer">
                <div className="avatar">👤</div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
