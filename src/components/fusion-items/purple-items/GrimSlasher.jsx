import React from 'react'

const GrimSlasher = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/grim-slasher.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Physical Attack 60 <span className="grn-txt">+35</span></p><p>Lifesteal 50 <span className="grn-txt">+30</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/grim-slasher-fragment.png" width="36" height="36" /> x 40<p>Level 61 Required</p>
            </div>
        </div>
    )
}

export default GrimSlasher