import React from 'react'
import { returnStars } from '../../../utils/index'

const AthenasBlessing = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/athena's-blessing.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Magic Attack 50 <span className="grn-txt">+40</span></p><p>Physical Armor 88 <span className="grn-txt">+75</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/ghostly-mantle.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/runic-eulogy.png" width="36" height="36" alt="equipment icon" /><p>Level 72 Required</p>
            </div>
        </div>
    )
}

export default AthenasBlessing