import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const StaffOfIllumination = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/staff-of-illumination.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 1200 <span className="grn-txt">+770</span></p><p>Magic Attack 100 <span className="grn-txt">+65</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/staff-of-illumination-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 90 Required</p>
            </div>
        </div>
    )
}

export default StaffOfIllumination