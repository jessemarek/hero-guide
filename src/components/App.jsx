import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Components
import Navbar from './Navbar'
import HeroMenu from './hero-menus/HeroMenu'
import HeroGuide from './hero-guide/HeroGuide'
import Credits from './Credits'
import Footer from './Footer'

//dummy data
import { hero } from '../testHero'

const App = () => {

    const [currentHero] = useState(hero)

    return (
        <Router>
            <Navbar />
            <Route exact path='/(heroes|awakenings)/' component={HeroMenu} />
            <Route exact path='/heroes/:hero'>
                <HeroGuide hero={currentHero} />
            </Route>
            <Route exact path='/credits' component={Credits} />
            <Footer />
        </Router>
    )
}

export default App