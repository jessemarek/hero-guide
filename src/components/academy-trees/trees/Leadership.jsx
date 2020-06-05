import React from 'react'

//Talent Components
import HealingPotions from '../talents/HealingPotions'
import EvasiveManeuvers from '../talents/EvasiveManeuvers'

import DarkMagic from '../talents/DarkMagic'
import BattleSorcery from '../talents/BattleSorcery'

import ExplosiveMagic from '../talents/ExplosiveMagic'
import OffensiveSpells from '../talents/OffensiveSpells'
import HealingSpells from '../talents/HealingSpells'

import SilenceResistance from '../talents/SilenceResistance'
import FinalStruggle from '../talents/FinalStruggle'

import Stealth from '../talents/Stealth'
import Blessing from '../talents/Blessing'
import FirstAid from '../talents/FirstAid'

const Leadership = ({ type }) => {

    return (
        <>
            <div className="section-header">
                <h2>Heroic Academy - Leadership</h2>
            </div>

            <div className="talent-tree">

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Basic</h4>
                    <HealingPotions />
                    <div></div>
                    <EvasiveManeuvers />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Intermediate 1</h4>
                    <DarkMagic />
                    <BattleSorcery />
                </div>

                <div className="tree-tier-column col-type-3">
                    <h4 className="tier-title">Intermediate 2</h4>
                    <ExplosiveMagic />
                    <OffensiveSpells />
                    <HealingSpells />
                </div>

                <div className="tree-tier-column col-type-2">
                    <h4 className="tier-title">Advanced</h4>
                    <SilenceResistance />
                    <FinalStruggle />
                </div>

                <div className="tree-tier-column col-type-1">
                    <h4 className="tier-title">Expert</h4>
                    <Stealth />
                    {(type) ? <Blessing /> : (<div></div>)}
                    {(type === 'healing') ? (<FirstAid />) : <Blessing />}
                </div>

            </div>
        </>
    )
}

export default Leadership