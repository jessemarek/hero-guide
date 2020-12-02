import React from "react";

//Utils
import { formatText, getChapterIconFilename } from "../../utils/index";

const QuestThree = ({ name, quest_3 }) => {
  return (
    <div id="aw-quest3" className="textbox">
      <h4>{`3rd Quest - ${quest_3.chapter}`}</h4>
      <div id="quest-icon3" className="item-icon">
        <img
          src={`/assets/images/icons/chapter-icons/campaign/${getChapterIconFilename(
            quest_3.chapter
          )}.png`}
          width="86"
          height="86"
          alt=""
        />
      </div>
      <p>
        {`Complete the stage with ${formatText(name)} in your party`}
        <br />
        <b>Requirement: </b>
        {quest_3.requirement}
      </p>
    </div>
  );
};

export default QuestThree;
