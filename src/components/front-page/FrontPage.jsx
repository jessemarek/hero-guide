import React, { useState } from "react";
import NewHeroes from "./NewHeroes";
import NewAwakenings from "./NewAwakenings";
import AllGuides from "./AllGuides";

const FrontPage = () => {
  const [newHeroes] = useState({
    title: "new-heroes",
    guides: ["tareth", "jasper", "gizmo"],
    message: "",
  });

  const [newAwakenings] = useState({
    title: "new-awakenings",
    guides: ["elric", "serafine", "slim"],
    message: "",
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

      <div className="front-page wrapper">
        <NewHeroes data={newHeroes} />
        <NewAwakenings data={newAwakenings} />
        <AllGuides data={allGuides} />
      </div>
    </>
  );
};

export default FrontPage;
