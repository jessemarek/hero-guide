import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const AzraelsRoar = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/azrael's-roar.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 1100 <span className="grn-txt">+750</span></p><p>Physical Armor 98 <span className="grn-txt">+65</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/guardian-plate.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/runic-eulogy.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/bulwark-of-vitality.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/meteor-flail.png" width="36" height="36" alt="equipment icon" /><p>Level 76 Required</p>
            </div>
        </div>
    )
}

export default AzraelsRoar