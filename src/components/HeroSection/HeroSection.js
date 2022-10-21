import React from "react";
import "./HeroSection.scss";

const HeroSection = ({ itemName, learnUrl, orderUrl }) => {
  return (
    <section>
      <a href={learnUrl} className={`hero-image hero-image-${itemName}`}>
        <div className="hero-item-links">
          <a href={learnUrl}>
            Learn More <i className="fa fa-chevron-right"></i>
          </a>
          <a href={orderUrl}>
            Order Now <i className="fa fa-chevron-right"></i>
          </a>
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
