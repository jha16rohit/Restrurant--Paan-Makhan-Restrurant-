import { useEffect, useState } from "react";
import "./FloatingButtons.css";

const FloatingButtons = () => {
  const [show, setShow] = useState(false);
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // show after scroll
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }

      // detect footer
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // footer is entering viewport
        if (rect.top <= windowHeight - 80) {
          setAtFooter(true);
        } else {
          setAtFooter(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`floating-buttons ${show ? "show" : ""} ${
        atFooter ? "row" : ""
      }`}
    >
      <button className="btn order">Order Now</button>
      <button className="btn menu">View Menu</button>
    </div>
  );
};

export default FloatingButtons;
