import React from 'react'
import { returnStars } from '../../../utils/index'

const ChippedBlade = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/chipped-blade.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(3, 'enchant')}
                <p>Physical Crit Rating 63 <span className="grn-txt">+36</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/hefty-war-axe.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bloody-hatchet.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/demonic-longsword.png" width="36" height="36" alt="equipment icon" /><p>Level 48 Required</p>
            </div>
        </div>
    )
}

export default ChippedBlade