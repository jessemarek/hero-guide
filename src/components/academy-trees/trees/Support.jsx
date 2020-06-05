import React from 'react'

//Talent Components
import DarkMagic from '../talents/DarkMagic'
import BattleSorcery from '../talents/BattleSorcery'

import SilenceResistance from '../talents/SilenceResistance'
import FinalStruggle from '../talents/FinalStruggle'
import SummoningSkills from '../talents/SummoningSkills'

import MysticArts from '../talents/MysticArts'
import ArmorCrafting from '../talents/ArmorCrafting'

import PhysicalConditioning from '../talents/PhysicalConditioning'
import HealingSpells from '../talents/HealingSpells'

import GeneralTactics from '../talents/GeneralTactics'
import VitalityDrain from '../talents/VitalityDrain'
import EnergyRegeneration from '../talents/EnergyRegeneration'

const Support = ({ type }) => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Support</h2>
            </div>

            <div className="talent-tree">

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Basic</h4>
                    <DarkMagic />
                    <div></div>
                    <BattleSorcery />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Intermediate 1</h4>
                    <SilenceResistance />
                    {(type) ? <FinalStruggle /> : (<div></div>)}
                    {(type === 'summon') ? <SummoningSkills /> : <FinalStruggle />}
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
                    <HealingSpells />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Expert</h4>
                    <GeneralTactics />
                    <VitalityDrain />
                    <EnergyRegeneration />
                </div>

            </div>
        </>
    )
}

export default Support