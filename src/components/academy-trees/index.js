import React from 'react'

import Ambush from './trees/Ambush'
import Chivalry from './trees/Chivalry'
import Combat from './trees/Combat'
import Defense from './trees/Defense'
import Determination from './trees/Determination'
import Discipline from './trees/Discipline'
import ElementalMagic from './trees/ElementalMagic'
import Fearlessness from './trees/Fearlessness'
import Heroism from './trees/Heroism'
import Honor from './trees/Honor'
import Leadership from './trees/Leadership'
import Mysticism from './trees/Mysticism'
import Poise from './trees/Poise'
import Resolve from './trees/Resolve'
import Support from './trees/Support'
import Tactics from './trees/Tactics'

//Components Object for dynamic academy tree creation
export const academyTrees = {
    "ambush": Ambush,
    "chivalry": Chivalry,
    "combat": Combat,
    "combat-dot": () => <Combat type="DoT" />,
    "combat-summon": () => <Combat type="summon" />,
    "defense": Defense,
    "defense-dot": () => <Defense type="DoT" />,
    "defense-summon": () => <Defense type="summon" />,
    "determination": Determination,
    "determination-summon": () => <Determination type="summon" />,
    "discipline": Discipline,
    "discipline-dot": () => <Discipline type="DoT" />,
    "elemental-magic": ElementalMagic,
    "elemental-magic-healing": () => <ElementalMagic type="healing" />,
    "fearlessness": Fearlessness,
    "heroism": Heroism,
    "heroism-healing": () => <Heroism type="healing" />,
    "honor": Honor,
    "honor-healing": () => <Honor type="healing" />,
    "leadership": Leadership,
    "leadership-healing": () => <Leadership type="healing" />,
    "mysticism": Mysticism,
    "mysticism-dot": () => <Mysticism type="DoT" />,
    "mysticism-summon": () => <Mysticism type="summon" />,
    "poise": Poise,
    "poise-healing": () => <Poise type="healing" />,
    "resolve": Resolve,
    "support": Support,
    "support-summon": () => <Support type="summon" />,
    "tactics": Tactics
}