import React from 'react'
import { returnStars } from '../../../utils/index'

const BanditsDagger = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/bandit's-dagger.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Physical Attack 130 <span className="grn-txt">+85</span></p><p>Physical Crit Rating 50 <span className="grn-txt">+30</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/bandit's-dagger-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 90 Required</p>
            </div>
        </div>
    )
}

export default BanditsDagger