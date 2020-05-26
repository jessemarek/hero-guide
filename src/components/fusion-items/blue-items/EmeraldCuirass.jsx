import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const EmeraldCuirass = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/emerald-cuirass.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(3)}
                <p>Max Health 675 <span className="grn-txt">+525</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/emerald-cuirass-fragment.png" width="36" height="36" alt="equipment icon" /> x 15<p>Level 37 Required</p>
            </div>
        </div>
    )
}

export default EmeraldCuirass