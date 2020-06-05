import React from 'react'

//Talent Components
import DefensiveTactics from '../talents/DefensiveTactics'
import Blessing from '../talents/Blessing'

import PhysicalConditioning from '../talents/PhysicalConditioning'
import VitalityDrain from '../talents/VitalityDrain'

import OffensiveTactics from '../talents/OffensiveTactics'
import WeaponsMastery from '../talents/WeaponsMastery'
import Marksmanship from '../talents/Marksmanship'

import EnergyRegeneration from '../talents/EnergyRegeneration'
import ElementalMastery from '../talents/ElementalMastery'

import HealingPotions from '../talents/HealingPotions'
import EvasiveManeuvers from '../talents/EvasiveManeuvers'
import FirstAid from '../talents/FirstAid'

const Honor = ({ type }) => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Honor</h2>
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
                    <VitalityDrain />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Intermediate 2</h4>
                    <OffensiveTactics />
                    <WeaponsMastery />
                    <Marksmanship />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Advanced</h4>
                    <EnergyRegeneration />
                    <ElementalMastery />
                </div>

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Expert</h4>
                    <HealingPotions />
                    {(type) ? <EvasiveManeuvers /> : (<div></div>)}
                    {(type === 'healing') ? (<FirstAid />) : <EvasiveManeuvers />}
                </div>

            </div>
        </>
    )
}

export default Honor