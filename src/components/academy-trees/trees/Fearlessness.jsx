import React from 'react'

//Talent Components
import HealingPotions from '../talents/HealingPotions'
import EvasiveManeuvers from '../talents/EvasiveManeuvers'

import Swordsmanship from '../talents/Swordsmanship'
import OffensiveTactics from '../talents/OffensiveTactics'

import MartialArts from '../talents/MartialArts'
import WeaponsMastery from '../talents/WeaponsMastery'
import HealingSpells from '../talents/HealingSpells'

import SilenceResistance from '../talents/SilenceResistance'
import FinalStruggle from '../talents/FinalStruggle'

import Stealth from '../talents/Stealth'
import Blessing from '../talents/Blessing'

const Fearlessness = () => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Fearlessness</h2>
            </div>

            <div className="talent-tree">

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Basic</h4>
                    <HealingPotions />
                    <div></div>
                    <EvasiveManeuvers />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Intermediate 1</h4>
                    <Swordsmanship />
                    <OffensiveTactics />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Intermediate 2</h4>
                    <MartialArts />
                    <WeaponsMastery />
                    <HealingSpells />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Advanced</h4>
                    <SilenceResistance />
                    <FinalStruggle />
                </div>

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Expert</h4>
                    <Stealth />
                    <div></div>
                    <Blessing />
                </div>

            </div>
        </>
    )
}

export default Fearlessness