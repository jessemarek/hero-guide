import React from 'react'

//Talent Components
import DefensiveTactics from '../talents/DefensiveTactics'
import Blessing from '../talents/Blessing'

import PhysicalConditioning from '../talents/PhysicalConditioning'
import HealingSpells from '../talents/HealingSpells'

import DarkMagic from '../talents/DarkMagic'
import OffensiveSpells from '../talents/OffensiveSpells'
import SpellMastery from '../talents/SpellMastery'

import EnergyRegeneration from '../talents/EnergyRegeneration'
import ElementalMastery from '../talents/ElementalMastery'

import HealingPotions from '../talents/HealingPotions'
import EvasiveManeuvers from '../talents/EvasiveManeuvers'

const Resolve = () => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Resolve</h2>
            </div>

            <div className="talent-tree">

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Basic</h4>
                    <DefensiveTactics />
                    <div></div>
                    <Blessing />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Intermediate 1</h4>
                    <PhysicalConditioning />
                    <HealingSpells />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Intermediate 2</h4>
                    <DarkMagic />
                    <OffensiveSpells />
                    <SpellMastery />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Advanced</h4>
                    <EnergyRegeneration />
                    <ElementalMastery />
                </div>

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Expert</h4>
                    <HealingPotions />
                    <div></div>
                    <EvasiveManeuvers />
                </div>

            </div>
        </>
    )
}

export default Resolve