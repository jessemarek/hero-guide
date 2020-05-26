import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const TorchOfDestruction = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/torch-of-destruction.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Magic Attack 200 <span className="grn-txt">+185</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/torch-of-destruction-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 81 Required</p>
            </div>
        </div>
    )
}

export default TorchOfDestruction