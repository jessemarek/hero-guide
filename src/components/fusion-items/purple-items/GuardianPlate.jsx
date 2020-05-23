import React from 'react'

const GuardianPlate = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/guardian-plate.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Physical Armor 110 <span className="grn-txt">+65</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/guardian-plate-fragment.png" width="36" height="36" /> x 40<p>Level 62 Required</p>
            </div>
        </div>
    )
}

export default GuardianPlate