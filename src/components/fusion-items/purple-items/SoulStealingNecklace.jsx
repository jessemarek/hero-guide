import React from 'react'
import { returnStars } from '../../../utils/index'

const SoulStealingNecklace = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/soul-stealing-necklace.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Armor 35 <span className="grn-txt">+25</span></p><p>Lifesteal 50 <span className="grn-txt">+40</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/demonic-longsword.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/skull-bonnet.png" width="36" height="36" alt="equipment icon" /><br /><img src="/assets/images/icons/equipment/casket-of-time.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bloody-hatchet.png" width="36" height="36" alt="equipment icon" /><p>Level 52 Required</p>
            </div>
        </div>
    )
}

export default SoulStealingNecklace