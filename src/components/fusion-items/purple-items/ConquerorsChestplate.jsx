import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const ConquerorsChestplate = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/conqueror's-chestplate.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 1250 <span className="grn-txt">+1500</span></p><p>Ability Level Bonus +2</p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/legendary-gemstone.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/natural-remedy.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/bloody-hatchet.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/iron-chainmail.png" width="36" height="36" alt="equipment icon" /><p>Level 73 Required</p>
            </div>
        </div>
    )
}

export default ConquerorsChestplate