import React from 'react'
import { returnStars } from '../../../utils/index'

const TransformingMask = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/transforming-mask.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 2100 <span className="grn-txt">+1350</span></p><p>Magic Attack 70 <span className="grn-txt">+45</span></p><p>Magic Armor 65 <span className="grn-txt">+40</span></p><p>Silence Resistance 10% <span className="grn-txt">+5%</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/staff-of-illumination.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/primordial-stone.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/ethereal-cloak.png" width="36" height="36" alt="equipment icon" /><p>Level 94 Required</p>
            </div>
        </div>
    )
}

export default TransformingMask