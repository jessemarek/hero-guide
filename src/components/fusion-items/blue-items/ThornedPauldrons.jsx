import React from 'react'
import { returnStars } from '../../../utils/index'

const ThornedPauldrons = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/thorned-pauldrons.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(3, 'enchant')}
                <p>Physical Armor 45 <span className="grn-txt">+36</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/wizardry-codex.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/meteor-flail.png" width="36" height="36" alt="equipment icon" /><p>Level 35 Required</p>
            </div>
        </div>
    )
}

export default ThornedPauldrons