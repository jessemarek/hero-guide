import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const PaladinsChestplate = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/paladin's-chestplate.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(7)}
                <p>Max Health 1950 <span className="grn-txt">+1757</span></p><p>Physical Armor 120 <span className="grn-txt">+105</span></p><p>Magic Armor 120 <span className="grn-txt">+105</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/stormrider-armor.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/champion's-cloak.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/primordial-stone.png" width="36" height="36" alt="equipment icon" /><p>Level 100 Required</p>
            </div>
        </div>
    )
}

export default PaladinsChestplate