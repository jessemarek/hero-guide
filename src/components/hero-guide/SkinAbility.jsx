import React from "react";
import { formatText } from "../../utils";

const SkinAbility = ({ hero, skin }) => {
  return (
    <div className="ability-box">
      <h4>
        {formatText(skin.ability)} - Unlocks with{" "}
        <span className="red-txt">{formatText(skin.skin_name)}</span> Skin
      </h4>

      <div className="ability-details">
        <div className="ability-icon">
          <span>
            <img
              src={`/assets/images/icons/abilities/${hero}-skin-ability.png`}
              alt="ability icon"
            />
          </span>
        </div>

        <div className="ability-text">
          <h4>Description</h4>
          <p>{skin.details}</p>
        </div>

        <div className="ability-stats">
          <h4>Info</h4>
          <p className="grn-txt">
            Ability only available while {formatText(skin.skin_name)} is
            equipped
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkinAbility;
