import React from 'react'

const CloudWalkers = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/cloud-walkers.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" />
                <p>Physical Armor 13 <span className="grn-txt">+6</span></p><p>Magic Armor 40 <span className="grn-txt">+21</span></p><p>Dodge Rating 10 <span className="grn-txt">+6</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/cloud-walkers-fragment.png" width="36" height="36" alt="equipment icon" /> x 20<p>Level 48 Required</p>
            </div>
        </div>
    )
}

export default CloudWalkers