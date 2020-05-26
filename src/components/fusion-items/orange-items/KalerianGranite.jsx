import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const KalerianGranite = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/kalerian-granite.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Armor 120 <span className="grn-txt">+75</span></p><p>Magic Armor 120 <span className="grn-txt">+75</span></p><p>Dodge Rating 30 <span className="grn-txt">+20</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/kretonian-talisman.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/primordial-stone.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/mystic-dragonscale.png" width="36" height="36" alt="equipment icon" /><p>Level 92 Required</p>
            </div>
        </div>
    )
}

export default KalerianGranite