import React from 'react'
import { returnStars } from '../../../utils/index'

const DemonsSkull = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/demon's-skull.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 1000 <span className="grn-txt">+760</span></p><p>Physical Attack 70 <span className="grn-txt">+65</span></p><p>Physical Armor 35 <span className="grn-txt">+?</span></p><p>Lifesteal 30 <span className="grn-txt">+25</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/grim-slasher.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/runic-crystal-ball.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/soul-stealing-necklace.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/starfall-wand.png" width="36" height="36" alt="equipment icon" /><p>Level 82 Required</p>
            </div>
        </div>
    )
}

export default DemonsSkull