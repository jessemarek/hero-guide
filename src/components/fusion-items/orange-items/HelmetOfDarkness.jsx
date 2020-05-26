import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const HelmetOfDarkness = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/helmet-of-darkness.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Magic Attack 100 <span className="grn-txt">+75</span></p><p>Physical Armor 60 <span className="grn-txt">+45</span></p><p>Magic Armor 80 <span className="grn-txt">+60</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/helmet-of-darkness-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 86 Required</p>
            </div>
        </div>
    )
}

export default HelmetOfDarkness