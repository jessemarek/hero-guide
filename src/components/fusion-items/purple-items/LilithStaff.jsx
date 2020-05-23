import React from 'react'

const LilithStaff = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/lilith-staff.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Magic Attack 50 <span className="grn-txt">+30</span></p><p>Magic Armor 30 <span className="grn-txt">+20</span></p><p>Magic Crit Rating 30 <span className="grn-txt">+20</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/explosive-scepter.png" width="36" height="36" /><img src="/assets/images/icons/equipment/black-dragon's-tailbone.png" width="36" height="36" /><br></br><img src="/assets/images/icons/equipment/iron-chainmail.png" width="36" height="36" /><img src="/assets/images/icons/equipment/gumboots.png" width="36" height="36" /><p>Level 62 Required</p>
            </div>
        </div>
    )
}

export default LilithStaff