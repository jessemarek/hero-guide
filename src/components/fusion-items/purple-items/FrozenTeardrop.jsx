import React from 'react'

const FrozenTeardrop = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/frozen-teardrop.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Max Health 600 <span className="grn-txt">+410</span></p><p>Magic Attack 130 <span className="grn-txt">+90</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/athena's-blessing.png" width="36" height="36" /><img src="/assets/images/icons/equipment/ancient-rune.png" width="36" height="36" /><p>Level 80 Required</p>
            </div>
        </div>
    )
}

export default FrozenTeardrop