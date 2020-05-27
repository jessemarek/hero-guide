import React from 'react'
import { returnStars } from '../../../utils/index'

const ChargerBoots = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/charger-boots.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(3, 'enchant')}
                <p>Max Health 500 <span className="grn-txt">+276</span></p><p>Physical Attack 20 <span className="grn-txt">+12</span></p><p>Physical Armor 10 <span className="grn-txt">+6</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/charger-boots-fragment.png" width="36" height="36" alt="equipment icon" /> x 20<p>Level 49 Required</p>
            </div>
        </div>
    )
}

export default ChargerBoots