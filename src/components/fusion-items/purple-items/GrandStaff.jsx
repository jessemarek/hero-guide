import React from 'react'

const GrandStaff = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/grand-staff.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Magic Attack 85 <span className="grn-txt">+100</span></p><p>Ability Level Bonus +2</p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/legendary-gemstone.png" width="36" height="36" /><img src="/assets/images/icons/equipment/sage-wand.png" width="36" height="36" /><br></br><img src="/assets/images/icons/equipment/wizardry-codex.png" width="36" height="36" /><img src="/assets/images/icons/equipment/crimson-staff.png" width="36" height="36" /><p>Level 73 Required</p>
            </div>
        </div>
    )
}

export default GrandStaff