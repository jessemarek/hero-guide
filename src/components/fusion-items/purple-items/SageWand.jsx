import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const SageWand = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/sage-wand.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Magic Attack 110 <span className="grn-txt">+65</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/sage-wand-fragment.png" width="36" height="36" alt="equipment icon" /> x 40<p>Level 60 Required</p>
            </div>
        </div>
    )
}

export default SageWand