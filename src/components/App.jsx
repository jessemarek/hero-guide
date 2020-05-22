import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Components
import Navbar from './Navbar'
import HeroMenu from './hero-menus/HeroMenu'
import Credits from './Credits'
import Footer from './Footer'

import FusionItems from './hero-guide/FusionItems'

const App = () => {

    return (
        <Router>
            <Navbar />
            <Route exact path='/(heroes|awakenings)/' component={HeroMenu} />
            <Route exact path='/credits' component={Credits} />

            <FusionItems />

            <Footer />
        </Router>
    )
}

export default App