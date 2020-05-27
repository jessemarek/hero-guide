import React from 'react'
import { returnStars } from '../../../utils/index'

const MysticDragonscale = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/mystic-dragonscale.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 1200 <span className="grn-txt">+915</span></p><p>Physical Attack 60 <span className="grn-txt">+45</span></p><p>Physical Armor 60 <span className="grn-txt">+45</span></p><p>Magic Armor 40 <span className="grn-txt">+30</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/mystic-dragonscale-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 87 Required</p>
            </div>
        </div>
    )
}

export default MysticDragonscale