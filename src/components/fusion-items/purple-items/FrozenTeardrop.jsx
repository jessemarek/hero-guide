import React from 'react'
import { returnStars } from '../../../utils/index'

const FrozenTeardrop = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/frozen-teardrop.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 600 <span className="grn-txt">+410</span></p><p>Magic Attack 130 <span className="grn-txt">+90</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/athena's-blessing.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/ancient-rune.png" width="36" height="36" alt="equipment icon" /><p>Level 80 Required</p>
            </div>
        </div>
    )
}

export default FrozenTeardrop