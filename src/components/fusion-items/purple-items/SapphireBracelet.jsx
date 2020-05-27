import React from 'react'
import { returnStars } from '../../../utils/index'

const SapphireBracelet = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/sapphire-bracelet.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Armor 78 <span className="grn-txt">+60</span></p><p>Health Recovery 510 <span className="grn-txt">+395</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/sapphire-bracelet-fragment.png" width="36" height="36" alt="equipment icon" /> x 30<p>Level 54 Required</p>
            </div>
        </div>
    )
}

export default SapphireBracelet