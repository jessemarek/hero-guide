import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const CapOfSouls = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/cap-of-souls.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 1850 <span className="grn-txt">+1575</span></p><p>Health Recovery 828 <span className="grn-txt">+705</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/natural-remedy.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bulwark-of-vitality.png" width="36" height="36" alt="equipment icon" /><p>Level 66 Required</p>
            </div>
        </div>
    )
}

export default CapOfSouls