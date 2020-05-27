import React from 'react'
import { returnStars } from '../../../utils/index'

const EyeOfDeath = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/eye-of-death.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 38 <span className="grn-txt">+30</span></p><p>Physical Hit Bonus 100 <span className="grn-txt">+80</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/heavy-club.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/heavy-club.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/vampiric-dagger.png" width="36" height="36" alt="equipment icon" /><p>Level 69 Required</p>
            </div>
        </div>
    )
}

export default EyeOfDeath