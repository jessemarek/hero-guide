import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const OraclesRobe = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/oracle's-robe.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Armor 80 <span className="grn-txt">+50</span></p><p>Magic Crit Rating 150 <span className="grn-txt">+95</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/oracle's-robe-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 95 Required</p>
            </div>
        </div>
    )
}

export default OraclesRobe