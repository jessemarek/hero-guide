import React from 'react'

const SwordOfOlympus = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/sword-of-olympus.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Max Health 500 <span className="grn-txt">+450</span></p><p>Magic Attack 70 <span className="grn-txt">+65</span></p><p>Magic Armor 80 <span className="grn-txt">+70</span></p><p>Magic Crit Rating 20 <span className="grn-txt">+20</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/shuriken.png" width="36" height="36" /><img src="/assets/images/icons/equipment/runic-eulogy.png" width="36" height="36" /><img src="/assets/images/icons/equipment/scepter-of-prophecy.png" width="36" height="36" /><p>Level 82 Required</p>
            </div>
        </div>
    )
}

export default SwordOfOlympus