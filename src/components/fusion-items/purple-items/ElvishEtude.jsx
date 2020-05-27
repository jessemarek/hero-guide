import React from 'react'
import { returnStars } from '../../../utils/index'

const ElvishEtude = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/elvish-etude.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 600 <span className="grn-txt">+365</span></p><p>Magic Armor 60 <span className="grn-txt">+35</span></p><p>Health Recovery 600 <span className="grn-txt">+365</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/soothsayer-handwraps.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/ritual-blade.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/hefty-war-axe.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/giant's-girdle.png" width="36" height="36" alt="equipment icon" /><p>Level 63 Required</p>
            </div>
        </div>
    )
}

export default ElvishEtude