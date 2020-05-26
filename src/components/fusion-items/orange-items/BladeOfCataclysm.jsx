import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const BladeOfCataclysm = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/blade-of-cataclysm.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Attack 100 <span className="grn-txt">+75</span></p><p>Physical Crit Rating 40 <span className="grn-txt">+30</span></p><p>Physical Pierce Rating 100 <span className="grn-txt">+75</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/spartan-dagger.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/adamantite-scimitar.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/amulet-of-dexterity.png" width="36" height="36" alt="equipment icon" /><p>Level 87 Required</p>
            </div>
        </div>
    )
}

export default BladeOfCataclysm