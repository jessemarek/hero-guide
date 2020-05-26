import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const DoomsdayBlade = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/doomsday-blade.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Attack 138 <span className="grn-txt">+115</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/ancient-royal-sword.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/golden-mallet.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/golden-mallet.png" width="36" height="36" alt="equipment icon" /><p>Level 68 Required</p>
            </div>
        </div>
    )
}

export default DoomsdayBlade