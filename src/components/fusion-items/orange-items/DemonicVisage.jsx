import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const DemonicVisage = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/demonic-visage.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 800 <span className="grn-txt">+720</span></p><p>Physical Attack 30 <span className="grn-txt">+25</span></p><p>Physical Armor 30 <span className="grn-txt">+25</span></p><p>Magic Armor 90 <span className="grn-txt">+80</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/maiden's-trinket.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/soothsayer-handwraps.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/black-dragon's-tailbone.png" width="36" height="36" alt="equipment icon" /><p>Level 81 Required</p>
            </div>
        </div>
    )
}

export default DemonicVisage