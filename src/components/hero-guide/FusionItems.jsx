import React from "react";

//Components
import { equipment } from "../fusion-items/index";
import FusionBox from "./FusionBox";

//Utils
import { returnComponent } from "../../utils/index";

const FusionItems = ({ fusionItems }) => {
  return (
    <section id="fusion-items" className="guide-section">
      <div className="section-header">
        <h2>Fusions</h2>
      </div>
      <div className="section-body">
        <div className="purple-fusions">
          <FusionBox
            name={"Purple"}
            color={"prp"}
            items={fusionItems.purple}
            componentList={equipment}
            defaultComponent={equipment["unknown"]}
            returnComponent={returnComponent}
          />

          <FusionBox
            name={"Purple+1"}
            color={"prp"}
            items={fusionItems.purple1}
            componentList={equipment}
            defaultComponent={equipment["unknown"]}
            returnComponent={returnComponent}
          />

          <FusionBox
            name={"Purple+2"}
            color={"prp"}
            items={fusionItems.purple2}
            componentList={equipment}
            defaultComponent={equipment["unknown"]}
            returnComponent={returnComponent}
          />

          <FusionBox
            name={"Purple+3"}
            color={"prp"}
            items={fusionItems.purple3}
            componentList={equipment}
            defaultComponent={equipment["unknown"]}
            returnComponent={returnComponent}
          />

          <FusionBox
            name={"Purple+4"}
            color={"prp"}
            items={fusionItems.purple4}
            componentList={equipment}
            defaultComponent={equipment["unknown"]}
            returnComponent={returnComponent}
          />
        </div>

        <div className="orange-fusions">
          <FusionBox
            name={"Orange"}
            color={"org"}
            items={fusionItems.orange}
            componentList={equipment}
            defaultComponent={equipment["unknown"]}
            returnComponent={returnComponent}
          />

          <FusionBox
            name={"Orange+1"}
            color={"org"}
            items={fusionItems.orange1}
            componentList={equipment}
            defaultComponent={equipment["unknown"]}
            returnComponent={returnComponent}
          />

          <FusionBox
            name={"Orange+2"}
            color={"org"}
            items={fusionItems.orange2}
            componentList={equipment}
            defaultComponent={equipment["unknown"]}
            returnComponent={returnComponent}
          />
        </div>
      </div>
    </section>
  );
};

export default FusionItems;
