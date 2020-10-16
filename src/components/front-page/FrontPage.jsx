import React, { useState } from "react";
import NewHeroes from "./NewHeroes";
import NewAwakenings from "./NewAwakenings";
import AllGuides from "./AllGuides";

const FrontPage = () => {
  const [newHeroes] = useState({
    title: "new-heroes",
    guides: ["mog", "morfir", "kasar"],
    message: "*Updated: 22 October 2017",
  });

  const [newAwakenings] = useState({
    title: "new-awakenings",
    guides: ["alice", "morfir", "kasar"],
    message: "New Feature Coming Soon...",
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
