import React from 'react'
import { returnStars } from '../../../utils/index'

const LostEpic = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/lost-epic.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Magic Attack 130 <span className="grn-txt">+85</span></p><p>Magic Pierce Rating 95 <span className="grn-txt">+60</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/lost-epic-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 95 Required</p>
            </div>
        </div>
    )
}

export default LostEpic