import React from 'react'

const BeastlyGuardian = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/beastly-guardian.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" />
                <p>Max Health 2000 <span className="grn-txt">+1285</span></p><p>Physical Armor 60 <span className="grn-txt">+40</span></p><p>Magic Armor 60 <span className="grn-txt">+40</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/commander's-blade.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/staff-of-illumination.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/ethereal-cloak.png" width="36" height="36" alt="equipment icon" /><p>Level 92 Required</p>
            </div>
        </div>
    )
}

export default BeastlyGuardian