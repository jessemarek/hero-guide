import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const CosmicShield = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/cosmic-shield.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 1200 <span className="grn-txt">+915</span></p><p>Physical Armor 80 <span className="grn-txt">+60</span></p><p>Magic Armor 25 <span className="grn-txt">+20</span></p><p>Health Recovery 900 <span className="grn-txt">+?</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/healing-stone.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bulwark-of-vitality.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/meteor-flail.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bloody-hatchet.png" width="36" height="36" alt="equipment icon" /><p>Level 83 Required</p>
            </div>
        </div>
    )
}

export default CosmicShield