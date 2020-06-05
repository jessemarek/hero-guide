import React from 'react'

//Talent Components
import ExplosiveMagic from '../talents/ExplosiveMagic'
import OffensiveSpells from '../talents/OffensiveSpells'

import DefensiveTactics from '../talents/DefensiveTactics'
import DamageResistance from '../talents/DamageResistance'

import Stealth from '../talents/Stealth'
import Blessing from '../talents/Blessing'
import SpellMastery from '../talents/SpellMastery'

import HealingPotions from '../talents/HealingPotions'
import EvasiveManeuvers from '../talents/EvasiveManeuvers'

import SpellResistance from '../talents/SpellResistance'
import Forcefields from '../talents/Forcefields'
import FirstAid from '../talents/FirstAid'

const Poise = ({ type }) => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Poise</h2>
            </div>

            <div className="talent-tree">

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Basic</h4>
                    <ExplosiveMagic />
                    <div></div>
                    <OffensiveSpells />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Intermediate 1</h4>
                    <DefensiveTactics />
                    <DamageResistance />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Intermediate 2</h4>
                    <Stealth />
                    <Blessing />
                    <SpellMastery />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Advanced</h4>
                    <HealingPotions />
                    <EvasiveManeuvers />
                </div>

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Expert</h4>
                    <SpellResistance />
                    {(type) ? <Forcefields /> : (<div></div>)}
                    {(type === 'healing') ? (<FirstAid />) : <Forcefields />}
                </div>

            </div>
        </>
    )
}

export default Poise