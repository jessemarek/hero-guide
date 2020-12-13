import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { heroState } from "../../state/heroState";

//Components
import HeroInfo from "./HeroInfo";
import Abilities from "./Abilities";
import FusionItems from "./FusionItems";
import KeyFusionItems from "./KeyFusionItems";
import HeroicAcademyTrees from "./HeroicAcademyTrees";
import AwakeningQuest from "../awakenings/AwakeningQuest";
import LoadingSpinner from "../LoadingSpinner";

//Utils
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const HeroGuide = () => {
  const { hero } = useParams();

  const [heroData, setHeroData] = useRecoilState(heroState);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/heroes/${hero}`)
      .then((res) => {
        setHeroData(res.data);
      })
      .catch((err) => console.log(err.response));

    return () => setHeroData(null);
  }, [hero]);

  return (
    <>
      {heroData ? (
        <div className="wrapper">
          <HeroInfo heroInfo={heroData.hero_info} />
          <Abilities
            hero={heroData.hero_info.name}
            abilities={heroData.abilities}
            skin={heroData.skin}
          />
          <FusionItems
            fusionItems={heroData.fusion_items}
            awakening={heroData.awakening}
          />
          <KeyFusionItems
            keyItems={heroData.key_items}
            heroAwakened={heroData.awakening.awakened}
          />
          <HeroicAcademyTrees trees={heroData.academy_trees} />
          {heroData.awakening.awakened && (
            <AwakeningQuest
              name={heroData.hero_info.name}
              awakening={heroData.awakening}
            />
          )}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default HeroGuide;
