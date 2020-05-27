import React from 'react'
import { returnStars } from '../../../utils/index'

const DoomsdayBlade = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/doomsday-blade.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 138 <span className="grn-txt">+115</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/ancient-royal-sword.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/golden-mallet.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/golden-mallet.png" width="36" height="36" alt="equipment icon" /><p>Level 68 Required</p>
            </div>
        </div>
    )
}

export default DoomsdayBlade