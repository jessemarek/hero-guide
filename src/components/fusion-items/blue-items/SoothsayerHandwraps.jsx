import React from 'react'
import { returnStars } from '../../../utils/index'

const SoothsayerHandwraps = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/soothsayer-handwraps.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(3, 'enchant')}
                <p>Max Health 200 <span className="grn-txt">+81</span></p><p>Magic Attack 47 <span className="grn-txt">+18</span></p><p>Energy Recovery 100 <span className="grn-txt">+42</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/gem-of-fortitude.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/wizardry-codex.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/mending-pearl.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/twilight-orb.png" width="36" height="36" alt="equipment icon" /><p>Level 51 Required</p>
            </div>
        </div>
    )
}

export default SoothsayerHandwraps