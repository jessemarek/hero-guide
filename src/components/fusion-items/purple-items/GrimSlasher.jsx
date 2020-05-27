import React from 'react'
import { returnStars } from '../../../utils/index'

const GrimSlasher = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/grim-slasher.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 60 <span className="grn-txt">+35</span></p><p>Lifesteal 50 <span className="grn-txt">+30</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/grim-slasher-fragment.png" width="36" height="36" alt="equipment icon" /> x 40<p>Level 61 Required</p>
            </div>
        </div>
    )
}

export default GrimSlasher