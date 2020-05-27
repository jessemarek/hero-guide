import React from 'react'
import { returnStars } from '../../../utils/index'

const ScepterOfTruth = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/scepter-of-truth.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Magic Attack 115 <span className="grn-txt">+75</span></p><p>Magic Crit Rating 65 <span className="grn-txt">+40</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/scepter-of-truth-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 90 Required</p>
            </div>
        </div>
    )
}

export default ScepterOfTruth