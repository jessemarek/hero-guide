import React from 'react'

//Talent Components
import EnergyRegeneration from '../talents/EnergyRegeneration'
import ElementalMastery from '../talents/ElementalMastery'

import SpellResistance from '../talents/SpellResistance'
import Forcefields from '../talents/Forcefields'
import PoisonPreparation from '../talents/PoisonPreparation'
import SummoningSkills from '../talents/SummoningSkills'

import MysticArts from '../talents/MysticArts'
import ArmorCrafting from '../talents/ArmorCrafting'

import PhysicalConditioning from '../talents/PhysicalConditioning'
import Marksmanship from '../talents/Marksmanship'

import GeneralTactics from '../talents/GeneralTactics'
import DefensiveTactics from '../talents/DefensiveTactics'
import DamageResistance from '../talents/DamageResistance'

const Defense = ({ type }) => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Defense</h2>
            </div>

            <div className="talent-tree">

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Basic</h4>
                    <EnergyRegeneration />
                    <div></div>
                    <ElementalMastery />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Intermediate 1</h4>
                    <SpellResistance />
                    {(type === 'normal') ? (<div></div>) : <Forcefields />}
                    {(type === 'DoT') ? (<PoisonPreparation />) : ((type === 'summon') ? <SummoningSkills /> : <Forcefields />)}
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Intermediate 2</h4>
                    <MysticArts />
                    <ArmorCrafting />
                </div>

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Advanced</h4>
                    <PhysicalConditioning />
                    <div></div>
                    <Marksmanship />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Expert</h4>
                    <GeneralTactics />
                    <DefensiveTactics />
                    <DamageResistance />
                </div>

            </div>
        </>
    )
}

export default Defense