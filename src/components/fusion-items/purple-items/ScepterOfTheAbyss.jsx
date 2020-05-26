import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const ScepterOfTheAbyss = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/scepter-of-the-abyss.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 600 <span className="grn-txt">+500</span></p><p>Magic Attack 100 <span className="grn-txt">+85</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/scepter-of-the-abyss-fragment.png" width="36" height="36" alt="equipment icon" /> x 50<p>Level 69 Required</p>
            </div>
        </div>
    )
}

export default ScepterOfTheAbyss