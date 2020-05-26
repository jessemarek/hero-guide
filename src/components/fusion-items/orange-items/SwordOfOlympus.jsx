import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const SwordOfOlympus = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/sword-of-olympus.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 500 <span className="grn-txt">+450</span></p><p>Magic Attack 70 <span className="grn-txt">+65</span></p><p>Magic Armor 80 <span className="grn-txt">+70</span></p><p>Magic Crit Rating 20 <span className="grn-txt">+20</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/shuriken.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/runic-eulogy.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/scepter-of-prophecy.png" width="36" height="36" alt="equipment icon" /><p>Level 82 Required</p>
            </div>
        </div>
    )
}

export default SwordOfOlympus