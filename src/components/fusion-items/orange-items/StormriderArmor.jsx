import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const StormriderArmor = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/stormrider-armor.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 2400 <span className="grn-txt">+1545</span></p><p>Physical Armor 55 <span className="grn-txt">+35</span></p><p>Energy Efficiency 5% <span className="grn-txt">+5%</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/stormrider-armor-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 96 Required</p>
            </div>
        </div>
    )
}

export default StormriderArmor