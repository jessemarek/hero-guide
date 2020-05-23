import React from 'react'

const BladeOfIllusion = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/blade-of-illusion.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Physical Attack 140 <span className="grn-txt">+90</span></p><p>Physical Pierce Rating 80 <span className="grn-txt">+50</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/blade-of-illusion-fragment.png" width="36" height="36" /> x 80<p>Level 95 Required</p>
            </div>
        </div>
    )
}

export default BladeOfIllusion