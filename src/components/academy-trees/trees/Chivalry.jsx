import React from 'react'

//Talent Components
import MysticArts from '../talents/MysticArts'
import ArmorCrafting from '../talents/ArmorCrafting'

import PhysicalConditioning from '../talents/PhysicalConditioning'
import ExplosiveMagic from '../talents/ExplosiveMagic'

import BattleSorcery from '../talents/BattleSorcery'
import OffensiveSpells from '../talents/OffensiveSpells'
import SilenceResistance from '../talents/SilenceResistance'

import EnergyRegeneration from '../talents/EnergyRegeneration'
import ElementalMastery from '../talents/ElementalMastery'

import OffensiveTactics from '../talents/OffensiveTactics'
import WeaponsMastery from '../talents/WeaponsMastery'

const Chivalry = () => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Chivalry</h2>
            </div>

            <div className="talent-tree">

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Basic</h4>
                    <MysticArts />
                    <div></div>
                    <ArmorCrafting />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Intermediate 1</h4>
                    <PhysicalConditioning />
                    <ExplosiveMagic />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Intermediate 2</h4>
                    <BattleSorcery />
                    <OffensiveSpells />
                    <SilenceResistance />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Advanced</h4>
                    <EnergyRegeneration />
                    <ElementalMastery />
                </div>

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Expert</h4>
                    <OffensiveTactics />
                    <div></div>
                    <WeaponsMastery />
                </div>

            </div>
        </>
    )
}

export default Chivalry