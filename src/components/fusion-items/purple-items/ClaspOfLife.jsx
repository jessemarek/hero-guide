import React from 'react'
import { returnStars } from '../../../utils/index'

const ClaspOfLife = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/clasp-of-life.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 1275 <span className="grn-txt">+1000</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/clasp-of-life-fragment.png" width="36" height="36" alt="equipment icon" /> x 30<p>Level 52 Required</p>
            </div>
        </div>
    )
}

export default ClaspOfLife