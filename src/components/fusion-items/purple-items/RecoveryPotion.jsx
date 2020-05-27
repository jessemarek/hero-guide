import React from 'react'
import { returnStars } from '../../../utils/index'

const RecoveryPotion = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/recovery-potion.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 2300 <span className="grn-txt">+1575</span></p><p>Health Recovery 1020 <span className="grn-txt">+700</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/clasp-of-life.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/clasp-of-life.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/sapphire-bracelet.png" width="36" height="36" alt="equipment icon" /><p>Level 78 Required</p>
            </div>
        </div>
    )
}

export default RecoveryPotion