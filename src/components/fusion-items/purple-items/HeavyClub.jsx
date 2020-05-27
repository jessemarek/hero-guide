import React from 'react'
import { returnStars } from '../../../utils/index'

const HeavyClub = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/heavy-club.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 30 <span className="grn-txt">+25</span></p><p>Physical Crit Rating 6 <span className="grn-txt">+5</span></p><p>Physical Hit Bonus 50 <span className="grn-txt">+40</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/mask-of-sacrifice.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/cloud-walkers.png" width="36" height="36" alt="equipment icon" /><p>Level 57 Required</p>
            </div>
        </div>
    )
}

export default HeavyClub