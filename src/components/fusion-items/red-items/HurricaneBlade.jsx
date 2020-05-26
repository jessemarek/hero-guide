import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const HurricaneBlade = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/hurricane-blade.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(7)}
                <p>Max Health 800 <span className="grn-txt">+721</span></p><p>Physical Attack 150 <span className="grn-txt">+136</span></p><p>Physical Pierce Rating 90 <span className="grn-txt">+84</span></p><p>Physical Hit Bonus 40 <span className="grn-txt">+35</span></p><p>Control Time Reduction 15 <span className="grn-txt">+14</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/blade-of-illusion.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/jupiter's-hammer.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bandit's-dagger.png" width="36" height="36" alt="equipment icon" /><p>Level 99 Required</p>
            </div>
        </div>
    )
}

export default HurricaneBlade