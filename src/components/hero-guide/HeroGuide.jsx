import React from 'react'

//Components
import HeroInfo from './HeroInfo'
import Abilities from './Abilities'
import FusionItems from './FusionItems'
import KeyFusionItems from './KeyFusionItems'

const HeroGuide = ({ hero }) => {

    //Extract props need by <HeroInfo />
    const heroInfo = {
        name: hero.name,
        title: hero.title,
        quote: hero.quote,
        role: hero.role,
        description: hero.description,
        first_appeared: hero.first_appeared,
        card_type: hero.card_type,
        chest_type: hero.chest_type,
        available_in: hero.available_in,
        stat_growth: hero.stat_growth,
        medallions: hero.medallions

    }

    return (
        <div className="wrapper">
            <HeroInfo heroInfo={heroInfo} />
            <Abilities hero={hero.name} abilities={hero.abilities} />
            <FusionItems fusionItems={hero.fusion_items} />
            <KeyFusionItems keyItems={hero.key_items} heroAwakened={hero.awakened} />
        </div>
    )
}

export default HeroGuide