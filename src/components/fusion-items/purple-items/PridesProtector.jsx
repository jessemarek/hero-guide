import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const PridesProtector = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/pride's-protector.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Attack 85 <span className="grn-txt">+100</span></p><p>Ability Level Bonus +2</p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/legendary-gemstone.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/destruction.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/hefty-war-axe.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/longsword-of-the-undead.png" width="36" height="36" alt="equipment icon" /><p>Level 72 Required</p>
            </div>
        </div>
    )
}

export default PridesProtector