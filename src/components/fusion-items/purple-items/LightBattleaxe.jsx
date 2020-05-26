import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const LightBattleaxe = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/light-battleaxe.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Crit Rating 138 <span className="grn-txt">+115</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/destruction.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/chipped-blade.png" width="36" height="36" alt="equipment icon" /><p>Level 71 Required</p>
            </div>
        </div>
    )
}

export default LightBattleaxe