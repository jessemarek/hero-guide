import React from 'react'

const GemOfFortitude = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/gem-of-fortitude.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Physical Armor 12 <span className="grn-txt">+9</span></p><p>Magic Armor 34 <span className="grn-txt">+27</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/gem-of-fortitude-fragment.png" width="36" height="36" /> x 15<p>Level 39 Required</p>
            </div>
        </div>
    )
}

export default GemOfFortitude