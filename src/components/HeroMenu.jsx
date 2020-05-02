import React, { useState, useEffect } from 'react'
import HeroCard from './HeroCard'
import SearchBar from './SearchBar'

const HeroMenu = props => {

    const [heroList, setHeroList] = useState(['tareth', 'desmond', 'driller'])

    return(
        <>
            <header>
                <h3>Hero Guides</h3>
                <h5>Select a Hero</h5>
                <SearchBar />

            </header>

            <section className="hero-menu">
                <ul id="hero-list">
                    {
                        heroList && 
                        heroList
                            .sort() //Alphabetize the Hero List by name
                            .map((hero, idx) => <HeroCard key={idx} name={hero} />) //Create a Hero Card for each hero in the list
                    }
                </ul>
            </section>
        </>
    )
}

export default HeroMenu