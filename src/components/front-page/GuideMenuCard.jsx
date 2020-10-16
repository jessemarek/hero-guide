import React from "react";
import { Link } from "react-router-dom";

const GuideMenuCard = ({ guideURL, guide }) => {
  return (
    <li className="hero-card">
      <Link to={`${guideURL}/${guide}`}>
        <img
          src={`/assets/images/${guide}-card.png`}
          alt={`Artwork card and link to ${guide} guide.`}
        />
      </Link>
      <p className="card-title">{guide.split("-").join(" ")}</p>
    </li>
  );
};

export default GuideMenuCard;
