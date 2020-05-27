import React from 'react'
import { returnStars } from '../../../utils/index'

const Aegis = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/aegis.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 2000 <span className="grn-txt">+1515</span></p><p>Physical Armor 45 <span className="grn-txt">+35</span></p><p>Magic Armor 40 <span className="grn-txt">+30</span></p><p>Health Recovery 1440 <span className="grn-txt">+1090</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/titanic-axe.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/clasp-of-life.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bulwark-of-vitality.png" width="36" height="36" alt="equipment icon" /><p>Level 89 Required</p>
            </div>
        </div>
    )
}

export default Aegis