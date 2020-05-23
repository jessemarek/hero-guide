import React from 'react'

const DemonicLongsword = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/demonic-longsword.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" />
                <p>Physical Attack 30 <span className="grn-txt">+24</span></p><p>Lifesteal 15 <span className="grn-txt">+12</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/demonic-longsword-fragment.png" width="36" height="36" alt="equipment icon" /> x 15<p>Level 36 Required</p>
            </div>
        </div>
    )
}

export default DemonicLongsword