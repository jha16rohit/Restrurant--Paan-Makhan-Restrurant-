import "./Home.css";
import heroVideo from "../../assets/hero_video.mp4";
import SignatureDishes from "../SignatureDishes/SignatureDishes";
import OurStory from "../OurStory/OurStory";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Testimonials from "../Testimonials/Testimonials";
import DidYouKnow from "../DidYouKnow/DidYouKnow";

function Home() {
  return (
    <>
    <section className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <div className="welcome-pill"><h2>🍽️ Welcome to Paan & Makhan</h2></div>

        <h1>
          Savor the Taste of <br />
          <span>Perfection.</span>
        </h1>

        <p>
          Indulge in a culinary journey where fresh ingredients meet
          passionate craftsmanship. Every dish tells a story of tradition,
          innovation, and love for food.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Order Now</button>
          <button className="btn-secondary">View Menu</button>
        </div>
      </div>

      {/* RIGHT VIDEO */}
      <div className="hero-right">
  <div className="video-card">
    <video
      src={heroVideo}
      autoPlay
      loop
      muted
      playsInline
      className="hero-video"
    />
  </div>

  <div className="food-rating">
    <span className="star">⭐</span>
    <div>
      <strong>4.9 Rating</strong>
      <small>Makhana Kheer</small>
    </div>
  </div>
</div>

    
    </section>
    <SignatureDishes />
    <OurStory />
    <WhyChooseUs />
    <DidYouKnow/ >
    <Testimonials />
   </> 
  );
}

export default Home;
