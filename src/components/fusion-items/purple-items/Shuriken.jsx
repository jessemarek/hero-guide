import React from 'react'
import { returnStars } from '../../../utils/index'

const Shuriken = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/shuriken.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 300 <span className="grn-txt">+205</span></p><p>Magic Attack 150 <span className="grn-txt">+105</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/shuriken-fragment.png" width="36" height="36" alt="equipment icon" /> x 60<p>Level 76 Required</p>
            </div>
        </div>
    )
}

export default Shuriken