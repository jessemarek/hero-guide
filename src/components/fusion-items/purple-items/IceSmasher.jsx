import React from 'react'
import { returnStars } from '../../../utils/index'

const IceSmasher = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/ice-smasher.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 1200 <span className="grn-txt">+725</span></p><p>Physical Attack 30 <span className="grn-txt">+20</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/carnage-mallet.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/demonic-longsword.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/red-jade.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/leather-waders.png" width="36" height="36" alt="equipment icon" /><p>Level 64 Required</p>
            </div>
        </div>
    )
}

export default IceSmasher