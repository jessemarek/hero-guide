import React from 'react'
import { returnStars } from '../../../utils/index'

const WhisperwindBow = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/whisperwind-bow.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 70 <span className="grn-txt">+50</span></p><p>Physical Crit Rating 100 <span className="grn-txt">+70</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/whisperwind-bow-fragment.png" width="36" height="36" alt="equipment icon" /> x 60<p>Level 76 Required</p>
            </div>
        </div>
    )
}

export default WhisperwindBow