import React from 'react'

const MysticDragonscale = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/mystic-dragonscale.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Max Health 1200 <span className="grn-txt">+915</span></p><p>Physical Attack 60 <span className="grn-txt">+45</span></p><p>Physical Armor 60 <span className="grn-txt">+45</span></p><p>Magic Armor 40 <span className="grn-txt">+30</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/mystic-dragonscale-fragment.png" width="36" height="36" /> x 80<p>Level 87 Required</p>
            </div>
        </div>
    )
}

export default MysticDragonscale