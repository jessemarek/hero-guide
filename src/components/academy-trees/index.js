import Ambush from './trees/Ambush'
import Chivalry from './trees/Chivalry'
import Combat from './trees/Combat'
import Defense from './trees/Defense'
import Determination from './trees/Determination'
import Discipline from './trees/Discipline'
import Fearlessness from './trees/Fearlessness'
import Mysticism from './trees/Mysticism'

//Components Object for dynamic academy tree creation
export const academyTrees = {
    "ambush": Ambush,
    "chivalry": Chivalry,
    "combat": Combat,
    "defense": Defense,
    "determination": Determination,
    "discipline": Discipline,
    /* "elemental-magic": ElementalMagic, */
    "fearlessness": Fearlessness,
    /* "heroism": Heroism,
    "honor": Honor,
    "leadership": Leadership, */
    "mysticism": Mysticism,
    /* "poise": Poise,
    "resolve": Resolve,
    "support": Support,
    "tactics": Tactics */
}