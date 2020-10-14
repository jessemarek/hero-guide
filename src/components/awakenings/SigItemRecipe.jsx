import React from 'react'

//Utils
import { formatText, returnStars } from '../../utils/index'

const SigItemRecipe = props => {

    const {
        quest_1,
        sig_item,
        sig_stats,
        forge_bonus

    } = props

    return (
        <div className="sig-item-recipe">
            <div id="sig-item" className="item-icon">
                <img src={`/assets/images/icons/signature-items/signature/${sig_item}.png`} alt="item icon" />
                <p>{formatText(sig_item)}</p>
                <div className="tooltip">
                    <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                    {returnStars(7, 'enchant')}
                    {
                        sig_stats.map((s, idx) => <p key={idx}>{`${formatText(s.stat)} ${s.value} `}<span className="grn-txt">{`+ ${s.value}`}</span></p>)
                    }
                    <h3>Forge Bonus Stats</h3>
                    <p>{`${formatText(forge_bonus[0].stat)} ≥ 40 ${formatText(forge_bonus[0].bonus)}`}<span className="grn-txt">{` + ${forge_bonus[0].value}`}</span></p>
                    <p>{`${formatText(forge_bonus[1].stat)} ≥ 100 ${formatText(forge_bonus[1].bonus)}`}<span className="grn-txt">{` + ${forge_bonus[1].value}`}</span></p>
                    <p>{`${formatText(forge_bonus[2].stat)} ≥ 200 ${formatText(forge_bonus[2].bonus)}`}<span className="grn-txt">{` + ${forge_bonus[2].value}`}</span></p>
                </div>
            </div>
            <div id="aw-item1" className="item-icon">
                <img src={`/assets/images/icons/signature-items/quest1/${quest_1.fragment}.png`} alt="item icon" />
                <p>{formatText(quest_1.fragment)}</p>
            </div>

            <div id="aw-item2" className="item-icon">
                <img src={`/assets/images/icons/equipment/${quest_1.recipe[0]}.png`} alt="item icon" />
                <p>{formatText(quest_1.recipe[0])}</p>
            </div>

            <div id="aw-item3" className="item-icon">
                <img src={`/assets/images/icons/equipment/${quest_1.recipe[1]}.png`} alt="item icon" />
                <p>{formatText(quest_1.recipe[1])}</p>
            </div>

            <div id="aw-item4" className="item-icon">
                <img src={`/assets/images/icons/equipment/${quest_1.recipe[2]}.png`} alt="item icon" />
                <p>{formatText(quest_1.recipe[2])}</p>
            </div>
        </div>
    )
}

export default SigItemRecipe