import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const RunicEulogy = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/runic-eulogy.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(3)}
                <p>Magic Attack 63 <span className="grn-txt">+36</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/runic-eulogy-fragment.png" width="36" height="36" alt="equipment icon" /> x 20<p>Level 50 Required</p>
            </div>
        </div>
    )
}

export default RunicEulogy