import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const MidnightDream = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/midnight-dream.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 750 <span className="grn-txt">+690</span></p><p>Magic Attack 150 <span className="grn-txt">+140</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/shuriken.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/phantom-jar.png" width="36" height="36" alt="equipment icon" /><p>Level 80 Required</p>
            </div>
        </div>
    )
}

export default MidnightDream