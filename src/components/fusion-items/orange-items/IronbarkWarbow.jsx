import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const IronbarkWarbow = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/ironbark-warbow.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Attack 80 <span className="grn-txt">+60</span></p><p>Physical Crit Rating 120 <span className="grn-txt">+?</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/ironbark-warbow-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 81 Required</p>
            </div>
        </div>
    )
}

export default IronbarkWarbow