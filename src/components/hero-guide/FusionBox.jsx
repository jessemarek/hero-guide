import React from "react";
import { formatText, returnStars } from "../../utils";

const FusionBox = ({
  name,
  color,
  items,
  componentList,
  defaultComponent,
  returnComponent,
  awakening,
}) => {
  return (
    <div className="fusion-box">
      <h4>
        <span className={`${color}-txt`}>{name}</span>
      </h4>
      {
        //Dynamically load components from hero data
        items &&
          items.map((i, idx) => {
            if (color === "org" && awakening.awakened && idx === 0) {
              return (
                <div key={idx} className="fusion-item">
                  <img
                    src={`/assets/images/icons/signature-items/signature/${awakening.sig_item}.png`}
                    alt="equipment icon"
                  />

                  <div className="tooltip">
                    <h3>
                      Stats <span className="grn-txt">+ Max Enchant</span>
                    </h3>
                    {returnStars(7, "enchant")}
                    {awakening.sig_stats.map((s, idx) => (
                      <p key={idx}>
                        {`${formatText(s.stat)} ${s.value} `}
                        <span className="grn-txt">{`+ ${s.enchant}`}</span>
                      </p>
                    ))}
                    <h3>Recipe</h3>
                    <img
                      src={`/assets/images/icons/signature-items/quest1/${awakening.quest_1.fragment}.png`}
                      width="36"
                      height="36"
                      alt="equipment icon"
                    />
                    <img
                      src={`/assets/images/icons/equipment/${awakening.quest_1.recipe[0]}.png`}
                      width="36"
                      height="36"
                      alt="equipment icon"
                    />
                    <br />
                    <img
                      src={`/assets/images/icons/equipment/${awakening.quest_1.recipe[1]}.png`}
                      width="36"
                      height="36"
                      alt="equipment icon"
                    />
                    <img
                      src={`/assets/images/icons/equipment/${awakening.quest_1.recipe[2]}.png`}
                      width="36"
                      height="36"
                      alt="equipment icon"
                    />
                    <p>Level 90 Required</p>
                  </div>
                </div>
              );
            } else {
              return returnComponent(i, idx, componentList, defaultComponent);
            }
          })
      }
    </div>
  );
};

export default FusionBox;
