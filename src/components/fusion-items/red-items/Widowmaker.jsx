import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const Widowmaker = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/widowmaker.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(7)}
                <p>Max Health 1500 <span className="grn-txt">+1351</span></p><p>Physical Attack 175 <span className="grn-txt">+161</span></p><p>Lifesteal 30 <span className="grn-txt">+28</span></p><p>Physical Hit Bonus 20 <span className="grn-txt">+21</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/blade-of-illusion.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/commander's-blade.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bandit's-dagger.png" width="36" height="36" alt="equipment icon" /><p>Level 97 Required</p>
            </div>
        </div>
    )
}

export default Widowmaker