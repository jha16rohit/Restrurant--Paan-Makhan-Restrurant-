import "./SignatureDishes.css";
import sign1 from "../../assets/sign_1.png";
import sign2 from "../../assets/sign_2.png";
import sign3 from "../../assets/sign_3.png";
import sign4 from "../../assets/sign_4.png";

const dishes = [
  {
    title: "Litti Chokha",
    tag: "A MITHILA CLASSIC",
    desc:
      "Fire-roasted wheat balls filled with sattu, served with smoky mashed vegetables — a quintessential Bihari delicacy passed down through generations.",
    image: sign1,
  },
  {
    title: "Sattu Paratha",
    tag: "Traditional Recipe",
    desc:
      "Golden griddle-cooked flatbread generously stuffed with spiced roasted gram flour, embodying the rustic flavors of village hearths.",
    image: sign2,
  },
  {
    title: "Kadhi Bari",
    tag: "Grandmother's Recipe",
    desc:
      "Silken yogurt curry tempered with aromatic spices, cradling soft gram flour dumplings — comfort served in every spoonful.",
    image: sign3,
  },
  {
    title: "Makhana Kheer",
    tag: "Sacred Offering",
    desc:
      "Slow-cooked creamy rice pudding adorned with rose petals and saffron threads, celebrating the timeless art of Maithili sweetmaking.",
    image: sign4,
  },
  
];

const SignatureDishes = () => {
  return (
    <>
      {/* ===== EXISTING HEADER (UNCHANGED) ===== */}
      <section className="signature-header">
      <div className="signature-inner">

        <span className="signature-top">Our Signature</span>

        <h2>
          Maithili Dishes
        </h2>

        <p>
          Timeless recipes from the heart of Mithila, prepared with tradition
          and love.
        </p>

        <div className="signature-divider">
            <span className="line"></span>

            <div className="ornament">
                <span className="diamond"></span>
                <span className="star">✦</span>
                <span className="diamond"></span>
            </div>

            <span className="line"></span>
            </div>


      </div>
    </section>

      {/* ===== SIGNATURE CARDS ===== */}
      <section className="signature-cards">
        {dishes.map((dish, index) => (
          <div
  className={`signature-card ${index % 2 !== 0 ? "reverse" : ""}`}
  key={index}
>

            
            {/* LEFT IMAGE */}
            <div className="card-image">
              <img src={dish.image} alt={dish.title} />
            </div>

            {/* RIGHT CONTENT */}
            <div className="card-content">
              <span className="card-tag">{dish.tag}</span>
              <h3>{dish.title}</h3>
              <p>{dish.desc}</p>
              <button className="order-btn">Order Now</button>
              <div className="card-divider">
                <span></span>
                <span className="dot"></span>
                <span></span>
              </div>
            </div>

          </div>
        ))}
        <div className="signature-divider bottom-divider">
            <span className="line"></span>

            <div className="ornament">
              <span className="diamond"></span>
              <span className="star">✦</span>
              <span className="diamond"></span>
            </div>

            <span className="line"></span>
          </div>

      </section>
      <section className="mithila-cta">
  <h2>Experience the authentic flavors of Mithila</h2>

  <button className="cta-btn">
    Discover Mithila Flavors
  </button>
</section>

    </>
  );
};

export default SignatureDishes;
