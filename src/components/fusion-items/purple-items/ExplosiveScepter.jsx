import React from 'react'
import { returnStars } from '../../../utils/index'

const ExplosiveScepter = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/explosive-scepter.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Magic Armor 60 <span className="grn-txt">+45</span></p><p>Magic Crit Rating 25 <span className="grn-txt">+20</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/explosive-scepter-fragment.png" width="36" height="36" alt="equipment icon" /> x 30<p>Level 54 Required</p>
            </div>
        </div>
    )
}

export default ExplosiveScepter