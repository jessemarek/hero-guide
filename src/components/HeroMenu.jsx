import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

//Components
import HeroCard from './HeroCard'
import AwakeningCard from './AwakeningCard'
import SearchBar from './SearchBar'

const HeroMenu = props => {

    /******************** State ********************/
    const [heroList, setHeroList] = useState([{ name: 'konrad', awakened: true, position: 'front' }, { name: 'tareth', awakened: false, position: 'front' }, { name: 'desmond', awakened: true, position: 'mid' }, { name: 'magnus', awakened: true, position: 'back' }, { name: 'garrick', awakened: true, position: 'mid' }, { name: 'magdor', awakened: false, position: 'front' }, { name: 'gizmo', awakened: false, position: 'back' }])

    const [activeBtn, setActiveBtn] = useState('all')

    /******************** CallBacks ********************/

    //Callback for alphabetizing Hero names 
    const compare = (a, b) => {
        const heroA = a.name
        const heroB = b.name

        let comparison = 0

        if (heroA > heroB) {
            comparison = 1
        }
        else if (heroA < heroB) {
            comparison = -1
        }

        return comparison
    }

    return (
        <>
            <header>
                {/* Displays for Hero Guide Menu */}
                <Route path={'/heroes'}><h3>Hero Guides</h3></Route>

                {/* Displays for Awakening Quest Menu */}
                <Route path={'/awakenings'}><h3>Awakening Quests</h3></Route>

                <h5>Select a Hero</h5>

                <SearchBar activeBtn={activeBtn} setActiveBtn={setActiveBtn} />

            </header>

            <section className="hero-menu">
                <ul id="hero-list">

                    {/* Displays for Hero Guide Menu */}
                    <Route path={'/heroes'}>
                        {
                            heroList &&
                            heroList
                                //Sort through the hero list by battlefield position
                                .filter(hero => {
                                   if(activeBtn !== 'all'){
                                    if(hero.position === activeBtn){
                                        return hero
                                    }
                                   }
                                   else return hero
                                })
                                //Alphabetize the Hero List by name
                                .sort(compare)
                                //Create a Hero Card for each hero in the list
                                .map((hero, idx) => <HeroCard key={idx + 1} hero={hero} />)
                        }
                    </Route>

                    {/* Displays for Awakening Quest Menu */}
                    <Route path={'/awakenings'}>
                        {
                            heroList &&
                            heroList
                                //Filter out heroes that don't have an awakening
                                .filter(hero => hero.awakened)
                                //Sort through the hero list by battlefield position
                                .filter(hero => {
                                    if(activeBtn !== 'all'){
                                     if(hero.position === activeBtn){
                                         return hero
                                     }
                                    }
                                    else return hero
                                 })
                                //Alphabetize the Hero List by name
                                .sort(compare)
                                //Create a Hero Card for each hero in the list
                                .map((hero, idx) => <AwakeningCard key={idx + 1} hero={hero} />)
                        }
                    </Route>
                </ul>
            </section>
        </>
    )
}

export default HeroMenu