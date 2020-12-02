import React from "react";

//Utils
import { returnStars, formatText } from "../../utils/index";

const HeroDetails = ({
  first_appeared,
  card_type,
  chest_type,
  available_in,
}) => {
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
            <img
              src="/assets/images/icons/hero-info/ss.png"
              width="16"
              alt=""
            />{" "}
            to summon
          </li>
          <li>
            {`Additional Cards grant ${
              card_type === 1 ? 7 : card_type === 2 ? 18 : 30
            } `}
            <img
              src="/assets/images/icons/hero-info/ss.png"
              width="16"
              alt=""
            />
          </li>
          <li>
            <img
              src={`/assets/images/icons/shops/${chest_type}-chest.png`}
              width="24"
              alt=""
            />{" "}
            {`Drops in ${formatText(chest_type)} Chest`}
          </li>
        </ul>
      </div>

      <div className="hero-details-icon">
        <h4>
          <img
            className="details.icon"
            src="/assets/images/icons/hero-info/ss.png"
            width="16"
            alt=""
          />{" "}
          Available In
        </h4>
        <img
          src={`/assets/images/icons/shops/${available_in}.png`}
          width="86"
          height="86"
          alt=""
        />
        <p>{formatText(available_in)}</p>
      </div>
    </div>
  );
};

export default HeroDetails;
