import React from 'react'
import { returnStars } from '../../../utils/index'

const BeastlyGuardian = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/beastly-guardian.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 2000 <span className="grn-txt">+1285</span></p><p>Physical Armor 60 <span className="grn-txt">+40</span></p><p>Magic Armor 60 <span className="grn-txt">+40</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/commander's-blade.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/staff-of-illumination.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/ethereal-cloak.png" width="36" height="36" alt="equipment icon" /><p>Level 92 Required</p>
            </div>
        </div>
    )
}

export default BeastlyGuardian