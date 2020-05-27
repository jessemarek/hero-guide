import React from 'react'
import { returnStars } from '../../../utils/index'

const CrescentStaff = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/crescent-staff.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(7, 'enchant')}
                <p>Max Health 1000 <span className="grn-txt">+903</span></p><p>Magic Attack 170 <span className="grn-txt">+154</span></p><p>Magic Crit Rating 60 <span className="grn-txt">+56</span></p><p>Magic Pierce Rating 40 <span className="grn-txt">+35</span></p><p>Silence Resistance 15% <span className="grn-txt">+14%</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/lost-epic.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/oracle's-robe.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/scepter-of-truth.png" width="36" height="36" alt="equipment icon" /><p>Level 99 Required</p>
            </div>
        </div>
    )
}

export default CrescentStaff