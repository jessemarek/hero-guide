import React from 'react'
import { returnStars } from '../../../utils/index'

const ShadowSlayer = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/shadow-slayer.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 1600 <span className="grn-txt">+1030</span></p><p>Physical Attack 110 <span className="grn-txt">+70</span></p><p>Physical Pierce Rating 80 <span className="grn-txt">+50</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/commander's-blade.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bandit's-dagger.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/titanic-axe.png" width="36" height="36" alt="equipment icon" /><p>Level 93 Required</p>
            </div>
        </div>
    )
}

export default ShadowSlayer