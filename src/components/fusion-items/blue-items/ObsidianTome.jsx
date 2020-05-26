import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const ObsidianTome = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/obsidian-tome.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(3)}
                <p>Magic Attack 45 <span className="grn-txt">+36</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/wizardry-codex.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/wizardry-codex.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/twilight-orb.png" width="36" height="36" alt="equipment icon" /><p>Level 29 Required</p>
            </div>
        </div>
    )
}

export default ObsidianTome