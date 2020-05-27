import React from 'react'
import { returnStars } from '../../../utils/index'

const VoodooManuscript = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/voodoo-manuscript.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Magic Attack 78 <span className="grn-txt">+65</span></p><p>Magic Armor 30 <span className="grn-txt">+25</span></p><p>Magic Crit Rating 30 <span className="grn-txt">+25</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/lilith-staff.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/obsidian-tome.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/casket-of-time.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/disciple's-mask.png" width="36" height="36" alt="equipment icon" /><p>Level 66 Required</p>
            </div>
        </div>
    )
}

export default VoodooManuscript