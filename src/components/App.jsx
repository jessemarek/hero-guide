import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Components
import Navbar from './Navbar'
import HeroMenu from './hero-menus/HeroMenu'
import Credits from './Credits'
import Footer from './Footer'

import CloakOfWisdom from './fusion-items/red-items/CloakOfWisdom'
import CrescentStaff from './fusion-items/red-items/CrescentStaff'
import HurricaneBlade from './fusion-items/red-items/HurricaneBlade'
import MastersCap from './fusion-items/red-items/MastersCap'
import PaladinsChestplate from './fusion-items/red-items/PaladinsChestplate'
import PureJadeChest from './fusion-items/red-items/PureJadeChest'
import SongbirdRing from './fusion-items/red-items/SongbirdRing'
import SphereOfTheSands from './fusion-items/red-items/SphereOfTheSands'
import TyrantsHelmet from './fusion-items/red-items/TyrantsHelmet'
import Widowmaker from './fusion-items/red-items/Widowmaker'


const fusionItems = {
    "cloak-of-wisdom": CloakOfWisdom,
    "crescent-staff": CrescentStaff,
    "hurricane-blade": HurricaneBlade,
    "master's-cap": MastersCap,
    "paladins-chestplate": PaladinsChestplate,
    "pure-jade-chest": PureJadeChest,
    "songbird-ring": SongbirdRing,
    "sphere-of-the-sands": SphereOfTheSands,
    "tyrants-helmet": TyrantsHelmet,
    "widowmaker": Widowmaker
}

const testArr = [
    "cloak-of-wisdom",
    "crescent-staff",
    "hurricane-blade",
    "master's-cap",
    "paladins-chestplate",
    "pure-jade-chest",
    "songbird-ring",
    "sphere-of-the-sands",
    "tyrants-helmet",
    "widowmaker"
]


const App = () => {

    return (
        <Router>
            <Navbar />
            <Route exact path='/(heroes|awakenings)/' component={HeroMenu} />
            <Route exact path='/credits' component={Credits} />
            <div className="purple-fusions">
                <div className="fusion-box">
                    {
                        testArr.map((i, idx) => {
                            const TagName = fusionItems[i]
                            return <TagName key={idx} />
                        })
                    }
                </div>
            </div>
            <Footer />
        </Router>
    )
}

export default App