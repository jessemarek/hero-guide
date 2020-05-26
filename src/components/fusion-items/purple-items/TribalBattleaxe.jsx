import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const TribalBattleaxe = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/tribal-battleaxe.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Attack 30 <span className="grn-txt">+20</span></p><p>Physical Armor 55 <span className="grn-txt">+45</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/golden-mallet.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/thorned-pauldrons.png" width="36" height="36" alt="equipment icon" /><p>Level 58 Required</p>
            </div>
        </div>
    )
}

export default TribalBattleaxe