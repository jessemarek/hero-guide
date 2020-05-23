import React from 'react'

const CommandersBlade = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/commander's-blade.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Max Health 1000 <span className="grn-txt">+640</span></p><p>Physical Attack 115 <span className="grn-txt">+75</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/commander's-blade-fragment.png" width="36" height="36" /> x 80<p>Level 90 Required</p>
            </div>
        </div>
    )
}

export default CommandersBlade