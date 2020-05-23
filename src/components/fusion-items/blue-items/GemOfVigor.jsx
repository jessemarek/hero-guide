import React from 'react'

const GemOfVigor = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/gem-of-vigor.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" />
                <p>Max Health 850 <span className="grn-txt">+471</span></p><p>Health Recovery 378 <span className="grn-txt">+210</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/gem-of-vigor-fragment.png" width="36" height="36" alt="equipment icon" /> x 20<p>Level 50 Required</p>
            </div>
        </div>
    )
}

export default GemOfVigor