import React from 'react'

//Talent Components
import MysticArts from '../talents/MysticArts'
import ArmorCrafting from '../talents/ArmorCrafting'

import PhysicalConditioning from '../talents/PhysicalConditioning'
import VitalityDrain from '../talents/VitalityDrain'

import Marksmanship from '../talents/Marksmanship'
import SilenceResistance from '../talents/SilenceResistance'
import FinalStruggle from '../talents/FinalStruggle'

import EnergyRegeneration from '../talents/EnergyRegeneration'
import ElementalMastery from '../talents/ElementalMastery'

import OffensiveTactics from '../talents/OffensiveTactics'
import WeaponsMastery from '../talents/WeaponsMastery'
import FirstAid from '../talents/FirstAid'

const Heroism = ({ type }) => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Heroism</h2>
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
                    <VitalityDrain />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Intermediate 2</h4>
                    <Marksmanship />
                    <SilenceResistance />
                    <FinalStruggle />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Advanced</h4>
                    <EnergyRegeneration />
                    <ElementalMastery />
                </div>

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Expert</h4>
                    <OffensiveTactics />
                    {(type) ? <WeaponsMastery /> : (<div></div>)}
                    {(type === 'healing') ? (<FirstAid />) : <WeaponsMastery />}
                </div>

            </div>
        </>
    )
}

export default Heroism