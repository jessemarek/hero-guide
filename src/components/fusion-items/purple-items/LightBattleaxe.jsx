import React from 'react'

const LightBattleaxe = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/light-battleaxe.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" />
                <p>Physical Crit Rating 138 <span className="grn-txt">+115</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/destruction.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/chipped-blade.png" width="36" height="36" alt="equipment icon" /><p>Level 71 Required</p>
            </div>
        </div>
    )
}

export default LightBattleaxe