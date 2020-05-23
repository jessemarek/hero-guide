import React from 'react'

const TitanicAxe = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/titanic-axe.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Max Health 1600 <span className="grn-txt">+1455</span></p><p>Physical Attack 75 <span className="grn-txt">+70</span></p><p>Health Recovery 1200 <span className="grn-txt">+1090</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/titanic-axe-fragment.png" width="36" height="36" /> x 80<p>Level 84 Required</p>
            </div>
        </div>
    )
}

export default TitanicAxe