import React from "react";

//Utils
import { formatText } from "../../utils/index";

const HeroArt = ({ name, quote }) => {
  return (
    <div className="hero-art">
      <div className="hero-card">
        <img
          src={`/assets/images/hero-cards/${name}.jpg`}
          alt={`Artwork card for ${formatText(name)}`}
        />
      </div>

      <div className="hero-portrait">
        <img
          src={`/assets/images/icons/portraits/${name}.png`}
          alt={`Portrait for ${formatText(name)}`}
        />
      </div>

      <p className="hero-quote">{`"${quote}"`}</p>
    </div>
  );
};

export default HeroArt;
