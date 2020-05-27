import React from 'react'
import { returnStars } from '../../../utils/index'

const HealingStone = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/healing-stone.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 2500 <span className="grn-txt">+1750</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/healing-stone-fragment.png" width="36" height="36" alt="equipment icon" /> x 60<p>Level 77 Required</p>
            </div>
        </div>
    )
}

export default HealingStone