import React from 'react'

//Talent Components
import SilenceResistance from '../talents/SilenceResistance'
import FinalStruggle from '../talents/FinalStruggle'

import MartialArts from '../talents/MartialArts'
import Swordsmanship from '../talents/Swordsmanship'

import DamageResistance from '../talents/DamageResistance'
import Stealth from '../talents/Stealth'

import MysticArts from '../talents/MysticArts'
import ArmorCrafting from '../talents/ArmorCrafting'

import GeneralTactics from '../talents/GeneralTactics'
import SpellResistance from '../talents/SpellResistance'
import Forcefields from '../talents/Forcefields'

const Tactics = () => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Tactics</h2>
            </div>

            <div className="talent-tree">

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Basic</h4>
                    <SilenceResistance />
                    <div></div>
                    <FinalStruggle />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Intermediate 1</h4>
                    <MartialArts />
                    <div></div>
                    <Swordsmanship />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Intermediate 2</h4>
                    <DamageResistance />
                    <Stealth />
                </div>

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Advanced</h4>
                    <MysticArts />
                    <div></div>
                    <ArmorCrafting />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Expert</h4>
                    <GeneralTactics />
                    <SpellResistance />
                    <Forcefields />
                </div>

            </div>
        </>
    )
}

export default Tactics