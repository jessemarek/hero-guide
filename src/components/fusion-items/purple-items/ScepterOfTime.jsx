import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const ScepterOfTime = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/scepter-of-time.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Magic Attack 80 <span className="grn-txt">+70</span></p><p>Magic Armor 40 <span className="grn-txt">+35</span></p><p>Energy Efficiencey 8% <span className="grn-txt">+5%</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/sage-wand.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/dwarvish-chestplate.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/casket-of-time.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/red-jade.png" width="36" height="36" alt="equipment icon" /><p>Level 67 Required</p>
            </div>
        </div>
    )
}

export default ScepterOfTime