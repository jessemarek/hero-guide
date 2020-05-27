import React from 'react'
import { returnStars } from '../../../utils/index'

const GoblinsScimitar = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/goblin's-scimitar.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 60 <span className="grn-txt">+40</span></p><p>Physical Armor 60 <span className="grn-txt">+40</span></p><p>Magic Armor 30 <span className="grn-txt">+25</span></p><p>Lifesteal 20 <span className="grn-txt">+15</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/goblet-of-the-ancients.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/banshee-essence.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/skull-bonnet.png" width="36" height="36" alt="equipment icon" /><p>Level 77 Required</p>
            </div>
        </div>
    )
}

export default GoblinsScimitar