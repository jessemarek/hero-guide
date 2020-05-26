import React from 'react'

//Utils
import { formatText } from '../../utils/index'

const QuestTwo = ({ name, quest2 }) => {

    return (
        <div id="aw-quest2" className="textbox">
            <h4>{`2nd Quest - ${formatText(quest2.trial_name)}`}</h4>
            <div id="quest-icon2" className="item-icon">
                <img src="/assets/images/icons/chapter-icons/dojo/tidal-temple.png" width="86" height="86" alt="" />
            </div>
            <p>{`Complete ${quest2.completions} times with ${formatText(name)} in your party`}<br></br>(Extreme+ Difficulty)</p>
        </div>
    )
}

export default QuestTwo