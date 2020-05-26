import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const Demolisher = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/demolisher.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Crit Rating 110 <span className="grn-txt">+65</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/ancient-royal-sword.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/hefty-war-axe.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/hefty-war-axe.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bramble-stick.png" width="36" height="36" alt="equipment icon" /><p>Level 60 Required</p>
            </div>
        </div>
    )
}

export default Demolisher