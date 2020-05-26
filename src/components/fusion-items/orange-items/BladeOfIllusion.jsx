import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const BladeOfIllusion = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/blade-of-illusion.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Attack 140 <span className="grn-txt">+90</span></p><p>Physical Pierce Rating 80 <span className="grn-txt">+50</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/blade-of-illusion-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 95 Required</p>
            </div>
        </div>
    )
}

export default BladeOfIllusion