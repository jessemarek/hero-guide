import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const HeavenlyAmulet = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/heavenly-amulet.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 1300 <span className="grn-txt">+1110</span></p><p>Dodge Rating 50 <span className="grn-txt">+45</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/natural-remedy.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/stealth-cape.png" width="36" height="36" alt="equipment icon" /><p>Level 68 Required</p>
            </div>
        </div>
    )
}

export default HeavenlyAmulet