import React from 'react'
import { returnStars } from '../../../utils/index'

const RunicEulogy = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/runic-eulogy.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(3, 'enchant')}
                <p>Magic Attack 63 <span className="grn-txt">+36</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/runic-eulogy-fragment.png" width="36" height="36" alt="equipment icon" /> x 20<p>Level 50 Required</p>
            </div>
        </div>
    )
}

export default RunicEulogy