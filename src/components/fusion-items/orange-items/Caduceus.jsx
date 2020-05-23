import React from 'react'

const Caduceus = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/caduceus.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Max Health 1200 <span className="grn-txt">+915</span></p><p>Magic Armor 100 <span className="grn-txt">+75</span></p><p>Magic Pierce Rating 60 <span className="grn-txt">+45</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/sage-wand.png" width="36" height="36" /><img src="/assets/images/icons/equipment/destruction.png" width="36" height="36" /><br></br><img src="/assets/images/icons/equipment/demolisher.png" width="36" height="36" /><img src="/assets/images/icons/equipment/ritual-blade.png" width="36" height="36" /><p>Level 89 Required</p>
            </div>
        </div>
    )
}

export default Caduceus