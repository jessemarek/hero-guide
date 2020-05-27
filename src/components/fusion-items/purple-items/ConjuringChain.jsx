import React from 'react'
import { returnStars } from '../../../utils/index'

const ConjuringChain = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/conjuring-chain.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Magic Pierce Rating 85 <span className="grn-txt">+65</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/bulwark-of-vitality.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/broadsword.png" width="36" height="36" alt="equipment icon" /><p>Level 58 Required</p>
            </div>
        </div>
    )
}

export default ConjuringChain