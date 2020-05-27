import React from 'react'
import { returnStars } from '../../../utils/index'

const CloakOfWisdom = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/cloak-of-wisdom.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(7, 'enchant')}
                <p>Magic Attack 160 <span className="grn-txt">+147</span></p><p>Physical Armor 65 <span className="grn-txt">+56</span></p><p>Magic Pierce Rating 85 <span className="grn-txt">+77</span></p><p>Silence Resistance 10% <span className="grn-txt">+7%</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/oracle's-robe.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/kretonian-talisman.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/scepter-of-truth.png" width="36" height="36" alt="equipment icon" /><p>Level 98 Required</p>
            </div>
        </div>
    )
}

export default CloakOfWisdom