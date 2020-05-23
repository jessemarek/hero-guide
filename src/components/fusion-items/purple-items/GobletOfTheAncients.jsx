import React from 'react'

const GobletOfTheAncients = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/goblet-of-the-ancients.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Max Health 800 <span className="grn-txt">+675</span></p><p>Physical Attack 25 <span className="grn-txt">+20</span></p><p>Magic Armor 60 <span className="grn-txt">+50</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/goblet-of-the-ancients-fragment.png" width="36" height="36" /> x 50<p>Level 70 Required</p>
            </div>
        </div>
    )
}

export default GobletOfTheAncients