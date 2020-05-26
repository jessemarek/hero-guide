import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const MaskOfSacrifice = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/mask-of-sacrifice.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(3)}
                <p>Physical Crit Rating 45 <span className="grn-txt">+36</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/mask-of-sacrifice-fragment.png" width="36" height="36" alt="equipment icon" /> x 15<p>Level 32 Required</p>
            </div>
        </div>
    )
}

export default MaskOfSacrifice