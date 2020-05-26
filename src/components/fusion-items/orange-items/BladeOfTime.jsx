import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const BladeOfTime = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/blade-of-time.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Armor 60 <span className="grn-txt">+45</span></p><p>Physical Crit Rating 160 <span className="grn-txt">+120</span></p><p>Lifesteal 20 <span className="grn-txt">+15</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/ironbark-warbow.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/carnage-mallet.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/berserker's-claymore.png" width="36" height="36" alt="equipment icon" /><p>Level 86 Required</p>
            </div>
        </div>
    )
}

export default BladeOfTime