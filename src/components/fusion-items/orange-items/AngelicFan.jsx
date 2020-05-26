import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const AngelicFan = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/angelic-fan.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Magic Attack 60 <span className="grn-txt">+40</span></p><p>Magic Crit Rating 120 <span className="grn-txt">+75</span></p><p>Magic Pierce Rating 70 <span className="grn-txt">+45</span></p><p>Silence Resistance 5% <span className="grn-txt">+5%</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/scepter-of-truth.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/torch-of-destruction.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/shuriken.png" width="36" height="36" alt="equipment icon" /><p>Level 91 Required</p>
            </div>
        </div>
    )
}

export default AngelicFan