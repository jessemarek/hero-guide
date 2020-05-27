import React from 'react'
import { returnStars } from '../../../utils/index'

const PriestlyScepter = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/priestly-scepter.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 1400 <span className="grn-txt">+900</span></p><p>Magic Attack 120 <span className="grn-txt">+75</span></p><p>Magic Pierce Rating 80 <span className="grn-txt">+50</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/staff-of-illumination.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/scepter-of-truth.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/torch-of-destruction.png" width="36" height="36" alt="equipment icon" /><p>Level 93 Required</p>
            </div>
        </div>
    )
}

export default PriestlyScepter