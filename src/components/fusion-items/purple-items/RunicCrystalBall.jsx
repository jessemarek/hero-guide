import React from 'react'

const RunicCrystalBall = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/runic-crystal-ball.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Magic Armor 100 <span className="grn-txt">+60</span></p><p>Health Recovery 660 <span className="grn-txt">+395</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/runic-crystal-ball-fragment.png" width="36" height="36" /> x 40<p>Level 65 Required</p>
            </div>
        </div>
    )
}

export default RunicCrystalBall