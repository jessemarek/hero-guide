import React from 'react'
import { returnStars } from '../../../utils/index'

const ArtOfWar = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/art-of-war.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Magic Attack 92 <span className="grn-txt">+60</span></p><p>Magic Armor 65 <span className="grn-txt">+45</span></p><p>Magic Crit Rating 15 <span className="grn-txt">+10</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/sage-wand.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/sage-wand.png" width="36" height="36" alt="equipment icon" /><p>Level 80 Required</p>
            </div>
        </div>
    )
}

export default ArtOfWar