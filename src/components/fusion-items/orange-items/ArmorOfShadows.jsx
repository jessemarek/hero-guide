import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const ArmorOfShadows = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/armor-of-shadows.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 1000 <span className="grn-txt">+760</span></p><p>Physical Armor 85 <span className="grn-txt">+65</span></p><p>Dodge Rating 90 <span className="grn-txt">+70</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/angel's-wings.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/stealth-cape.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/amulet-of-dexterity.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/light-brigandine.png" width="36" height="36" alt="equipment icon" /><p>Level 89 Required</p>
            </div>
        </div>
    )
}

export default ArmorOfShadows