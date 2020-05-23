import React from 'react'

const StaffOfIllumination = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/staff-of-illumination.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Max Health 1200 <span className="grn-txt">+770</span></p><p>Magic Attack 100 <span className="grn-txt">+65</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/staff-of-illumination-fragment.png" width="36" height="36" /> x 80<p>Level 90 Required</p>
            </div>
        </div>
    )
}

export default StaffOfIllumination