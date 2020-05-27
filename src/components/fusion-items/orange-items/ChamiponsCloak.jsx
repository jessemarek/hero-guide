import React from 'react'
import { returnStars } from '../../../utils/index'

const ChampionsCloak = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/champion's-cloak.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 1650 <span className="grn-txt">+1060</span></p><p>Magic Armor 55 <span className="grn-txt">+35</span></p><p>Health Recovery 1700 <span className="grn-txt">+1095</span></p><p>Energy Recovery 110 <span className="grn-txt">+65</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/champion's-cloak-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 96 Required</p>
            </div>
        </div>
    )
}

export default ChampionsCloak