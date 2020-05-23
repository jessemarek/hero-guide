import React from 'react'

const JewelOfHelios = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/jewel-of-helios.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" />
                <p>Magic Attack 150 <span className="grn-txt">+95</span></p><p>Magic Armor 65 <span className="grn-txt">+40</span></p><p>Energy Recovery 180 <span className="grn-txt">+115</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/primordial-stone.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/helmet-of-darkness.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/torch-of-destruction.png" width="36" height="36" alt="equipment icon" /><p>Level 92 Required</p>
            </div>
        </div>
    )
}

export default JewelOfHelios