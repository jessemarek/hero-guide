import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

//Components
import HeroCard from './HeroCard'
import AwakeningCard from './AwakeningCard'
import SearchBar from './SearchBar'

//Dummy data
import heroData from '../heroData'

const HeroMenu = props => {

    /******************** State ********************/
    //List of Heroes
    const [heroList, setHeroList] = useState(heroData)

    //Active filter button
    const [activeBtn, setActiveBtn] = useState('all')

    //Search input value
    const [searchField, setSearchField] = useState('')

    /******************** CallBacks ********************/

    //Filter button handler
    const buttonHandler = e => {
        const name = e.target.name
        setActiveBtn(name)
    }

    //Search input handler
    const inputHandler = e =>{
        const value = e.target.value
        setSearchField(value)
    }

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

    /******************** JSX ********************/
    return (
        <>
            <header>
                {/* Displays for Hero Guide Menu */}
                <Route path={'/heroes'}><h3>Hero Guides</h3></Route>

                {/* Displays for Awakening Quest Menu */}
                <Route path={'/awakenings'}><h3>Awakening Quests</h3></Route>

                <h5>Select a Hero</h5>

                <SearchBar 
                    activeBtn={activeBtn} 
                    searchField={searchField}
                    buttonHandler={buttonHandler}
                    inputHandler={inputHandler} 
                />

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
                                //Filter by search input value
                                .filter(hero => searchField === "" ? hero : hero.name.toLowerCase().includes(searchField.toLowerCase()))
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
                                 //Filter by search input value
                                .filter(hero => searchField === "" ? hero : hero.name.toLowerCase().includes(searchField.toLowerCase()))
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