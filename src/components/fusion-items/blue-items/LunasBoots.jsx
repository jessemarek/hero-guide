import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const LunasBoots = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/luna's-boots.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(3)}
                <p>Magic Armor 63 <span className="grn-txt">+36</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/black-dragon's-tailbone.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/thorned-pauldrons.png" width="36" height="36" alt="equipment icon" /><p>Level 45 Required</p>
            </div>
        </div>
    )
}

export default LunasBoots