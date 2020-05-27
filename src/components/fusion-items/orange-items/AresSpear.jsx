import React from 'react'
import { returnStars } from '../../../utils/index'

const AresSpear = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/ares'-spear.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 90 <span className="grn-txt">+70</span></p><p>Physical Pierce Rating 50 <span className="grn-txt">+40</span></p><p>Physical Hit Bonus 100 <span className="grn-txt">+75</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/spartan-dagger.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/destruction.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/charger-boots.png" width="36" height="36" alt="equipment icon" /><p>Level 88 Required</p>
            </div>
        </div>
    )
}

export default AresSpear