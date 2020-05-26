import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const BulwarkOfVitality = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/bulwark-of-vitality.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(3)}
                <p>Max Health 950 <span className="grn-txt">+450</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/bulwark-of-vitality-fragment.png" width="36" height="36" alt="equipment icon" /> x 20<p>Level 51 Required</p>
            </div>
        </div>
    )
}

export default BulwarkOfVitality