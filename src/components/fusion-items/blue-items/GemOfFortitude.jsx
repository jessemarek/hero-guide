import React from 'react'
import { returnStars } from '../../../utils/index'

const GemOfFortitude = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/gem-of-fortitude.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(3, 'enchant')}
                <p>Physical Armor 12 <span className="grn-txt">+9</span></p><p>Magic Armor 34 <span className="grn-txt">+27</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/gem-of-fortitude-fragment.png" width="36" height="36" alt="equipment icon" /> x 15<p>Level 39 Required</p>
            </div>
        </div>
    )
}

export default GemOfFortitude