import React from 'react'

const RenegadesArmor = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/renegade's-armor.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Max Health 1800 <span className="grn-txt">+1155</span></p><p>Physical Attack 70 <span className="grn-txt">+45</span></p><p>Physical Armor 80 <span className="grn-txt">+50</span></p><p>Control Time Reduction 10 <span className="grn-txt">+5</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/commander's-blade.png" width="36" height="36" /><img src="/assets/images/icons/equipment/kretonian-talisman.png" width="36" height="36" /><img src="/assets/images/icons/equipment/nemean-hide.png" width="36" height="36" /><p>Level 94 Required</p>
            </div>
        </div>
    )
}

export default RenegadesArmor