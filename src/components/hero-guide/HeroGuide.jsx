import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//Components
import HeroInfo from './HeroInfo'
import Abilities from './Abilities'
import FusionItems from './FusionItems'
import KeyFusionItems from './KeyFusionItems'
import HeroicAcademyTrees from './HeroicAcademyTrees'
import AwakeningQuest from '../awakenings/AwakeningQuest'

//Utils
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const HeroGuide = () => {

    const { hero } = useParams()

    const [heroData, setHeroData] = useState(null)

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/heroes/${hero}`)
            .then(res => {
                console.log(res.data)
                setHeroData(res.data)
            })
            .catch(err => console.log(err.response))
    }, [hero])

    return (
        <>
            {
                heroData ?

                    (<div className="wrapper">
                        <HeroInfo heroInfo={heroData.hero_info} />
                        {/* <Abilities hero={heroData.hero_info.name} abilities={heroData.abilities} /> */}
                        <FusionItems fusionItems={heroData.fusion_items} />
                        <KeyFusionItems keyItems={heroData.key_items} heroAwakened={heroData.awakening.awakened} />
                        <HeroicAcademyTrees trees={heroData.academy_trees} />
                        {
                            heroData/*.awakening*/.awakened &&
                            <AwakeningQuest name={heroData.name} awakening={heroData.awakening} />
                        }
                    </div>) : null
            }
        </>
    )
}

export default HeroGuide