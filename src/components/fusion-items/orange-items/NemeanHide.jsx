import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const NemeanHide = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/nemean-hide.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 2000 <span className="grn-txt">+1515</span></p><p>Physical Armor 110 <span className="grn-txt">+?</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/nemean-hide-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 85 Required</p>
            </div>
        </div>
    )
}

export default NemeanHide