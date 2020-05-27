import React from 'react'
import { returnStars } from '../../../utils/index'

const CarnageMallet = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/carnage-mallet.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Crit Rating 85 <span className="grn-txt">+65</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/mask-of-sacrifice.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/demonic-longsword.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/dwarvish-chestplate.png" width="36" height="36" alt="equipment icon" /><p>Level 55 Required</p>
            </div>
        </div>
    )
}

export default CarnageMallet