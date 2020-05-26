import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const BansheeEssence = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/banshee-essence.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(3)}
                <p>Max Health 600 <span className="grn-txt">+339</span></p><p>Magic Armor 22 <span className="grn-txt">+12</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/bloody-hatchet.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bloody-hatchet.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/wooden-buckler.png" width="36" height="36" alt="equipment icon" /><p>Level 44 Required</p>
            </div>
        </div>
    )
}

export default BansheeEssence