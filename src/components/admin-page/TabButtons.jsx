import React from "react";

const TabButtons = ({ setActiveForm }) => {
  const clickHandler = (event) => {
    const { name } = event.target;
    event.preventDefault();

    setActiveForm(name);
  };
  return (
    <div>
      <button name="hero-info" className="tab-btn" onClick={clickHandler}>
        Hero Info
      </button>
      <button name="stats" className="tab-btn" onClick={clickHandler}>
        Stats
      </button>
      <button name="abilities" className="tab-btn" onClick={clickHandler}>
        Abilities
      </button>
      <button name="fusions" className="tab-btn" onClick={clickHandler}>
        Fusions
      </button>
      <button name="key-items" className="tab-btn" onClick={clickHandler}>
        Key Items
      </button>
      <button name="academy-trees" className="tab-btn" onClick={clickHandler}>
        Academy Trees
      </button>
      <button name="awakening-quest" className="tab-btn" onClick={clickHandler}>
        Awakening Quest
      </button>
    </div>
  );
};

export default TabButtons;
