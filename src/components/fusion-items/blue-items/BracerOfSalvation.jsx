import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const BracerOfSalvation = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/bracer-of-salvation.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(3)}
                <p>Healing Bonus 9% <span className="grn-txt">+6%</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/strand-of-rejuvenation.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bloody-hatchet.png" width="36" height="36" alt="equipment icon" /><p>Level 42 Required</p>
            </div>
        </div>
    )
}

export default BracerOfSalvation