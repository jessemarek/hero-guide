import React from 'react'
import { returnStars } from '../../../utils/index'

const AngelsWings = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/angel's-wings.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Armor 40 <span className="grn-txt">+30</span></p><p>Magic Armor 80 <span className="grn-txt">+60</span></p><p>Dodge Rating 80 <span className="grn-txt">+60</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/healing-stone.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/stealth-cape.png" width="36" height="36" alt="equipment icon" /><p>Level 84 Required</p>
            </div>
        </div>
    )
}

export default AngelsWings