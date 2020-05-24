import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Components
import Navbar from './Navbar'
import HeroMenu from './hero-menus/HeroMenu'
import Credits from './Credits'
import Footer from './Footer'

import Abilities from './hero-guide/Abilities'
import FusionItems from './hero-guide/FusionItems'
import KeyFusionItems from './hero-guide/KeyFusionItems'

const App = () => {

    return (
        <Router>
            <Navbar />
            <Route exact path='/(heroes|awakenings)/' component={HeroMenu} />
            <Route exact path='/credits' component={Credits} />

            <div className="wrapper">
                <Abilities />
                <FusionItems />
                <KeyFusionItems />
            </div>

            <Footer />
        </Router>
    )
}

export default App