import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

//Components
import HeroCard from './HeroCard'
import SearchBar from './SearchBar'

const HeroMenu = props => {

    const [heroList, setHeroList] = useState(['konrad', 'magdor', 'tareth', 'desmond', 'slim', 'driller', 'ethera', 'magnus','xanos', 'elric', 'alana', 'goram', 'taurus'])

    return(
        <>
            <header>
                {/* Displays for Hero Guide Menu */}
                <Route path={'/heroes'}><h3>Hero Guides</h3></Route>

                {/* Displays for Awakening Quest Menu */}
                <Route path={'/awakenings'}><h3>Awakening Quests</h3></Route>

                <h5>Select a Hero</h5>

                <SearchBar />

            </header>

            <section className="hero-menu">
                <ul id="hero-list">

                    {/* Displays for Hero Guide Menu */}
                    <Route path={'/heroes'}>
                        {
                            heroList && 
                            heroList
                                .sort() //Alphabetize the Hero List by name
                                .map((hero, idx) => <HeroCard key={idx + 1} name={hero} />) //Create a Hero Card for each hero in the list
                        }
                    </Route>

                    {/* Displays for Awakening Quest Menu */}
                    <Route path={'/awakenings'}>

                    </Route>
                </ul>
            </section>
        </>
    )
}

export default HeroMenu