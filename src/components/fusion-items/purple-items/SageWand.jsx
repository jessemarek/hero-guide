import React from 'react'

const SageWand = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/sage-wand.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Magic Attack 110 <span className="grn-txt">+65</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/sage-wand-fragment.png" width="36" height="36" /> x 40<p>Level 60 Required</p>
            </div>
        </div>
    )
}

export default SageWand