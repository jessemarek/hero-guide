import React from 'react'

//Components
import Abilities from './Abilities'
import FusionItems from './FusionItems'
import KeyFusionItems from './KeyFusionItems'

const HeroGuide = ({ hero }) => {

    return (
        <div className="wrapper">
            <Abilities hero={hero.name} abilities={hero.abilities} />
            <FusionItems fusionItems={hero.fusion_items} />
            <KeyFusionItems keyItems={hero.key_items} heroAwakened={hero.awakened} />
        </div>
    )
}

export default HeroGuide