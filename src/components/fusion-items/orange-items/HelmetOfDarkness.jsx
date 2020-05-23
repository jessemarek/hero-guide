import React from 'react'

const HelmetOfDarkness = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/helmet-of-darkness.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Magic Attack 100 <span className="grn-txt">+75</span></p><p>Physical Armor 60 <span className="grn-txt">+45</span></p><p>Magic Armor 80 <span className="grn-txt">+60</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/helmet-of-darkness-fragment.png" width="36" height="36" /> x 80<p>Level 86 Required</p>
            </div>
        </div>
    )
}

export default HelmetOfDarkness