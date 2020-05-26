import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const JupitersHammer = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/jupiter's-hammer.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Magic Armor 110 <span className="grn-txt">+70</span></p><p>Physical Crit Rating 110 <span className="grn-txt">+70</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/jupiter's-hammer-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 96 Required</p>
            </div>
        </div>
    )
}

export default JupitersHammer