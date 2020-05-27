import React from 'react'
import { returnStars } from '../../../utils/index'

const Thunderbolt = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/thunderbolt.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Magic Attack 100 <span className="grn-txt">+75</span></p><p>Magic Pierce Rating 100 <span className="grn-txt">+75</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/shuriken.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/crystal-staff.png" width="36" height="36" alt="equipment icon" /><p>Level 85 Required</p>
            </div>
        </div>
    )
}

export default Thunderbolt