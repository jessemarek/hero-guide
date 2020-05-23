import React from 'react'

const HeavyBallista = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/heavy-ballista.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Physical Attack 30 <span className="grn-txt">+20</span></p><p>Physical Crit Rating 60 <span className="grn-txt">+40</span></p><p>Physical Pierce Rating 80 <span className="grn-txt">+55</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/destruction.png" width="36" height="36" /><img src="/assets/images/icons/equipment/ancient-royal-sword.png" width="36" height="36" /><img src="/assets/images/icons/equipment/rotating-hacksaw.png" width="36" height="36" /><p>Level 79 Required</p>
            </div>
        </div>
    )
}

export default HeavyBallista