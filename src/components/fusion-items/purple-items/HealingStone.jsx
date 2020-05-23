import React from 'react'

const HealingStone = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/healing-stone.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" />
                <p>Max Health 2500 <span className="grn-txt">+1750</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/healing-stone-fragment.png" width="36" height="36" alt="equipment icon" /> x 60<p>Level 77 Required</p>
            </div>
        </div>
    )
}

export default HealingStone