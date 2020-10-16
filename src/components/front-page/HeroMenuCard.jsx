import React from "react";
import { Link } from "react-router-dom";

const HeroMenuCard = ({ guideURL, guide }) => {
  return (
    <li className="hero-card">
      <Link to={`${guideURL}/${guide}`}>
        <img
          src={`/assets/images/hero-cards${
            guideURL === "/awakenings" ? "-aw" : ""
          }/${guide}${guideURL === "/awakenings" ? "-aw" : ""}.jpg`}
          alt={`Artwork card for ${guide
            .split("-")
            .join(" ")}. Link to this hero's guide`}
        />
      </Link>
      <p className="card-title">{guide.split("-").join(" ")}</p>
    </li>
  );
};

export default HeroMenuCard;
