import React from 'react'

const TriSpiritOrb = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/tri-spirit-orb.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Max Health 350 <span className="grn-txt">+215</span></p><p>Physical Attack 43 <span className="grn-txt">+25</span></p><p>Magic Attack 43 <span className="grn-txt">+25</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/bulwark-of-vitality.png" width="36" height="36" /><img src="/assets/images/icons/equipment/golden-mallet.png" width="36" height="36" /><img src="/assets/images/icons/equipment/runic-eulogy.png" width="36" height="36" /><p>Level 65 Required</p>
            </div>
        </div>
    )
}

export default TriSpiritOrb