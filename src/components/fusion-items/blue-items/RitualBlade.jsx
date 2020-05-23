import React from 'react'

const RitualBlade = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/ritual-blade.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" />
                <p>Magic Pierce Rating 63 <span className="grn-txt">+36</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/ritual-blade-fragment.png" width="36" height="36" alt="equipment icon" /> x 20<p>Level 49 Required</p>
            </div>
        </div>
    )
}

export default RitualBlade