import React from "react";

//Utils
import { returnStars, formatText } from "../../utils/index";

const HeroDetails = ({
  first_appeared,
  card_type,
  chest_type,
  available_in,
}) => {
  const shopName = {
    campaign: "Campaign",
    arena: "Arena Armory",
    "epic-arena": "Champion's Corner",
    "crucible-of-fire": "Crucible Supply Wagon",
    "guild-hall": "Guild Emporium",
    "hall-of-legends": "Legendary Shop",
    "mystic-ruins": "Mystic Ruins",
    "traveling-treant": "Traveling Treant",
    "not-released": "Not Released",
  };

  return (
    <div className="hero-ss-details">
      <div className="hero-details-icon">
        <h4>First Appeared</h4>
        <img
          className="details.icon"
          src={`/assets/images/icons/hero-info/${first_appeared}.png`}
          width="86"
          height="86"
          alt=""
        />
        <p>{formatText(first_appeared)}</p>
      </div>

      <div className="card-details">
        <h4>{returnStars(card_type, "star")} Hero Card</h4>
        <ul>
          <li>
            {`Requires ${card_type === 1 ? 10 : card_type === 2 ? 30 : 80}`}{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                width="16"
                alt=""
              />
            </span>{" "}
            to Summon
          </li>
          <li>
            {`Additional Cards grant ${
              card_type === 1 ? 7 : card_type === 2 ? 18 : 30
            } `}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                width="16"
                alt=""
              />
            </span>
          </li>
          <li>
            Additional Cards drop in{" "}
            <span className="chest-icon">
              <img
                src={`/assets/images/icons/shops/${chest_type}-chest.png`}
                width="24"
                alt=""
              />
            </span>
          </li>
        </ul>
      </div>

      <div className="hero-details-icon">
        <h4>
          <span className="soulstone-icon">
            <img
              className="details.icon"
              src="/assets/images/icons/hero-info/ss.png"
              width="20"
              alt=""
            />
          </span>{" "}
          Available In
        </h4>
        <img
          src={`/assets/images/icons/shops/${available_in}.png`}
          width="86"
          height="86"
          alt=""
        />
        <p>{shopName[available_in]}</p>
      </div>
    </div>
  );
};

export default HeroDetails;
