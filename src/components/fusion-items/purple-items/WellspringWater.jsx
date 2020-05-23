import React from 'react'

const WellspringWater = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/wellspring-water.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" />
                <p>Max Health 300 <span className="grn-txt">+140</span></p><p>Magic Attack 84 <span className="grn-txt">+40</span></p><p>Energy Recovery 150 <span className="grn-txt">+120</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/wellspring-water-fragment.png" width="36" height="36" alt="equipment icon" /> x 40<p>Level 61 Required</p>
            </div>
        </div>
    )
}

export default WellspringWater