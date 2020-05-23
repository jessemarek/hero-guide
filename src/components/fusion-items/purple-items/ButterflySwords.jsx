import React from 'react'

const ButterflySwords = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/butterfly-swords.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Physical Attack 110 <span className="grn-txt">+65</span></p><p>Physical Armor 30 <span className="grn-txt">+20</span></p><p>Dodge Rating 30 <span className="grn-txt">+20</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/heavenly-amulet.png" width="36" height="36" /><img src="/assets/images/icons/equipment/ancient-royal-sword.png" width="36" height="36" /><p>Level 79 Required</p>
            </div>
        </div>
    )
}

export default ButterflySwords