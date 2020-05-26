import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const CommandersBlade = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/commander's-blade.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 1000 <span className="grn-txt">+640</span></p><p>Physical Attack 115 <span className="grn-txt">+75</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/commander's-blade-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 90 Required</p>
            </div>
        </div>
    )
}

export default CommandersBlade