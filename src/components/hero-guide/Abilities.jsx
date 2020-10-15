import React from "react";

import AbilityBox from "./AbilityBox";

const Abilities = ({ hero, abilities }) => {
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
    </section>
  );
};

export default Abilities;
