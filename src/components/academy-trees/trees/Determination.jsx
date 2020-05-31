import React from 'react'

//Talent Components
import EnergyRegeneration from '../talents/EnergyRegeneration'
import ElementalMastery from '../talents/ElementalMastery'

import SpellResistance from '../talents/SpellResistance'
import Forcefields from '../talents/Forcefields'
import SummoningSkills from '../talents/SummoningSkills'

import MysticArts from '../talents/MysticArts'
import ArmorCrafting from '../talents/ArmorCrafting'

import PhysicalConditioning from '../talents/PhysicalConditioning'
import SpellMastery from '../talents/SpellMastery'

import GeneralTactics from '../talents/GeneralTactics'
import DefensiveTactics from '../talents/DefensiveTactics'
import DamageResistance from '../talents/DamageResistance'

const Determination = ({ type }) => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Determination</h2>
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
                    {(type) ? <Forcefields /> : (<div></div>)}
                    {(type === 'summon') ? <SummoningSkills /> : <Forcefields />}
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
                    <SpellMastery />
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

export default Determination