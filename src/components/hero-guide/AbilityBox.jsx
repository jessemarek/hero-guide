import React from "react";

//Utils
import { returnType } from "../../utils/index";

const AbilityBox = ({ hero, ability, type }) => {
  const attr = ability.attributes;

  return (
    <div className="ability-box">
      <h4>
        {ability.name} - {returnType(type)}
      </h4>

      <div className="ability-details">
        <div className="ability-icon">
          <span>
            <img
              src={`/assets/images/icons/abilities/${hero}-ability${type}.png`}
              alt="ability icon"
            />
            {attr && attr !== "none" ? (
              <img
                className="ability-attribute"
                src={`/assets/images/icons/attributes/${attr}.png`}
                alt=""
              />
            ) : null}
          </span>
        </div>

        <div className="ability-text">
          <h4>Ability Description</h4>
          <p>{ability.description}</p>
        </div>

        <div className="ability-stats">
          <h4>Ability Stats</h4>
          <ul className="grn-txt">
            {ability.stats.map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AbilityBox;
