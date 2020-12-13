import React from "react";

import AbilityBox from "./AbilityBox";
import SkinAbility from "./SkinAbility";

const Abilities = ({ hero, abilities, skin }) => {
  return (
    <section id="abilities" className="guide-section">
      <div className="section-header">
        <h2>Abilities</h2>
      </div>

      <div className="section-body">
        {abilities.map((a, idx) => (
          <AbilityBox key={idx} hero={hero} ability={a} type={idx + 1} />
        ))}
      </div>
      {skin !== "none" && skin.ability !== "none" ? (
        <SkinAbility hero={hero} skin={skin} />
      ) : null}
    </section>
  );
};

export default Abilities;
