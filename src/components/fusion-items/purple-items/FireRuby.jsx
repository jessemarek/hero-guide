import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const FireRuby = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/fire-ruby.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 1000 <span className="grn-txt">+600</span></p><p>Magic Armor 44 <span className="grn-txt">+25</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/gem-of-fortitude.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/mask-of-sacrifice.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/scepter-of-prophecy.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bracer-of-salvation.png" width="36" height="36" alt="equipment icon" /><p>Level 59 Required</p>
            </div>
        </div>
    )
}

export default FireRuby