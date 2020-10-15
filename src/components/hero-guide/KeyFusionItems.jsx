import React from "react";

import KeyItem from "./KeyItem";

const KeyFusionItems = ({ keyItems, heroAwakened }) => {
  return (
    <section id="key-items" className="guide-section">
      <div className="section-header">
        <h2>Key Fusion Items</h2>
      </div>

      <div className="section-body">
        <div className="key-item-box">
          {keyItems &&
            keyItems.map((i, idx) => <KeyItem key={idx} id={idx} item={i} />)}
        </div>

        <div className="key-item-note">
          <p>
            *Key items required to fuse up to{" "}
            <span className="org-txt">Orange+2</span> and fully equip. Not all
            items required for fusions listed.
            {heroAwakened ? " Signature Item not included." : ""}
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyFusionItems;
