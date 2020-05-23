import React from 'react'

const GoldenMallet = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/golden-mallet.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Physical Attack 63 <span className="grn-txt">+36</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/golden-mallet-fragment.png" width="36" height="36" /> x 20<p>Level 47 Required</p>
            </div>
        </div>
    )
}

export default GoldenMallet