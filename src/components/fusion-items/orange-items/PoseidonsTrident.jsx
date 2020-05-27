import React from 'react'
import { returnStars } from '../../../utils/index'

const PoseidonsTrident = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/poseidon's-trident.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 50 <span className="grn-txt">+40</span></p><p>Physical Crit Rating 50 <span className="grn-txt">+40</span></p><p>Physical Hit Bonus 100 <span className="grn-txt">+75</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/spartan-dagger.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/ancient-royal-sword.png" width="36" height="36" alt="equipment icon" /><p>Level 83 Required</p>
            </div>
        </div>
    )
}

export default PoseidonsTrident