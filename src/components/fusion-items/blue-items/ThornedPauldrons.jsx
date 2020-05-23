import React from 'react'

const ThornedPauldrons = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/thorned-pauldrons.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Physical Armor 45 <span className="grn-txt">+36</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/wizardry-codex.png" width="36" height="36" /><img src="/assets/images/icons/equipment/meteor-flail.png" width="36" height="36" /><p>Level 35 Required</p>
            </div>
        </div>
    )
}

export default ThornedPauldrons