import React from 'react'
import { returnStars } from '../../../utils/index'

const NaturesPower = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/nature's-power.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Healing Bonus 28% <span className="grn-txt">+25%</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/natural-remedy.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/soothsayer-handwraps.png" width="36" height="36" alt="equipment icon" /><p>Level 71 Required</p>
            </div>
        </div>
    )
}

export default NaturesPower