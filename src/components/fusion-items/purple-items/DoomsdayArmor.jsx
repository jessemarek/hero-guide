import React from 'react'

const DoomsdayArmor = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/doomsday-armor.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Physical Armor 138 <span className="grn-txt">+115</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/doomsday-armor-fragment.png" width="36" height="36" /> x 50<p>Level 67 Required</p>
            </div>
        </div>
    )
}

export default DoomsdayArmor