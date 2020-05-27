import React from 'react'
import { returnStars } from '../../../utils/index'

const HeavyBallista = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/heavy-ballista.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 30 <span className="grn-txt">+20</span></p><p>Physical Crit Rating 60 <span className="grn-txt">+40</span></p><p>Physical Pierce Rating 80 <span className="grn-txt">+55</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/destruction.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/ancient-royal-sword.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/rotating-hacksaw.png" width="36" height="36" alt="equipment icon" /><p>Level 79 Required</p>
            </div>
        </div>
    )
}

export default HeavyBallista