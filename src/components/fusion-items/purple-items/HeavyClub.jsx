import React from 'react'

const HeavyClub = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/heavy-club.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" />
                <p>Physical Attack 30 <span className="grn-txt">+25</span></p><p>Physical Crit Rating 6 <span className="grn-txt">+5</span></p><p>Physical Hit Bonus 50 <span className="grn-txt">+40</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/mask-of-sacrifice.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/cloud-walkers.png" width="36" height="36" alt="equipment icon" /><p>Level 57 Required</p>
            </div>
        </div>
    )
}

export default HeavyClub