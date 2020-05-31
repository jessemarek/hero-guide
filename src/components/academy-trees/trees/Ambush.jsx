import React from 'react'

//Talent Components
import DamageResistance from '../talents/DamageResistance'
import Stealth from '../talents/Stealth'

import HealingPotions from '../talents/HealingPotions'
import SpellResistance from '../talents/SpellResistance'

import EvasiveManeuvers from '../talents/EvasiveManeuvers'
import Forcefields from '../talents/Forcefields'

import DefensiveTactics from '../talents/DefensiveTactics'
import Blessing from '../talents/Blessing'

import GeneralTactics from '../talents/GeneralTactics'
import MartialArts from '../talents/MartialArts'
import Swordsmanship from '../talents/Swordsmanship'

const Ambush = () => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Ambush</h2>
            </div>

            <div className="talent-tree">

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Basic</h4>
                    <DamageResistance />
                    <div></div>
                    <Stealth />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Intermediate 1</h4>
                    <HealingPotions />
                    <div></div>
                    <SpellResistance />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Intermediate 2</h4>
                    <EvasiveManeuvers />
                    <Forcefields />
                </div>

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Advanced</h4>
                    <MartialArts />
                    <div></div>
                    <Blessing />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Expert</h4>
                    <GeneralTactics />
                    <DefensiveTactics />
                    <Swordsmanship />
                </div>

            </div>
        </>
    )
}

export default Ambush