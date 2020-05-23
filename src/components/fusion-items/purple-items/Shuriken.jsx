import React from 'react'

const Shuriken = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/shuriken.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Max Health 300 <span className="grn-txt">+205</span></p><p>Magic Attack 150 <span className="grn-txt">+105</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/shuriken-fragment.png" width="36" height="36" /> x 60<p>Level 76 Required</p>
            </div>
        </div>
    )
}

export default Shuriken