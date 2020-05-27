import React from 'react'
import { returnStars } from '../../../utils/index'

const VictorysScepter = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/victory's-scepter.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Magic Attack 140 <span className="grn-txt">+105</span></p><p>Magic Armor 40 <span className="grn-txt">+30</span></p><p>Magic Crit Rating 60 <span className="grn-txt">+45</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/torch-of-destruction.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/runic-eulogy.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/skull-bonnet.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/warrior's-gloves.png" width="36" height="36" alt="equipment icon" /><p>Level 85 Required</p>
            </div>
        </div>
    )
}

export default VictorysScepter