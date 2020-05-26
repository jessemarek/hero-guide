import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const GaiasCutlass = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/gaia's-cutlass.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Attack 100 <span className="grn-txt">+75</span></p><p>Physical Crit Rating 20 <span className="grn-txt">+15</span></p><p>Physical Pierce Rating 80 <span className="grn-txt">+60</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/spartan-dagger.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/scorching-spear.png" width="36" height="36" alt="equipment icon" /><p>Level 84 Required</p>
            </div>
        </div>
    )
}

export default GaiasCutlass