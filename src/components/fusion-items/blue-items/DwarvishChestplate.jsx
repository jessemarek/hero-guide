import React from 'react'

const DwarvishChestplate = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/dwarvish-chestplate.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Magic Armor 41 <span className="grn-txt">+33</span></p><p>Health Recovery 270 <span className="grn-txt">+207</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/dwarvish-chestplate-fragment.png" width="36" height="36" /> x 15<p>Level 41 Required</p>
            </div>
        </div>
    )
}

export default DwarvishChestplate