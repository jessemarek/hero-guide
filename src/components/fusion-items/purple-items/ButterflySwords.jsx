import React from 'react'
import { returnStars } from '../../../utils/index'

const ButterflySwords = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/butterfly-swords.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 110 <span className="grn-txt">+65</span></p><p>Physical Armor 30 <span className="grn-txt">+20</span></p><p>Dodge Rating 30 <span className="grn-txt">+20</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/heavenly-amulet.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/ancient-royal-sword.png" width="36" height="36" alt="equipment icon" /><p>Level 79 Required</p>
            </div>
        </div>
    )
}

export default ButterflySwords