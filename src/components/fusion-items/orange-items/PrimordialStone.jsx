import React from 'react'
import { returnStars } from '../../../utils/index'

const PrimordialStone = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/primordial-stone.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Magic Attack 120 <span className="grn-txt">+75</span></p><p>Magic Armor 60 <span className="grn-txt">+40</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/primordial-stone-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 90 Required</p>
            </div>
        </div>
    )
}

export default PrimordialStone