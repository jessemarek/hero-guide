import React from 'react'
import { returnStars } from '../../../utils/index'

const GhostlyMantle = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/ghostly-mantle.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Magic Armor 110 <span className="grn-txt">+65</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/ghostly-mantle-fragment.png" width="36" height="36" alt="equipment icon" /> x 40<p>Level 63 Required</p>
            </div>
        </div>
    )
}

export default GhostlyMantle