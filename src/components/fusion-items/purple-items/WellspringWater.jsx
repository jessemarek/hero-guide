import React from 'react'
import { returnStars } from '../../../utils/index'

const WellspringWater = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/wellspring-water.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 300 <span className="grn-txt">+140</span></p><p>Magic Attack 84 <span className="grn-txt">+40</span></p><p>Energy Recovery 150 <span className="grn-txt">+120</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/wellspring-water-fragment.png" width="36" height="36" alt="equipment icon" /> x 40<p>Level 61 Required</p>
            </div>
        </div>
    )
}

export default WellspringWater