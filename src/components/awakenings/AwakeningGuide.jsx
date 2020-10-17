import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import LoadingSpinner from "../LoadingSpinner";
import AwakeningQuest from "./AwakeningQuest";

const AwakeningGuide = () => {
  const { hero } = useParams();

  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/heroes/${hero}`)
      .then((res) => {
        console.log(res.data);
        setHeroData(res.data);
      })
      .catch((err) => console.log(err.response));
  }, [hero]);

  return (
    <>
      {heroData ? (
        <div className="wrapper">
          <AwakeningQuest
            name={heroData.hero_info.name}
            awakening={heroData.awakening}
          />
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default AwakeningGuide;
