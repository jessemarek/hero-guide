import React from 'react'
import { returnStars } from '../../../utils/index'

const VikingHelmet = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/viking-helmet.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(3, 'enchant')}
                <p>Max Health 450 <span className="grn-txt">+351</span></p><p>Physical Armor 15 <span className="grn-txt">+12</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/warrior's-gloves.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/crimson-staff.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/mending-pearl.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/savage-dagger.png" width="36" height="36" alt="equipment icon" /><p>Level 34 Required</p>
            </div>
        </div>
    )
}

export default VikingHelmet