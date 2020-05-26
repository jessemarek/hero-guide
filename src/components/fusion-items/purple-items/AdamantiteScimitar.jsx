import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const AdamantiteScimitar = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/adamantite-scimitar.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Physical Attack 100 <span className="grn-txt">+85</span></p><p>Magic Armor 38 <span className="grn-txt">+30</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/grim-slasher.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/golden-mallet.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/steel-sword.png" width="36" height="36" alt="equipment icon" /><p>Level 70 Required</p>
            </div>
        </div>
    )
}

export default AdamantiteScimitar