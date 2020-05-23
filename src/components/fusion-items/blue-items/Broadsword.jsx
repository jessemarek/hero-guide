import React from 'react'

const Broadsword = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/broadsword.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Physical Attack 45 <span className="grn-txt">+36</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/hefty-war-axe.png" width="36" height="36" /><img src="/assets/images/icons/equipment/hefty-war-axe.png" width="36" height="36" /><img src="/assets/images/icons/equipment/elven-recurve-bow.png" width="36" height="36" /><p>Level 30 Required</p>
            </div>
        </div>
    )
}

export default Broadsword