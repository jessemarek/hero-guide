import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const BlackDragonsTailbone = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/black-dragon's-tailbone.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(3)}
                <p>Magic Armor 45 <span className="grn-txt">+36</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/black-dragon's-tailbone-fragment.png" width="36" height="36" alt="equipment icon" /> x 15<p>Level 33 Required</p>
            </div>
        </div>
    )
}

export default BlackDragonsTailbone