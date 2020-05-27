import React from 'react'
import { returnStars } from '../../../utils/index'

const PhantomJar = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/phantom-jar.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Magic Attack 65 <span className="grn-txt">+50</span></p><p>Magic Armor 21 <span className="grn-txt">+15</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/phantom-jar-fragment.png" width="36" height="36" alt="equipment icon" /> x 30<p>Level 57 Required</p>
            </div>
        </div>
    )
}

export default PhantomJar