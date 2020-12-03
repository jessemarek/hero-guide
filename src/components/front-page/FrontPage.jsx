import React, { useState } from "react";
import NewHeroes from "./NewHeroes";
import NewAwakenings from "./NewAwakenings";
import AllGuides from "./AllGuides";

const FrontPage = () => {
  const [newHeroes] = useState({
    title: "new-heroes",
    guides: ["magdor", "taurus", "slim"],
    message:
      "*No longer displays new heroes. Instead these are some of my favorite heroes",
  });

  const [newAwakenings] = useState({
    title: "new-awakenings",
    guides: ["konrad", "serafine", "mazir"],
    message:
      "*No longer displays new awakenings. Instead these are some of my favorite awakened heroes",
  });

  const [allGuides] = useState({
    title: "guides",
    guides: [
      "heroes",
      "awakenings",
      "soulstones",
      "forge",
      "runestones",
      "furnace",
      "academy",
      "workshop",
    ],
  });

  return (
    <>
      <header className="logo">
        <img src="/assets/images/sh-logo.png" alt="Soul Hunters logo image" />
      </header>
      <p>
        Note: This site is no longer maintained and remains up as a historical
        representation of what it looked like circa October 2017.
      </p>
      <div className="front-page wrapper">
        <NewHeroes data={newHeroes} />
        <NewAwakenings data={newAwakenings} />

        <AllGuides data={allGuides} />
      </div>
    </>
  );
};

export default FrontPage;
