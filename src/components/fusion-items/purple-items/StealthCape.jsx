import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const StealthCape = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/stealth-cape.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Armor 50 <span className="grn-txt">+40</span></p><p>Magic Armor 15 <span className="grn-txt">+10</span></p><p>Dodge Rating 20 <span className="grn-txt">+15</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/stealth-cape-fragment.png" width="36" height="36" alt="equipment icon" /> x 30<p>Level 56 Required</p>
            </div>
        </div>
    )
}

export default StealthCape