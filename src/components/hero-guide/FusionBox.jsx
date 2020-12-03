import React from "react";
import { formatText } from "../../utils";

const FusionBox = ({
  name,
  color,
  items,
  componentList,
  defaultComponent,
  returnComponent,
  awakened,
  sig_item,
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
            if (color === "org" && awakened && idx === 0) {
              return (
                <div className="fusion-item">
                  <img
                    src={`/assets/images/icons/signature-items/signature/${sig_item}.png`}
                    alt="equipment icon"
                  />

                  <div className="tooltip">
                    <p>Signature Item - {formatText(sig_item)}</p>
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
