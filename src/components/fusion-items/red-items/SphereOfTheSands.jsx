import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const SphereOfTheSands = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/sphere-of-the-sands.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(7)}
                <p>Max Health 1800 <span className="grn-txt">+1617</span></p><p>Magic Armor 150 <span className="grn-txt">+133</span></p><p>Ability Level Bonus +1</p><p>Silence Resistance 10% <span className="grn-txt">+7%</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/champion's-cloak.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/primordial-stone.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/staff-of-illumination.png" width="36" height="36" alt="equipment icon" /><p>Level 98 Required</p>
            </div>
        </div>
    )
}

export default SphereOfTheSands