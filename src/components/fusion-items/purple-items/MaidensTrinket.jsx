import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const MaidensTrinket = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/maiden's-trinket.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 600 <span className="grn-txt">+410</span></p><p>Magic Armor 120 <span className="grn-txt">+80</span></p><p>Health Recovery 600 <span className="grn-txt">+410</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/ghostly-mantle.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/natural-remedy.png" width="36" height="36" alt="equipment icon" /><p>Level 78 Required</p>
            </div>
        </div>
    )
}

export default MaidensTrinket