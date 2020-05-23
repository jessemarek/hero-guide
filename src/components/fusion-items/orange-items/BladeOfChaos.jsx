import React from 'react'

const BladeOfChaos = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/blade-of-chaos.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Physical Attack 120 <span className="grn-txt">+?</span></p><p>Physical Crit Rating 35 <span className="grn-txt">+?</span></p><p>Physical Pierce Rating 45 <span className="grn-txt">+35</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/blade-of-chaos-fragment.png" width="36" height="36" /> x 80<p>Level 82 Required</p>
            </div>
        </div>
    )
}

export default BladeOfChaos