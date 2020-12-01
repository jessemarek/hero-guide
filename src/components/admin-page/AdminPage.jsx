import React, { useState } from "react";
import TabButtons from "./TabButtons";
import HeroInfoForm from "./HeroInfoForm";
import StatsForm from "./StatsForm";
import AbilitiesForm from "./AbilitiesForm";
import FusionsForm from "./FusionsForm";
import KeyItemsForm from "./KeyItemsForm";
import AcademyTreesForm from "./AcademyTreesForm";
import AwakeningQuestForm from "./AwakeningQuestForm";

const formList = {
  "hero-info": <HeroInfoForm />,
  stats: <StatsForm />,
  abilities: <AbilitiesForm />,
  fusions: <FusionsForm />,
  "key-items": <KeyItemsForm />,
  "academy-trees": <AcademyTreesForm />,
  "awakening-quest": <AwakeningQuestForm />,
};

const AdminPage = () => {
  const [activeForm, setActiveForm] = useState("hero-info");
  return (
    <>
      <div className="wrapper">
        <header>
          <TabButtons setActiveForm={setActiveForm} />
        </header>
        <section className="admin guide-section">
          {formList[activeForm]}
        </section>
      </div>
    </>
  );
};

export default AdminPage;
