import React from 'react'

const LegendaryGemstone = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/legendary-gemstone.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" alt="star icon" />
                <p>Max Health 275 <span className="grn-txt">+?</span></p><p>Ability Level Bonus +1</p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/aurora-torch.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/mana-boots.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/disciple's-mask.png" width="36" height="36" alt="equipment icon" /><p>Level 38 Required</p>
            </div>
        </div>
    )
}

export default LegendaryGemstone