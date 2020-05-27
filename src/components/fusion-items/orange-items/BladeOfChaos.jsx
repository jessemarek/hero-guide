import React from 'react'
import { returnStars } from '../../../utils/index'

const BladeOfChaos = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/blade-of-chaos.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 120 <span className="grn-txt">+?</span></p><p>Physical Crit Rating 35 <span className="grn-txt">+?</span></p><p>Physical Pierce Rating 45 <span className="grn-txt">+35</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/blade-of-chaos-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 82 Required</p>
            </div>
        </div>
    )
}

export default BladeOfChaos