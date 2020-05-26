import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const DemonicLongsword = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/demonic-longsword.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(3)}
                <p>Physical Attack 30 <span className="grn-txt">+24</span></p><p>Lifesteal 15 <span className="grn-txt">+12</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/demonic-longsword-fragment.png" width="36" height="36" alt="equipment icon" /> x 15<p>Level 36 Required</p>
            </div>
        </div>
    )
}

export default DemonicLongsword