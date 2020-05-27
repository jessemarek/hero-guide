import React from 'react'
import { returnStars } from '../../../utils/index'

const DarkWizardsFigurine = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/dark-wizard's-figurine.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 1500 <span className="grn-txt">+1030</span></p><p>Physical Armor 20 <span className="grn-txt">+15</span></p><p>Magic Armor 50 <span className="grn-txt">+35</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/scepter-of-the-abyss.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/wellspring-water.png" width="36" height="36" alt="equipment icon" /><p>Level 77 Required</p>
            </div>
        </div>
    )
}

export default DarkWizardsFigurine