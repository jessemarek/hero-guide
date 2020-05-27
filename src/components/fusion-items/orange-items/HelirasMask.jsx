import React from 'react'
import { returnStars } from '../../../utils/index'

const HelirasMask = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/helira's-mask.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 125 <span className="grn-txt">+80</span></p><p>Physical Armor 70 <span className="grn-txt">+45</span></p><p>Physical Hit Bonus 60 <span className="grn-txt">+40</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/kretonian-talisman.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/mystic-dragonscale.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/blade-of-chaos.png" width="36" height="36" alt="equipment icon" /><p>Level 91 Required</p>
            </div>
        </div>
    )
}

export default HelirasMask