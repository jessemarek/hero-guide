import React from 'react'

//Utils
import { formatText } from '../../utils/index'

const QuestOne = ({ sig_item, quest_1 }) => {

    return (
        <div id="aw-quest1" className="textbox">
            <h4>{`1st Quest - Craft Signature Item: ${formatText(sig_item)}`}</h4>
            <div id="quest-icon1" className="item-icon">
                <img src="/assets/images/icons/chapter-icons/campaign/14-empty-handed.png" width="86" height="86" alt="" />
            </div>
            <p>{`Collect 80 fragments of ${formatText(quest_1.fragment)} from`}<br />{`${quest_1.chapter} (Heroic Difficulty)`}</p>
        </div>
    )
}

export default QuestOne