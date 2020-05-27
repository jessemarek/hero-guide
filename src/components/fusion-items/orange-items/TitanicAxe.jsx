import React from 'react'
import { returnStars } from '../../../utils/index'

const TitanicAxe = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/titanic-axe.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 1600 <span className="grn-txt">+1455</span></p><p>Physical Attack 75 <span className="grn-txt">+70</span></p><p>Health Recovery 1200 <span className="grn-txt">+1090</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/titanic-axe-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 84 Required</p>
            </div>
        </div>
    )
}

export default TitanicAxe