import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

//Components
import HeroCard from './HeroCard'
import AwakeningCard from './AwakeningCard'
import SearchBar from './SearchBar'

const HeroMenu = props => {

    /******************** State ********************/
    const [heroList, setHeroList] = useState([{name: 'konrad', awakened: true, position: 'front'},{name: 'tareth', awakened: false, position: 'front'}, {name: 'desmond', awakened: true, position: 'mid'}])

    /******************** CallBacks ********************/
    
    //Callback for alphabetizing Hero names 
    const compare = (a, b) => {
        const heroA = a.name
        const heroB = b.name

        let comparison = 0

        if(heroA > heroB){
            comparison = 1
        }
        else if(heroA < heroB){
            comparison = -1
        }

        return comparison
    }

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
                                .sort(compare) //Alphabetize the Hero List by name
                                .map((hero, idx) => <HeroCard key={idx + 1} hero={hero} />) //Create a Hero Card for each hero in the list
                        }
                    </Route>

                    {/* Displays for Awakening Quest Menu */}
                    <Route path={'/awakenings'}>
                    {
                            heroList && 
                            heroList
                                .filter(hero => hero.awakened)
                                .sort(compare) //Alphabetize the Hero List by name
                                .map((hero, idx) => <AwakeningCard key={idx + 1} hero={hero} />) //Create a Hero Card for each hero in the list
                        }
                    </Route>
                </ul>
            </section>
        </>
    )
}

export default HeroMenu