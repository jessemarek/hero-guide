import React from 'react'
import { returnStars } from '../../../utils/index'

const AtlanteanBattleaxe = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/atlantean-battleaxe.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 100 <span className="grn-txt">+65</span></p><p>Physical Crit Rating 50 <span className="grn-txt">+30</span></p><p>Physical Pierce Rating 100 <span className="grn-txt">+65</span></p><p>Control Time Reduction 5 <span className="grn-txt">+5</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/bandit's-dagger.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/ironbark-warbow.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/blade-of-chaos.png" width="36" height="36" alt="equipment icon" /><p>Level 91 Required</p>
            </div>
        </div>
    )
}

export default AtlanteanBattleaxe