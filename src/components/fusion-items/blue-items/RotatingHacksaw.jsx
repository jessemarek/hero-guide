import React from 'react'
import { returnStars } from '../../../utils/index'

const RotatingHacksaw = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/rotating-hacksaw.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(3, 'enchant')}
                <p>Physical Pierce Rating 63 <span className="grn-txt">+36</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/gem-of-fortitude.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/skull-bonnet.png" width="36" height="36" alt="equipment icon" /><p>Level 46 Required</p>
            </div>
        </div>
    )
}

export default RotatingHacksaw