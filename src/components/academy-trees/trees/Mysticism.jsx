import React from 'react'

//Talent Components
import MysticArts from '../talents/MysticArts'
import ArmorCrafting from '../talents/ArmorCrafting'

import HealingPotions from '../talents/HealingPotions'
import SpellResistance from '../talents/SpellResistance'
import PoisonPreparation from '../talents/PoisonPreparation'
import SummoningSkills from '../talents/SummoningSkills'

import EvasiveManeuvers from '../talents/EvasiveManeuvers'
import Forcefields from '../talents/Forcefields'

import EnergyRegeneration from '../talents/EnergyRegeneration'
import ElementalMastery from '../talents/ElementalMastery'

import GeneralTactics from '../talents/GeneralTactics'
import ExplosiveMagic from '../talents/ExplosiveMagic'
import OffensiveSpells from '../talents/OffensiveSpells'

const Mysticism = ({ type }) => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Mysticism</h2>
            </div>

            <div className="talent-tree">

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Basic</h4>
                    <MysticArts />
                    <div></div>
                    <ArmorCrafting />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Intermediate 1</h4>
                    <HealingPotions />
                    {(type) ? <SpellResistance /> : (<div></div>)}
                    {(type === 'DoT') ? (<PoisonPreparation />) : ((type === 'summon') ? <SummoningSkills /> : <SpellResistance />)}
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Intermediate 2</h4>
                    <EvasiveManeuvers />
                    <Forcefields />
                </div>

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Advanced</h4>
                    <EnergyRegeneration />
                    <div></div>
                    <ElementalMastery />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Expert</h4>
                    <GeneralTactics />
                    <ExplosiveMagic />
                    <OffensiveSpells />
                </div>

            </div>
        </>
    )
}

export default Mysticism