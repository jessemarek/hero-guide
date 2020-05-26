import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const PureJadeChest = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/pure-jade-chest.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(7)}
                <p>Max Health 1300 <span className="grn-txt">+1169</span></p><p>Magic Attack 140 <span className="grn-txt">+126</span></p><p>Magic Crit Rating 100 <span className="grn-txt">+91</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/lost-epic.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/staff-of-illumination.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/scepter-of-truth.png" width="36" height="36" alt="equipment icon" /><p>Level 97 Required</p>
            </div>
        </div>
    )
}

export default PureJadeChest