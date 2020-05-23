import React from 'react'

const RecoveryPotion = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/recovery-potion.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Max Health 2300 <span className="grn-txt">+1575</span></p><p>Health Recovery 1020 <span className="grn-txt">+700</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/clasp-of-life.png" width="36" height="36" /><img src="/assets/images/icons/equipment/clasp-of-life.png" width="36" height="36" /><img src="/assets/images/icons/equipment/sapphire-bracelet.png" width="36" height="36" /><p>Level 78 Required</p>
            </div>
        </div>
    )
}

export default RecoveryPotion