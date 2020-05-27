import React from 'react'
import { returnStars } from '../../../utils/index'

const FireHardenedSteel = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/fire-hardened-steel.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Armor 120 <span className="grn-txt">+90</span></p><p>Magic Armor 120 <span className="grn-txt">+90</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/doomsday-armor.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/runic-crystal-ball.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/destruction.png" width="36" height="36" alt="equipment icon" /><p>Level 88 Required</p>
            </div>
        </div>
    )
}

export default FireHardenedSteel