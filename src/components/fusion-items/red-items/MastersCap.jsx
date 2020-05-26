import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const MastersCap = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/master's-cap.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(7)}
                <p>Max Health 2800 <span className="grn-txt">+2520</span></p><p>Physical Armor 90 <span className="grn-txt">+84</span></p><p>Dodge Rating 60 <span className="grn-txt">+56</span></p><p>Control Time Reduction 15 <span className="grn-txt">+14</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/stormrider-armor.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/commander's-blade.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/kretonian-talisman.png" width="36" height="36" alt="equipment icon" /><p>Level 100 Required</p>
            </div>
        </div>
    )
}

export default MastersCap