import React from 'react'

//Talent Components
import DamageResistance from '../talents/DamageResistance'
import Stealth from '../talents/Stealth'

import PhysicalConditioning from '../talents/PhysicalConditioning'
import HealingSpells from '../talents/HealingSpells'

import SpellMastery from '../talents/SpellMastery'
import SilenceResistance from '../talents/SilenceResistance'
import FinalStruggle from '../talents/FinalStruggle'

import DefensiveTactics from '../talents/DefensiveTactics'
import Blessing from '../talents/Blessing'

import DarkMagic from '../talents/DarkMagic'
import BattleSorcery from '../talents/BattleSorcery'
import FirstAid from '../talents/FirstAid'

const ElementalMagic = ({ type }) => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Elemental Magic</h2>
            </div>

            <div className="talent-tree">

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Basic</h4>
                    <DamageResistance />
                    <div></div>
                    <Stealth />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Intermediate 1</h4>
                    <PhysicalConditioning />
                    <HealingSpells />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Intermediate 2</h4>
                    <SpellMastery />
                    <SilenceResistance />
                    <FinalStruggle />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Advanced</h4>
                    <DefensiveTactics />
                    <Blessing />
                </div>

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Expert</h4>
                    <DarkMagic />
                    {(type) ? <BattleSorcery /> : (<div></div>)}
                    {(type === 'healing') ? (<FirstAid />) : <BattleSorcery />}
                </div>

            </div>
        </>
    )
}

export default ElementalMagic