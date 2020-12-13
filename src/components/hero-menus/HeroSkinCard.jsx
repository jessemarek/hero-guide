import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const HeroSkinCard = (props) => {
  const { name } = props.hero;

  const { url } = useRouteMatch();

  return (
    <li className="hero-card">
      <Link to={`#`}>
        <img
          src={`/assets/images/hero-cards-skins/${name}.jpg`}
          alt={`Artwork card for ${name
            .split("-")
            .join(" ")}'s Skin. Link to this hero's guide`}
        />
      </Link>
      <p className="card-title">{name.split("-").join(" ")}</p>
    </li>
  );
};

export default HeroSkinCard;
