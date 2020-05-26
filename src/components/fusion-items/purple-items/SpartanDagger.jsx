import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const SpartanDagger = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/spartan-dagger.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Attack 170 <span className="grn-txt">+115</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/spartan-dagger-fragment.png" width="36" height="36" alt="equipment icon" /> x 60<p>Level 78 Required</p>
            </div>
        </div>
    )
}

export default SpartanDagger